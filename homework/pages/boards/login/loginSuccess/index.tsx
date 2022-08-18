
// 로그인 결과보기

import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled"
import { useRouter } from "next/router";
import { IQuery } from "../../../../src/commons/types/generated/types";
import { withAuth } from "../../../../src/components/commons/example/hoc/withAuth";

const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn {
        fetchUserLoggedIn{
            email
            name
        }
    }
`

const Wrapper = styled.div`
  width: 1000px;
  /* height: 1847px; */
  margin: 50px auto;
  padding: 100px;
  display: flex;  
  flex-direction: column;
  align-items: center;
  /* border: 7px solid #2B3856; */
  /* box-shadow: 0px 0px 10px gray; */
  background-color: white;
  color: #2B3856;
  font-family: "Jua";

`;

const Title = styled.div`
  font-family: "Jua";
  font-size: 55px;
  font-weight: bold;
`;


// 로그인 한사람만 이용가능한 페이지(권한분기)

function LoginSuccessPage(){
    const router = useRouter()
    const {data} = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN)

console.log(data)
    return(
        <>
        <Wrapper>

            <Title>
                {data?.fetchUserLoggedIn.name}님 환영합니다^^
                
            </Title>

        </Wrapper>
        </>
    )
}

export default withAuth(LoginSuccessPage)