import * as H from "./LayoutHeader.styles"

import { ILayoutHeaderProps } from "./LayoutHeader.types"

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {

    return(
    <>
        <H.Wrapper>

            {/* <H.Logo onClick={props.onClickLogo} /> */}
            <div>
                👩🏻‍💻  Welcome to Yenny's Page</div>
        </H.Wrapper>

    </>
    )
}

