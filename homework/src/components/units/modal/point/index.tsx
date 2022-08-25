/* eslint-disable @next/next/no-sync-scripts */
import { gql, useMutation } from "@apollo/client";
import { Button, Modal } from "antd";
import Script from "next/script";

import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from "../../../../commons/types/generated/types";

import { v4 as uuid } from "uuid";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
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

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PointModalPage() {
  const router = useRouter();
  const [isBtnActive, setIsBtnActive] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [price, setPrice] = useState(100);

  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangePrice = (event) => {
    console.log(event.target.value);
    setPrice(Number(event.target.value));
  };

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const ButtonStyle = {
    border: "none",
    color: "white",
    background: "none",
    fontSize: "16px",
    cursor: "pointer",
    // color: "#2b3856",
  };

  const onClickPointSubmit = () => {
    setIsModalVisible(false);
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        merchant_uid: `charge_point_${uuid()}`,
        name: "포인트충전",
        amount: price,
        buyer_email: "00000@gmail.com",
        buyer_name: "000",
        buyer_tel: "010-000-000",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      async (rsp: any) => {
        if (rsp.success) {
          await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          //   setIsPointOpen(false);
          alert("결제 성공");
        } else {
          // 결제 실패 시 로직,
          alert("결제 실패");
        }
      }
    );
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>

        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <Button
        style={ButtonStyle}
        onClick={showModal}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        충전
      </Button>

      <Modal
        title="충전하실 금액을 선택해 주세요!"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form>
          <select
            defaultValue={0}
            //  { ...props.register("price") }
            onChange={onChangePrice}
          >
            <option>포인트선택</option>
            <option value={100}>100원</option>
            <option value={200}>200원</option>
            <option value={1000}>1000원</option>
          </select>

          <br />
        </form>
        <button onClick={onClickPointSubmit}>충전하기</button>
      </Modal>
    </>
  );
}
