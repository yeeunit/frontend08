import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'


// const CREATE_BOARD = gql`
//     mutation createBoard($writer: String, $title: String, $contents: String) {
//         createBoard(writer: $writer, title: $title, contents: $contents){
//             _id
//             number
//             message
//         }
//     }
// `


export default function BoardWrite(){

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [createBoard] = useMutation(CREATE_BOARD)

    const onClickGraphqlApi = async () => {
        const result = await createBoard({
            variables: {
                writer: writer,
                title: title,
                contents
                //: contents 키밸류 같으면 생략 가능
            }
        })
        console.log(result)
        console.log(result.data.createBoard.message)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value) 
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value) 
    }

    const onChangeContents = (event) => {
        setContents(event.target.value) 
    }


    return (
        <BoardWriteUI 
        onClickGraphqlApi={onClickGraphqlApi} //aaa대신
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents} 
        /> 
    )
}