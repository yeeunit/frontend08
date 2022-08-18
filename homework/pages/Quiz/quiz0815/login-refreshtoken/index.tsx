// # 1-1. RefreshToken
// 1. 로그인을 했을 때, 받아오게 되는 refreshToken을 쿠키에 저장하기 위해 Apollo 설정에서, credentials를 include로 설정해 주세요.
// ⇒ 설정 후, 로그인을 시도하면 refreshToken을 아래와 같이 받아오게 됩니다.
// 2. 실제로 에러가 발생하였을 때, 인증관련 에러인지 확인하고, 인증 에러라면 refreshToken으로 accessToken을 다시 받아오는 로직을 getAccessToken이라는 함수를 만들고 작성해 주세요.
// 3. 새롭게 받은 accessToken을 활용해서, 기존에 실패했던 쿼리를 재시도 하는 로직을 Apollo 설정의 onError 내부에 작성해 주세요.
// 4. 새로고침을 해서 변수에 저장된 accessToken이 초기화 되었을 때, 새롭게 accessToken을 요청해서 적용하는 코드를 Apollo header 설정에서 추가해 주세요.

import { gql, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"
import { useRecoilState } from "recoil"
import { accessTokenState } from "../../../src/commons/store"
import { IMutation, IMutationLoginUserExampleArgs } from "../../../src/commons/types/generated/types"


const LOGIN_USER_EXAMPLE = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;


export default function LoginPage(){

    const [accessToken, setAccessToken] = useRecoilState(accessTokenState)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loginUserExample] = useMutation<Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs>(LOGIN_USER_EXAMPLE)

    const router = useRouter()

    const onChangeEmail =(event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const onClickLogin = async () => {

        const result = await loginUserExample({
            variables: { email, password },
        })
        const accessToken = result.data?.loginUserExample.accessToken;
        console.log(accessToken)
        if (!accessToken) {
            alert('로그인에 실패하였습니다. 다시시도해 주세요')
            return
        }

        setAccessToken(accessToken)
        alert("로그인성공")
        router.push("/quiz0815/login-refreshtoken-success/")
    }

    return(
    <>
        이메일: <input type="text" onChange={onChangeEmail} />
        비밀번호: <input type="password" onChange={onChangePassword} />
        <button onClick={onClickLogin}> 로그인하기! </button>
    
    </>
    )


}