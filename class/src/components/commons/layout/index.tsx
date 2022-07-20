import {ReactNode} from 'react'

import LayoutHeader from "./header"
import LayoutBanner from "./banner"
import LayoutNavigation from "./navigation"
import LayoutFooter from "./footer"


const HIDDEN_HEADERS = [
    "/12-05-modal-refactoring",
    // ...,
    // ...,

]

interface ILayoutProps {
    children: ReactNode
}
export default function Layout(props: ILayoutProps) {
    const router = useRouter();
    console.log(router)

    const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath)

    return(

        <>
        {!isHiddenHeader && <LayoutHeader />}
        <LayoutBanner />
        <LayoutNavigation />

        <div style = {{display: "flex"}}
            <div style={{width: "100px", 
            height: "70px", backgroundColor: "orange",
             }} 
             >
            여기는 사이드바 입니다.
        </div>

        <div>{props.children}</div>
        </div>
        <LayoutFooter />
        </>
    )
}