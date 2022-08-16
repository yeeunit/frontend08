import styled from "@emotion/styled"
import * as H from "./LayoutHeader.styles"

import { ILayoutHeaderProps } from "./LayoutHeader.types"

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {


    return(
    <>
        <H.Wrapper>

            <H.Welcome>
                <a href="http://localhost:3000/"> 
                👩🏻‍💻  Welcome to Yenny's Page </a>
            </H.Welcome>


            <H.UserWrapper>

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

