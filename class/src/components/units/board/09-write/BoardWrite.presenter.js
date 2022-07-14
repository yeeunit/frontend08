
import * as S from './BoardWrite.styles'

export default function BoardWriteUI(props){

    return (
        <>
            작성자: <S.RedInput type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer} />
            <br />
            제목: <S.RedInput type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title}/>
            <br />
            내용: <S.RedInput type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents} />
            <br />

            <S.GreenButton 
            myname={props.mycolor} 
            onClick={props.isEdit ? props.onClickUpdate : props.onClickCreate}
            >
                {props.isEdit? "수정하기" : "등록하기"}
            </S.GreenButton>

{/* 
             <S.RedButton onClick={onClickGraphqlApi}>
                GRAPHQL-API 요청하기!!!
            </S.RedButton> */}
        </>
    )
}