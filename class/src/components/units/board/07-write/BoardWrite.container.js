import { useMutation } from '@apollo/client'
import { useState } from 'react'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'


export default function BoardWrite(){

    // const mycolor = "pink"
    // const [mycolorr, setMycolorr] = useState(skyblue)

    const [mycolor, setMycolor] = useState(false)
 
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [createBoard] = useMutation(CREATE_BOARD)

    const onClickGraphqlApi = async () => {
        const result = await createBoard({
            variables: {
                writer,
                title,
                contents
                // : contents 키밸류 같으면 생략 가능
            }
        })
        console.log(result)
        console.log(result.data.createBoard.message)
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
        // else {
        //     setMycolor(false)
        // }
    }

    // const onChangeWriteColor = () => {

    //     if(writer && title  && contents)
    //     {alert("입력되었음"); 
    //     setMycolor(true) 
    // }

        // if(!name)
        // {setNameError("이름을 입력하세요");}
        // if(!password){setPwError("비밀번호를 입력하세요");}
        // if(!title){setTitleError("제목을 입력하세요");}
        // if(!contents){setContentsError("내용을 입력하세요");}


    return (
        <BoardWriteUI 
        onClickGraphqlApi={onClickGraphqlApi} //aaa대신
        
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents} 

        mycolor = {mycolor}
        /> 
    )
}