// # 4-1. HOC로 권한분기로직 withAuth로 분리하기

// 로그인하는 페이지

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, Component, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../src/commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../src/commons/types/generated/types";
import { withAuth } from "../../commons/example/hoc/withAuth";
import LoginWriteUI from "./Login.presenter";
import { LOGIN_USER } from "./Login.queries";

export default function LoginWrite() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: { email, password },
    });

    const accessToken = result.data?.loginUser.accessToken;
    console.log(accessToken);
    if (!accessToken) {
      alert("로그인 실패");
      return;
    }

    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken);
    alert("로그인 성공");
    //    router.push("../../../../pages/boards/login/loginSuccess")
    router.push("/boards/login/loginSuccess");
  };

  return (
    <LoginWriteUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
    ></LoginWriteUI>
  );
}
