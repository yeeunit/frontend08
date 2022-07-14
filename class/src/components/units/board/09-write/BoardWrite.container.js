import { useMutation } from '@apollo/client'
import { useState } from 'react'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import {useRouter} from "next/router"

export default function BoardWrite(props){
    const router = useRouter();
    const [mycolor, setMycolor] = useState(false)
 
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)


    const onClickGraphqlApi = async () => {
        const result = await createBoard({
            variables: {
                writer,
                title,
                contents
            }
        })
        console.log(result)
        // console.log(result.data.createBoard.message)
        router.push(`/09-01-boards/${result.data.createBoard.number}`)

    }

    const onClickUpdate = async () => {
        const myVariables = { number: Number(router.query.number)}
        if(writer) myVariables.writer = writer
        if(title) myVariables.title = title
        if(contents) myVariables.contents = contents
        //중괄호안 한줄일떄 중괄호 생략 가능
        
        const result = await updateBoard({
            variables: myVariables
              })
          router.push(`/09-01-boards/${result.data.updateBoard.number}`)
        }

    const onChangeWriter = (event) => {
        setWriter(event.target.value) 
        if(event.target.value && title && contents) {
            setMycolor(true)
        }
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
        if(writer && event.target.value && contents) {
            setMycolor(true)
        }
    }

    const onChangeContents = (event) => {
        setContents(event.target.value) 
        if(writer && title && event.target.value) {
            setMycolor(true)
        }
    }

    return (
        <BoardWriteUI 
        onClickCreate={onClickGraphqlApi} //aaa대신
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents} 

        mycolor = {mycolor}
        isEdit={props.isEdit}
        data={props.data}
        /> 
    )
}