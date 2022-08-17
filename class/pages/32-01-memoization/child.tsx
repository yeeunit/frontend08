import { memo } from "react"

function MemoizationChildPage(){

    console.log("자식이 렌더링 됩니다.")

    // 메모이제이션을 통해 자식 렌더링을 막음
    return(
    <>
        <br /><br />
        <h1> 저는 자식 컴포넌트 입니다. </h1>

    </>
    )
}

export default memo (MemoizationChildPage)



// export default function MemoizationChildPage(){

//     console.log("자식이 렌더링 됩니다.")

//     // 부모에서 카운트를 올릴때마다 자식도 계속 렌더링됨.
//     return(
//     <>
//         <br /><br />
//         <h1> 저는 자식 컴포넌트 입니다. </h1>

//     </>
//     )
// }