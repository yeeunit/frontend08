import * as L from "./Login.styles";

export default function LoginWriteUI(props: any) {
  return (
    <>
      <L.Wrapper>
        <h1>로그인 페이지 </h1>
        <h2>예니월드에 오신것을 환영합니다</h2>
        <br />

        <div>
          이메일 <input type="text" onChange={props.onChangeEmail} /> <br />
          비밀번호 <input
            type="password"
            onChange={props.onChangePassword}
          />{" "}
          <br />
          <button onClick={props.onClickLogin}>로그인하기</button>
        </div>
      </L.Wrapper>
    </>
  );
}
