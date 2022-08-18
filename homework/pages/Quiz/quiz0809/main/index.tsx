// 5. /pages/quiz06/main/index.tsx 페이지를 만들고 로그인 화면을 만들어 주세요.
// 6. 로그인 완료시, 로컬스토리지에 게시물 장바구니 데이터가 있으면 "비회원으로 담긴 게시물 장바구니가 존재합니다. 이동하시겠습니까?" 라는 메시지를 띄워주세요.
// 7. [ 이동하기 ] 버튼을 누르면 /pages/quiz06/basket/index.tsx로 이동해 주세요.

import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";
import { IMutation, IMutationLoginUserArgs } from "../../../src/commons/types/generated/types";


const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const Button = styled.div`
    background-color: white;
    width: 200px;
    height: 50px;
    text-align: center;
    line-height: 45px;
    font-family: "Jua";
    font-size: 20px;
    margin-top: 20px;
    background-color: #2B3856;
    border: 5px solid #2B3856;
    color: white;
    :hover{
    cursor: pointer;
    border: 5px solid #2B3856;
    background-color: white;
    color: #2B3856;
}
`

export default function LoginPage(){

    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
  
    const [loginUser] = useMutation<
      Pick<IMutation, "loginUser">,
      IMutationLoginUserArgs>(LOGIN_USER);
  
    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {setEmail(event.target.value);};
  
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };

  
    const onClickLogin = async () => {
      const result = await loginUser({
        variables: { email, password },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);
      if (!email || !password || !accessToken) {
        alert("로그인에 실패하였습니다. 다시 시도해 주세요.");
        return;
      }
  
      setAccessToken(accessToken);

        if(window.confirm("비회원으로 담긴 게시물 장바구니가 존재합니다. 이동하시겠습니까?")
        ) { window.location.href ="/quiz0809/basket"
        } else{
        alert("취소")
        }
    
    //   alert("비회원으로 담긴 게시물 장바구니가 존재합니다. 이동하시겠습니까?");

    //   <button onClick={onClickMove}>이동하기</button>


    const onClickMove = () => {
        router.push("/quiz0809/basket")
    }


    }



    return(
        <>
        <div style={{padding: "40px"}}>
        <h1 style={{marginBottom:"20px", textAlign:"center", color:"#2B3856", }}> 로그인화면 입니다 </h1>

        이메일: <input type="text" onChange={onChangeEmail} /><br /><br />
        비밀번호: <input type="password" onChange={onChangePassword} /><br /><br />

        <Button onClick={onClickLogin}>로그인하기</Button>
        <br /><br />

        {/* <button onClick={onClickMove}>장바구니 이동하기</button> */}
        
        
        </div>
        </>
    )
}