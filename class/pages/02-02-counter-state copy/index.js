import { useState } from 'react'

export default function CounterStatePage(){

    const [count, setCount] = useState(0)

    function counterUp(){
ㄴ
        setCount(1)
        setCount(2)
        setCount(53)
        setCount(3331)
    }

    //스테이트가 바뀌면 컴포넌트가 다시 렌더
    //작동하면 전체 함수가 다시 실행됨 

    // 카운트를 눌렀을때 1로 바뀌고 다시 2로 바뀌고
    // 최종적으로 3331 보이면 4번 리렌더가 일어날까? (비효율적..)
    // 셋스테이트를 하게되면 임시저장공간에 카운트 1로 바꾸기 먼저 실행 후 마지막까지 실행해서 임시저장하고 마지막꺼 한번만 리렌더를 하게 됨 

    return(
        <>
            <div>{count}</div>
            <button onClick={counterUp}>
                카운트 올리기!!!
            </button>

        </>
    )
}