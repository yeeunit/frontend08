// # 4일차 REST-API & GRAPHQL-API
// ## REST-API 요청하기
// ## GRAPHQL-API 요청하기


import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'

const CREATE_BOARD = gql`
    mutation createBoard(
        $writer: String, 
        $title: String,
        $contents: String){
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

    const [createBoard] = useMutation(CREATE_BOARD)

    const onClickGraphqlApi = async () => {
        const result = await createBoard({
            variables: {
                writer: writer,
                title: title,
                contents: contents
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
        <div style={{padding: "0 20px 0 20px", margin:"20px", width: "300px", height: "500px", border: "1px solid grey"}}>
        <h2>7/7(목) 숙제</h2>

        <h3> GRAPHQL-API 요청하기</h3>
        <hr />

        <h4> createBoard </h4>

            작성자 : <input type="text" onChange={onChangeWriter} /><br /><br />
            제 &nbsp;&nbsp;목 : <input type="text" onChange={onChangeTitle} /><br /><br />
            내 &nbsp;&nbsp;용 : <input type="text" onChange={onChangeContents} /><br /><br />

            <button onClick={onClickGraphqlApi}>GRAPHQL-API 요청하기</button>

            
        </div>
    )

}









