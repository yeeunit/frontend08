// 로그인하는 페이지

import { gql, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"
import { useRecoilState } from "recoil"
import { accessTokenState } from "../../src/commons/store"
import { IMutation, IMutationLoginUserArgs } from "../../src/commons/types/generated/types"


const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!){
        loginUser(email: $email, password: $password){
            accessToken
        }
    }
`

export default function LoginPage(){
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState)

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loginUser] = useMutation<Pick<IMutation, "loginUser">, IMutationLoginUserArgs>(LOGIN_USER)

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const onClickLogin = async () => {
        const result = await loginUser({
            variables: { email, password }
        })

       const accessToken = result.data?.loginUser.accessToken
       console.log(accessToken)
        if (!accessToken){
            alert("로그인에 실패 다시시도해라")
            return;
        }
       
       setAccessToken(accessToken)
       localStorage.setItem("accessToken", accessToken) 
       alert("로그인 성공")
       router.push("/23-04-login-check-success") 
    }


    return<>
    <div>
        
        이메일 : <input type="text" onChange={onChangeEmail}/> <br />
        비밀번호 : <input type="password" onChange={onChangePassword}/> <br />

        <button onClick={onClickLogin}>
            로그인하기</button>    

    </div>    
    </>
}