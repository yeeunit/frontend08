import { ReactNode } from "react";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import styled from "@emotion/styled";
import { useRouter } from "next/router";


const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color :  #fff;
`;
// #2B3856; #C24641

const HIDDEN_NAVIGATION = [
  "/boards/new",
  "/quiz0801",
  "/quiz0802/parent",
  "/quiz0802/child",
  "/quiz0802/example/recoil/edit",
  "/quiz0802/example/recoil/new",
  "/quiz0803/login-success",
  "/quiz0803/login",
  "/quiz0809/basket",
  "/quiz0809/boards",
  "/quiz0809/main",
  "/quiz0809/today",


  // ...,
];

const HIDDEN_BANNERS = [
  "/",
  "/boards/new",
  "/quiz0801",
  "/quiz0802/parent",
  "/quiz0802/child",
  "/quiz0802/example/recoil/edit",
  "/quiz0802/example/recoil/new",
  "/quiz0803/login",
  "/quiz0803/login-success",
  "/quiz0809/basket",
  "/quiz0809/boards",
  "/quiz0809/main",
  "/quiz0809/today",


  // ...,
];

const HIDDEN_FOOTER = [
  "/quiz0801",
  "/quiz0802/parent",
  "/quiz0802/child",
  "/quiz0802/example/recoil/edit",
  "/quiz0802/example/recoil/new",
  "/quiz0803/login",
  "/quiz0803/login-success",


]

interface ILayoutProps {
    children: ReactNode;
  }

export default function Layout(props: ILayoutProps) {

  const router = useRouter();
  console.log(router);

  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNERS.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);


    return (
      <>
        <LayoutHeader />
        
        {/* {!isHiddenBanner && <LayoutBanner />}  */}

        {!isHiddenNavigation && <LayoutNavigation />}

        <Body>{props.children}</Body>

        {!isHiddenFooter &&<LayoutFooter />}

      </>
    );
  }