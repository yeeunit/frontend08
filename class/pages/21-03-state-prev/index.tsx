import { useState } from "react"

export default function StatePrevPage(){

    const [count, setCount] = useState(0)

    const onClickCount = () => {

        // 1. 화살표 함수
        // setCount((prev) => prev + 1)

        // 2. 함수선언식
        // setCount(function(prev) {
        //     return prev + 1
        //     // 로직 추가 가능
        //     // if() for()

        //     // return prev + 1
        // })

        // 3. 매개변수 바꾸기
        setCount((sdfsdfsfsd) => sdfsdfsfsd + 1 )

    }

    return(
        <>
        <div>
            <div>{count}</div>
            <button onClick={onClickCount}> 카운트 올리기!!! </button>
        </div>

        </>
    )
}