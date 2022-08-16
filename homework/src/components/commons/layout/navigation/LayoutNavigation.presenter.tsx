import { Fragment } from "react";
import { MenuItem, MenuWrap, Wrapper } from "./LayoutNavigation.styles";
import { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

const NAVIGATION_MENUS = [
    // { name: "나의파이어베이스", page: "/myfirebase" },
    // { name: "라이브강아지", page: "/openapis" },

    { name: "| Freeboard |", page: "/boards/new" },
    { name: "| Market |", page: "/boards/market" },
    { name: "| Mypage |", page: "/" },

    // { name: "MAIN", page: "/" },
    // { name: "JOIN", page: "/boards/join/" },
    // { name: "LOGIN", page: "/boards/login/" },
    // { name: "REGISTER", page: "/boards/new/" },

    // { name: "LIST", page: "/boards/" },
    // { name: "BASKET", page: "/boards/basket/" },
    // { name: "MAP", page: "/boards/map/" },
    // { name: "PAYMENT", page: "/boards/payment/" },

]



export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {

    return(
        <Wrapper>
            <MenuWrap>

            {NAVIGATION_MENUS.map((el) => (
                <Fragment key={el.page}>
                    <MenuItem id={el.page} onClick={props.onClickMenu}>
                        {el.name}
                    </MenuItem>
                </Fragment>
            ))}
            </MenuWrap>

        </Wrapper>
    )
}