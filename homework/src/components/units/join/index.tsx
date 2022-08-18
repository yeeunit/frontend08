import * as J from "./Join.styles"



import { useState } from 'react'
import { useRouter } from "next/router"
import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationCreateUserArgs } from "../../../commons/types/generated/types";


const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
    }
  }
`;

export default function Join(){

    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const [emailError, setEmailError] = useState("")
    // const [accessToken, setAccessToken] = useRecoilState(accessTokenState);


    const [createUser] = useMutation<
      Pick<IMutation, "createUser">,
      IMutationCreateUserArgs>(CREATE_USER);
  

    function onChangeName(event){
      setName(event.target.value)
    }
    function onChangeEmail(event){
        setEmail(event.target.value)
    }

    function onChangePassword(event){
        setPassword(event.target.value)
    }

    const onClickSignup = async () => {

        const result = await createUser({
            variables: { 
                createUserInput:{
                email, password, name }
            },
          });


        // 검증하기
        if(email.includes("@") === false){
          // alert("이메일이 올바르지 않습니다!! @가 없음!!")
          // document.getElementById("qqq").innerText = "이메일이 올바르지 않습니다!! @가 없음!!"
          setEmailError("이메일이 올바르지 않습니다!! @가 없음!!")
      } else {
          // Backend 컴퓨터에 API(함수) 요청하기
          alert("회원가입을 축하합니다!!!")
          router.push("/boards/login")
      }
  

        // //   console.log(accessToken);
        // alert("회원가입을 축하합니다!!!")
        // router.push("/boards/login")

    }

        

    return (
        <>
         <J.Wrapper>

        <h1>회원가입</h1><br />
        
            이름 :  <input type="text" onChange={onChangeName} /><br />
            
            이메일: <input type="text" onChange={onChangeEmail} /><br />
            <div>{emailError}</div>
            
            비밀번호: <input type="password" onChange={onChangePassword} /><br />

            <button onClick={onClickSignup}>회원가입</button>
            </J.Wrapper>
        </>
    )

}
