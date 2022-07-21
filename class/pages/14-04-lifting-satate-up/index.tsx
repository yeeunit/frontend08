import { useState } from "react"
import Child1 from "../../src/components/units/14-lifting-state-up/child1";
import Child2 from "../../src/components/units/14-lifting-state-up/child2";

export default function LiftingStateUpPage(){

    const [count, setCount] = useState(0)

    // 방법2
    const onClickCountUp = () => {
        setCount((prev: any) => prev + 1)
    }

    return (
        <div>

            <Child1 count={count} onClickCountUp={onClickCountUp}/>

            <div> =========================== </div>

            <Child2 count={count} stCount={setCount}/>

        </div>
    )
}