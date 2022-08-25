import { gql, useMutation } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isLoginStatus } from "../../../../commons/store";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from "../../../../commons/types/generated/types";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        _id
        amount
      }
    }
  }
`;

export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      status
      statusDetail
    }
  }
`;

export default function LayoutHeader() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useRecoilState(isLoginStatus);
  const [userInfo, setUserInfo] = useState();
  const [isPointOpen, setIsPointOpen] = useState(false);

  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);

  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLogin(true);
      setUserInfo(JSON.parse(localStorage.getItem("userInfo") as string));
    } else if (!localStorage.getItem("accessToken")) {
      setIsLogin(false);
    }
  }, [isLogin]);

  const onClickPointSubmit = (data: any) => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "포인트충전",
        amount: data.price,
        buyer_email: "xxx@gmail.com",
        buyer_name: "ooo",
        buyer_tel: "010-0000-0000",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/28-01-payment",
      },
      async (rsp: any) => {
        if (rsp.success) {
          await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          setIsPointOpen(false);
          alert("결제 성공");
        } else {
          // 결제 실패 시 로직,
          alert("결제 실패");
        }
      }
    );
  };

  const onClickOpenPoint = () => {
    setIsPointOpen(true);
  };

  const onClickClosePoint = () => {
    setIsPointOpen(false);
  };

  const onClickLogOut = async () => {
    try {
      await logoutUser();
      localStorage.removeItem("userInfo");
      localStorage.removeItem("accessToken");
      setIsLogin(false);
      router.push("/");
      alert("로그아웃 성공");
    } catch (error) {
      alert("로그아웃 실패");
    }
  };

  const onClickLogo = () => {
    router.push("/boards");
  };

  return (
    <>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>

      <LayoutHeaderUI
        isLogin={isLogin}
        isPointOpen={isPointOpen}
        userInfo={userInfo}
        onClickLogOut={onClickLogOut}
        onClickLogo={onClickLogo}
        onClickOpenPoint={onClickOpenPoint}
        onClickClosePoint={onClickClosePoint}
        onClickPointSubmit={onClickPointSubmit}
      />
    </>
  );
}
