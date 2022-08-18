// 3-1. 로그인 적용하기
// 1. login 페이지에서 아이디, 비밀번호 입력창을 만들고 loginUser를 활용하여 accessToken을 받아보세요.
// 2. 받은 accessToken을 Recoil을 활용해 _app.tsx의 state에 저장해 보세요.
// 3. 이후 모든 http request 통신에 accessToken을 첨부하기 위해 _app.tsx에 저장된 accessToken을 apollo의 request-header 영역에 추가해 보세요.
// 4. 로그인에 성공하면 성공한 페이지로 이동해 보세요.
// 단, accessToken이 없는 유저는 "로그인을 먼저 해주세요" 라는 경고문과 함께 login 페이지로 보내줍니다.

import { gql, useQuery } from "@apollo/client"
import { IQuery } from "../../src/commons/types/generated/types"


const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn {
        fetchUserLoggedIn{
            email
            name
        }
    }
`


export default function LoginSuccessPage(){

    const {data} = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN)
    console.log(data)

    // 3-2 정규표현식 적용하기
    console.log(/^\d{4}.\d{2}.\d{2}$/.test("2018.01.01"))
    console.log(/^\d{3}-\d{3,4}-\d{4}$/.test("010-1234-5678"))
    console.log( /^\w+@\w+\.\w+$/.test("aaa@bbb.com"))


    return(
        <>
        <div>
        {data?.fetchUserLoggedIn.name} 고객님 환영합니다 ^^
        </div>
        </>
    )

}

