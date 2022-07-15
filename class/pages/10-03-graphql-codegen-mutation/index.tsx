import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'
import { IMutation, IMutationCreateBoardArgs } from '../../src/commons/types/generated/types'

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`


export default function GraphqlMutationPage(){

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [createBoard] = useMutation<Pick<IMutation,"createBoard">, IMutationCreateBoardArgs> (CREATE_BOARD)

    //화살표함수

    const onClickGraphqlApi = async () => {
        const result = await createBoard({

            variables: {
                writer: writer,
                title: title,
                contents: contents
            }
        })

        console.log(result)
        console.log(result.data?.createBoard?.message)

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
        <>
            작성자: <input type="text" onChange={onChangeWriter} /><br />
            제목: <input type="text" onChange={onChangeTitle} /><br />
            내용: <input type="text" onChange={onChangeContents} /><br />

            <button onClick={onClickGraphqlApi}>Graphql-API 요청하기!!!</button>
        </>
    )

}