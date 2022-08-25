import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import * as H from "./LayoutHeader.styles";

import Link from "next/link";
import { FETCH_USER_LOGGED_IN } from "./LayoutHeader.queries";
import { Button, Modal } from "antd";
import PointModalPage from "../../../units/modal/point";
import { useState } from "react";

export default function LayoutHeaderUI(props) {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const [isOpen, setIsOpen] = useState(false);

  const onClickOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <H.Wrapper>
        <H.Welcome>
          <Link href="http://localhost:3000/">
            <a>👩🏻‍💻 Welcome to Yenny's Page </a>
          </Link>
        </H.Welcome>

        <Modal
          visible={props.isPointOpen}
          footer={[]}
          onCancel={props.onClickClosePointModal}
        >
          <h1>충전하실 금액을 선택해주세요!</h1>
          <form>
            <select
              defaultValue={0}
              {...props.register("price")}
              onChange={props.onClickPointSubmit}
            >
              <option value={0} disabled>
                포인트 선택
              </option>
              <option value={100}>100원</option>
              <option value={500}>500원</option>
              <option value={2000}>2000원</option>
              <option value={5000}>5000원</option>
            </select>
            <Button
              disabled={!props.isBtnActive}
              type="button"
              onClick={props.handleSubmit(props.onClickPointSubmit)}
              isBtnActive={props.isBtnActive}
            >
              충전하기
            </Button>
          </form>
        </Modal>

        <H.UserWrapper>
          {props.isLogin ? (
            <>
              <H.Login>
                <span> {data?.fetchUserLoggedIn.name}</span>님
                포인트&nbsp;&nbsp;
                <span>{data?.fetchUserLoggedIn.userPoint?.amount}</span>P
                &nbsp;&nbsp;&nbsp;
                <span>
                  <PointModalPage />
                  &nbsp;&nbsp;
                </span>
                {/* <span>장바구니</span>
                &nbsp;&nbsp;&nbsp; */}
                <span onClick={props.onClickLogOut}>로그아웃</span>
              </H.Login>
            </>
          ) : (
            <>
              <H.Login>
                <Link href="/boards/login">
                  <a> 로그인 </a>
                </Link>
              </H.Login>

              <H.Login>
                <Link href="/boards/join">
                  <a> 가입하기 </a>
                </Link>
              </H.Login>
            </>
          )}
        </H.UserWrapper>
      </H.Wrapper>
    </>
  );
}
