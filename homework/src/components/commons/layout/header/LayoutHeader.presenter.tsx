import { gql, useQuery } from "@apollo/client"
import { IQuery } from "../../../../commons/types/generated/types"
import * as H from "./LayoutHeader.styles"
import { withAuth } from "../../example/hoc/withAuth" 


import { ILayoutHeaderProps } from "./LayoutHeader.types"

const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn {
        fetchUserLoggedIn{
            email
            name
        }
    }
`

// function LayoutHeaderUI(){
export default function LayoutHeaderUI(props: ILayoutHeaderProps) {

    const {data} = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN)

    return(
    <>
        <H.Wrapper>

            <H.Welcome>
                <a href="http://localhost:3000/"> 
                👩🏻‍💻  Welcome to Yenny's Page </a>
            </H.Welcome>


            <H.UserWrapper>

            {/* <div>
            <H.User>  {data?.fetchUserLoggedIn.name} </H.User> 님 웰컴!!! 
            </div> */}


            <H.Login>
            <a href="http://localhost:3000/boards/login/"> 
            login
            </a>
            </H.Login>
            
            <H.Login>
            <a href="http://localhost:3000/boards/join/"> 
            join
            
            {/* <H.Img src="/images/avatar.png"/> */}
            </a>
            </H.Login>
            
            </H.UserWrapper>


        </H.Wrapper>

    </>
    )
}

// export default withAuth(LayoutHeaderUI)
