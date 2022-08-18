// 4주차 퀴즈
// 1-2. 클래스 컴포넌트를 함수형 컴포넌트로 변경하기


import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function FunctionHWComponentPage(){

    const router = useRouter()
    const [ count, setCount ] = useState(0)
    const inputRef = useRef<HTMLInputElement>(null)  

    const onClickButton = () => {
      setCount(prev => prev + 1 )
  }

  // onClickButton = () => {
  //   this.setState((prev: { count: number }) => ({ count: prev.count + 1 }));
  // };

    const onClickMove = () =>{
      console.log(count)
      router.push("/")
  }

    
    useEffect(() => {
      console.log ("컴포넌트가 마운트됐습니다~")
      inputRef.current?.focus()
    },[])

    useEffect(() => {
      console.log("컴포넌트가 변경됐습니다~")
    }, [count]);

    useEffect(() => {
      return() => {

        alert("컴포넌트가 제거됩니다~");
      }
    }, []);

   return(
        <>
          <h3>1-2. 클래스 컴포넌트를 함수형 컴포넌트로 변경하기</h3>
          <input type="password" ref={inputRef} />
          <div>카운트: {count}</div>
          <button onClick={onClickButton}>카운트(+1)</button>
          <button onClick={onClickMove}>이동하기</button>
        </>
    );
}



// export default class MyComponent extends Component {
//   state = {
//     count: 0,
//   };

//   inputRef = createRef<HTMLInputElement>();

//   componentDidMount() {
//     console.log("컴포넌트가 마운트됐습니다~");
//     this.inputRef.current?.focus();
//   }

  // componentDidUpdate() {
  //   console.log("컴포넌트가 변경됐습니다~");
  // }

  // componentWillUnmount() {
  //   alert("컴포넌트가 제거됩니다~");
  // }

  

//   render() {
//     console.log("마운트 시작");
//     return (
//       <>
//         <input type="password" ref={this.inputRef} />
//         <div>카운트: {this.state.count}</div>
// 				<button onClick={this.onClickCounter}>카운트(+1)</button>
//         <button onClick={this.onClickMove}>이동하기</button>
//       </>
//     );
//   }
// }