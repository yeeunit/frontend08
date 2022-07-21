import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutHeader from "./header"
import LayoutBanner from "./banner"
import LayoutNavigation from "./navigation"
// import LayoutSidebar from "./sidebar"
import LayoutFooter from "./footer"

// const HIDDEN_HEADERS = [
//   "/12-05-modal-refactoring",
//   "/0720-one",
//   "/0720-two",
//   "/0720-three"
//   // ...
// ];
  
  interface ILayoutProps {
    children: ReactNode;
  }
  
  export default function Layout(props: ILayoutProps) {
    const router = useRouter();
    console.log(router);

    // const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

    
    return (
      <>
        <LayoutHeader />
        <LayoutBanner />
        <LayoutNavigation />
          
          <div>{props.children}</div>

        <LayoutFooter />

      </>
    );
  }
  