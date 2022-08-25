import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import * as H from "./LayoutHeader.styles";
import { withAuth } from "../../example/hoc/withAuth";

import { ILayoutHeaderProps } from "./LayoutHeader.types";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return (
    <>
      <H.Wrapper>
        <H.Welcome>
          <a href="http://localhost:3000/">👩🏻‍💻 Welcome to Yenny's Page </a>
        </H.Welcome>

        <H.UserWrapper>
          {props.isLogin ? (
            <>
              <H.Login>
                {/* <span> { props.userInfo?.name }</span> */}님 포인트
                {/* <span>  { props.userInfo.userPoint.amount } </span> */}P
                &nbsp;&nbsp;&nbsp;
                <span onClick={props.onClickOpenPoint}>충전</span>
                &nbsp;&nbsp;&nbsp;
                <span onClick={props.onClickLogOut}>로그아웃</span>
              </H.Login>
            </>
          ) : (
            <>
              <H.Login>
                <a href="http://localhost:3000/boards/login/"> 로그인 </a>
              </H.Login>

              <H.Login>
                <a href="http://localhost:3000/boards/join/"> 가입하기 </a>
              </H.Login>
            </>
          )}
        </H.UserWrapper>
      </H.Wrapper>
    </>
  );
}
