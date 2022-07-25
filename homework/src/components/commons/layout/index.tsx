import { ReactNode } from "react";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";


interface ILayoutProps {
    children: ReactNode;
  }

export default function Layout(props: ILayoutProps) {
    return (
      <>
        <LayoutHeader />
        <LayoutBanner />
        {/* <LayoutBanner />
        <LayoutNavigation />
        <Body>{props.children}</Body> */}
        <div>{props.children}</div>
        <LayoutFooter />

      </>
    );
  }