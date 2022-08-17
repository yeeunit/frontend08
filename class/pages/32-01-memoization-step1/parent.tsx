import { useCallback, useMemo, useState } from "react";
import MemoizationChildPage from "./child";

export default function MemoizationParentPage(){

    console.log("부모가 렌더링 됩니다.")

    let countLet = 0
    const [countState, setCountState] = useState(0)

    // useMemo()

    // useCallback()


    // 대괄호 안 countState 쓰면 카운트 스테이트가 바뀔떄마다 다시실행
    // 빈배열이면 한번만 실행 

    // 1 유즈메모로 변수 기억
    // 처음과 달리 매스 랜덤 숫자가 안바뀌고 고정

    const aaa = useMemo(() => Math.random(), []) 
    console.log(aaa)

    // 2 유즈콜백으로 함수 기억
    const onClickCountLet = useCallback(() => {
        console.log(countLet + 1)
        countLet += 1
    }, [])

    // 3 유즈콜백 사용시 state를 직접 사용하려면 주의해야함
    // const onClickCountState = useCallback(() => {
    //     // console.log(countState + 1)
    //     setCountState((prev) => prev + 1)
    // }, [])

    // 유즈 메모는 콜백함수의 값을 기억하는 것.
    // 4 유즈 메모로 나만의 유즈콜백 만들어 보기
    const onClickCountState = useMemo(() => () => {
        // console.log(countState + 1)
        setCountState((prev) => prev + 1)
    }, [])


    return(
        <>

        <h1> 저는 부모 컴포넌트 입니다. </h1>

        <div>카운트(let) : {countLet}</div>
            <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>

        <div>카운트(state) : {countState}</div>
            <button onClick={onClickCountState}>카운트(state) +1 올리기</button>

        <br /><br />
        <button
        onClick={()=>{
            console.log('이것도 가능함')
            setCountState(countState+1)
        }}>얘도가능</button>

        <div> =============================== </div>

        <MemoizationChildPage countState={countState}/>

        </>
    )
}