import { useMutation } from '@apollo/client'
import { useState } from 'react'
import BoardWrite0509UI from './0509.presenter'
import { CREATE_BOARD } from './0509.queries'
import { useRouter } from 'next/router'



export default function BoardWrite0509(){

    const router = useRouter()

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    
    const [createBoard] = useMutation(CREATE_BOARD)

    const [button, setButton] = useState("")
    


    const onClickGraphqlApi = async () => {

        if (writer && title && contents) {
            alert("버튼을 눌러주세요!");

            //<QQQ.TomatoButton disabled={false} />

            }

        try {
            const result = await createBoard({
                variables: {
                    writer: writer,
                    title: title,
                    contents: contents
                }
            })

            console.log("넘버는" + result.data.createBoard.number)
            console.log(result.data.createBoard.message)

            router.push(`/05-08-dynamic-routed-board-query-presenter/${result.data.createBoard.number}`)

        } 

        catch (error){
            console.log(error.message)
            alert("실패했습니다!!!")
        }        
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

    const onChangeButton = (event) => {
        setButton(event.target.value)
        if(event.target.value !== ""){
            setButtonError("")}
    }

    // const onChangeButton = (event) => {
    //   setButton(event)
    // }

    return (
        <BoardWrite0509UI 
        onClickGraphqlApi={onClickGraphqlApi} 
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents} 
        onChangeButton={onChangeButton} 
        /> 
    )
}

