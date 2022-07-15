import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import { IMutation } from '../../../../commons/types/generated/types'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'

//edit 에서 프롭스 받음
//data 형식은 백엔드에서 알수있음 (일단 any로 설정)

// interface IBoardWriteProps {
//     isEdit : boolean
//     data?: any // 물음표를 붙이면 데이터 줘도되고 없으면 안줘도됨 
// }


export default function BoardWrite(props: IBoardWriteProps){
    const router = useRouter()
    const [mycolor, setMycolor] = useState<string>("철수")
    // 스테이트 명시 방법은 꺾쇠안에

    const [writer, setWriter] = useState("") // a
    const [title, setTitle] = useState("") // a
    const [contents, setContents] = useState("") // a
    const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardeArgs>(CREATE_BOARD)
    const [updateBoard] = useMutation<Pick<IMutation, "updateBoard">,IMutationUpadateBoardeArgs>(UPDATE_BOARD)

    const onClickCreate = async () => {
        const result = await createBoard({
            variables: {
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
        console.log(result.data?.createBoard.message?)
        router.push(`/10-01-typescript-boards/${result.data.createBoard.number}`)
    }

    const onClickUpdate = async () => {

        // interface IMyVariables {
        //     number: number
        //     writer?: string 
        //     title?: string
        //     contents?: string
        // }
        //
        const myVariables: IMyVariables = { number: Number(router.query.number) }
        if(writer) myVariables.writer = writer
        if(title) myVariables.title = title
        if(contents) myVariables.contents = contents

        const result = await updateBoard({
            variables: myVariables
        })
        router.push(`/10-01-typescript-boards/${result.data.updateBoard.number}`)
        // router.push(`/10-01-typescript-boards/${router.query.number}`) => 이것도 가능!!
    }

    //event 받을거라고 써놨는데
    // 타입은? 
    // 어떤 이벤트가 들어오느냐에 따라 다른데, 이미 만들어져있음
    //리액트에서 체인지이벤트 제공하고있음..
    // 우리가 IEvent 일일이 만들기 힘들어...
    // 

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {

        setWriter(event.target.value)
        if(event.target.value && title && contents){
            setMycolor(true)
        }
    }

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value) 
        if(writer && event.target.value && contents){
            setMycolor(true)
        }
    }

    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
        setContents(event.target.value) 
        if(writer && title && event.target.value){
            setMycolor(true)
        }
    }

    return (
        <BoardWriteUI 
            onClickCreate={onClickCreate} // 함수-위에서 형식 확인
            onClickUpdate={onClickUpdate}
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            mycolor={mycolor}
            isEdit={props.isEdit}
            data={props.data}
        />
    )
}