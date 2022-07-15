// import { ChangeEvent } from 'react'

import * as S from './BoardWrite.styles'
import { IBoardWriteUIProps } from './BoardWrite.types'

// import QQQ, {RedInput} from './BoardWrite.styles'

// interface IBoardWriteUIProps {
//         // 온클릭함수, 리턴이 있으면 그타입, 없을때는 void

//     onClickCreate: () => void
//     onClickUpdate: () => void
//     onChangeWriter:(event: ChangeEvent<HTMLInputElement>) => void
//     onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
//     onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
//     mycolor: boolean
//     isEdit: boolean
//     data: any // 코드제너레이트에ㅓ서 추후 데이터타입 확인 가능
// }


export default function BoardWriteUI(props: IBoardWriteUIProps){
    return (
        <>
        작성자: <S.RedInput type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard?.writer || ""} /><br />
        
        제목: <input type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard?.title || ""} /><br />
        
        내용: <input type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard?.contents || ""} /><br />
        
        <S.RedButton 
            qqq={props.mycolor} 
            onClick={props.isEdit ? props.onClickUpdate : props.onClickCreate}
        >
            {props.isEdit ? "수정하기" : "등록하기"}
        </S.RedButton>
        </>
    )

}