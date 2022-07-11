// import * as QQQ from 별로 묶어서 한꺼번에 가져올 수 있음
// 가져올떄는 QQQ.RedButton
// import QQQ, {RedInput} from './BoardWrite.styles'

import {
    RedInput,RedButton
} from './BoardWrite.styles'

export default function BoardWriteUI(props){

    return (
        <>
            작성자: <RedInput type="text" onChange={props.onChangeWriter} /><br />
            제목: <input type="text" onChange={props.onChangeTitle} /><br />
            내용: <input type="text" onChange={props.onChangeContents} /><br />
            <RedButton onClick={props.onClickGraphqlApi}>GRAPHQL-API 요청하기!!!</RedButton>

            {/* <button onClick={onClickGraphqlApi}>GRAPHQL-API 요청하기!!!</button> */}
        </>
    )
}