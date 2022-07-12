// import * as QQQ from 별로 묶어서 한꺼번에 가져올 수 있음
// 가져올떄는 QQQ.RedButton
// import QQQ, {RedInput} from './BoardWrite.styles'

import * as QQQ 
    // {BlueInput, BlueButton, Wrapper, Title}
from './0509.styles'

export default function BoardWrite0509UI(props){

    return (
        <>
            
        <QQQ.Wrapper>
            <QQQ.Title>
                7월 11일 / 월요일 숙제 <hr />
            </QQQ.Title>
            * 폴더구조 : container / presenter 
            <br /><br />

            작성자 : <QQQ.TomatoInput type="text" onChange={props.onChangeWriter} />
            <br /><br />

            제목 : <QQQ.TomatoInput type="text" onChange={props.onChangeTitle} />
            <br /><br />
            
            내용 : <QQQ.TomatoInput type="text" onChange={props.onChangeContents} />
            <br /><br />
            
            {/* <div onChange={props.onChangeButton}> */}
            <QQQ.TomatoButton disabled={false} onClick onChange={props.onClickGraphqlApi} >
                
            GRAPHQL-API 요청하기!</QQQ.TomatoButton>
            {/* </div> */}
        </QQQ.Wrapper>
        </>
    )
}