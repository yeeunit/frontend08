import { useState } from 'react'

export default function CounterStatePage(){

    const [count, setCount] = useState(0)

    function counterUp(){
        // prev는 임시 저장되어 있는 값을 가져옴
        // prev 값이 없으면 스테이트 값
        // 4씩 증가
        setCount( prev => prev + 1 )
        setCount( prev => prev + 1 )
        setCount( prev => prev + 1 )
        setCount( prev => prev + 1 )
 
        // setCount(count + 1 )
        // setCount(count + 1 )
        // setCount(count + 1 )
        // setCount(count + 1 )
        // 이렇게 해도 1씩만 증가


    }

    return(
        <>

            <div>{count}</div>
            <button onClick={counterUp}>카운트 올리기!!!</button>

        </>
    )

}