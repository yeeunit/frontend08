// 로그인 결과보기

import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../src/commons/types/generated/types";

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


    return(
        <>
        <div>{data?.fetchUserLoggedIn.name}님 환영합니다</div>
        
        </>
    )
}