// 로그인 결과보기

import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { IQuery } from "../../src/commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn {
        fetchUserLoggedIn{
            email
            name
        }
    }
`


// 로그인 한사람만 이용가능한 페이지(권한분기)

export default function LoginSuccessPage(){
    const router = useRouter()
    const {data} = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN)

    useEffect(() => {
    if(!localStorage.getItem("accessToken")){
        alert("로그인후 이용가능합")
        router.push("/23-03-login-check")
    }
    }, [])


    return(
        <>
        <div>{data?.fetchUserLoggedIn.name}님 환영합니다</div>
        
        </>
    )
}