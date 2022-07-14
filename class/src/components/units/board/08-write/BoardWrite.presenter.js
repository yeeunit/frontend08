
import * as S from './BoardWrite.styles'

export default function BoardWriteUI(props){

    return (
        <>
            작성자: <S.RedInput type="text" onChange={props.onChangeWriter} /><br />

            제목: <S.RedInput type="text" onChange={props.onChangeTitle} /><br />

            내용: <S.RedInput type="text" onChange={props.onChangeContents} /><br />


            <S.GreenButton 
            myname={props.mycolor} 
            onClick={props.onClickGraphqlApi}>

            GRAPHQL-API 요청하기!

            </S.GreenButton>

{/* 
             <S.RedButton onClick={onClickGraphqlApi}>
                GRAPHQL-API 요청하기!!!
            </S.RedButton> */}
        </>
    )
}