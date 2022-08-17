// # 3-2. 메모이제이션

import { useCallback, useMemo, useState } from "react"
import MemoizationChildPage from "./child";


export default function MemoizationPage(){

    console.log("부모가 렌더링 됩니다.")

    let countLet = 0
    const [countState, setCountState] = useState(0)

    // const memo = useMemo(() => Math.random(), []) 
    // console.log(memo)


    // const onClickCountLet = useCallback(() => {
    //     console.log(countLet + 1)
    //     countLet += 1
    // }, [])

    const onClickCountLet = useMemo(() => () => {
        console.log(countLet)
        countLet += 1
    }, [])
    
    const onClickCountState = useMemo(() => () => {
        console.log(countState)
        setCountState((prev) => prev + 1)
    }, [])

    return(
        <>

        <h2> 나는 부모 🤱</h2>

        <div>카운트(let) : {countLet}</div>
            <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>

        <div>카운트(state) : {countState}</div>
            <button onClick={onClickCountState}>카운트(state) +1 올리기</button>
        
        <button
            onClick={() => {
                setCountState(countState + 1)
            }}>
                jsx
            </button>

        <br />

        <div> -----------------------------------  </div>

        <MemoizationChildPage />
        
        </>
    )
}