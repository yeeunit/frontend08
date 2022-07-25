import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function FunctionCounterPage() {

    const router = useRouter()
    const [ count, setCount] = useState(5)

    const counterUp = () => {
        console.log(count)
        setCount(1)
    }

    const onClickMove = () =>{
        router.push("/")
    }

    // 컴포넌트디드마운트. 컴포넌트 그려지고 나서 실행 모두 유즈이펙트로 통일 
    // 의존성배열[]
    // 유즈이펙트는 모든게 그려지고 마지막에 실행됨


    useEffect(() => {
        console.log("그려지고 나서 실행")
    }, []);

    useEffect(() => {
        console.log("변경되고 나서 실행")
    });

    useEffect(() => {
        return() => {
            console.log("사라질떄 실행")
        }
    }, []);


    // // 1. 셋다 유즈이팩트이니 하나로 합치기 가능

    // useEffect(() => {
    //     console.log("그려지고 나서 실행")

    //     return () => {
    //         console.log("변경되고 나서 실행")
    //     }
    // }, []);

    // // 2. 잘못된 사용 예제 (1. 추가적인 렌더링 발생, 2. 무한루프 발생)
    // useEffect(() => {
    //     setCount(prev => prev + 1)

    // }, [])
    // // []안 count 넣을시 무한루프.. 


    console.log('나는 언제실행되게? 유즈이팩트는 위치 상관없이 맨마지막 실행')

    return(
        <>
            <div>{count}</div>
            <button onClick={counterUp}>카운트 올리기!!!</button>
            <button onClick={onClickMove}>이동!</button>
        </>
    )
}

    // 포트폴리오 랜딩페이지에 적용하기
    // 오픈 api


    // state = {
    //     count: 5,
    // }

    // componentDidMount(){
    //     console.log("그려지고 나서 실행")
    // }

    // componentDidUpdate(){
    //     console.log("변경되고 나서 실행")
    // }

    // componentWillUnmount(){
    //     console.log("사라질떄 실행")
    // }


    // counterUp = () => {
    //     console.log(this.state.count)
    //     this.setState({
    //         count: 1,
    //     })
    // }

    // onClickMove(){
    //     Router.push("https://naver.com")
    // }

//     render() { 
//         return (
//         <> 
//             <div>{this.state.count}</div>
//             <button onClick={this.counterUp}>카운트 올리기!!!</button>
//             <button onClick={this.onClickMove}>이동!</button>

//             {/* <button onClick={this.counterUp.bind(this)}>카운트 올리기!!!</button> */}

//         </>
//         )
//     }
// }


// 클래스안에넌 리턴 없음. 함수 function 안에서는 리턴이 있음. 