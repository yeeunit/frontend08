// # 2-1. props, data, prev의 실체 파악하기

import styled from "@emotion/styled";
import Presenter from "./child";


export default function ContainerPage() {
    
  const Body = styled.div`
    padding: 20px;
    font-size: 30px;
  `

  return (
      <>
        <Body>

          { /* <Presenter child="철수" age={13} /> */}

          {Presenter({
            child : "철수",
            name : "영희",
            age : 22 })
            }

        </Body>
      </>
    );
  }