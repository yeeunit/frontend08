// # 2-1. props, data, prev의 실체 파악하기

import { useState } from "react";

  export default function Presenter(aaa: any) {

    // 3번 
    ["철수", "영희", "훈이", "맹구"].map((name, num) => {
      // console.log('index: ', num)
      // console.log('이름: ', name)
  
      console.log(`영희는 ${num}번째 칸에 들어있습니다.`)
      console.log(`${name}는 ${num}번째 칸에 들어있습니다.`)
  
      }) 
  
      // 4번 setState(prev => prev + 1) 

      const [state, setState] = useState(0)
      const onClickCount = () => {
        setState((qwer) => qwer + 1);
      };

      
    return(
    <>
      <h3>Quiz 5주차 2-1 props, data, prev의 실체 파악하기 </h3><br />
      <div>아래의 함수형 컴포넌트 불러오는 방식을 함수 자체를 불러오는 방식으로 변경해 보세요.</div><br />

        <div>{aaa.child}</div>
        <div>{aaa.name}는 {aaa.age}살 입니다.</div><br />

        <div>{state} &nbsp;&nbsp;
        <button onClick={onClickCount}>카운트업!</button>
        </div>

    </>
    ) 
  }