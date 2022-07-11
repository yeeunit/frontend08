import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { 
    Wrapper, Header, NamePw, Label, Writer, Password, Contents, Input, RegisterButton } from "../../styles/emotion"


 const CREATE_BOARD = gql`

    mutation createBoard($createBoardInput: CreateBoardInput!){
            createBoard(createBoardInput: $createBoardInput){
                    _id
                    writer
                    title
                    contents}
            }  
`

export default function FreeBoardPage(){
    const router = useRouter()

    const [name, setName] = useState("")    
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [nameError, setNameError] = useState("")
    const [pwError, setPwError] = useState("")
    const [titleError, setTitleError] = useState("")
    const [contentsError, setContentsError] = useState("")
    const [createBoard] = useMutation(CREATE_BOARD)


    // 체크밸리데이션 

    const checkValidation = async () => {
   
        if(!name){setNameError("이름을 입력하세요");}
        if(!password){setPwError("비밀번호를 입력하세요");}
        if(!title){setTitleError("제목을 입력하세요");}
        if(!contents){setContentsError("내용을 입력하세요");}
        if(name && password && title && contents){
        alert("게시물 등록이 완료되었습니다!"); //삭제
    }
}

    const onClickGraphqlApi = async () => {

            try {
                const result = await createBoard({
                    variables: { createBoardInput: {
                            writer: name,
                            password: password,
                            title: title,
                            contents: contents,
                            // youtubeUrl : youtubeUrl,
                            // images : images 
                        }
                    }
                })

            // console.log("아이디는 " + result.data.createBoard._id)
            router.push(`/boards_router/${result.data.createBoard._id}`)
                
            } 
            catch (error){ console.log(error.message)
                alert("실패했습니다ㅠㅠ") }
    }        



    const onChangeName = (event) => {
        setName(event.target.value);
        if(event.target.value !== ""){setNameError("")}
    }
    const onChangePw = (event) => {
        setPassword(event.target.value);
        if(event.target.value !== ""){setPwError("")}
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value)
        if(event.target.value !== ""){setTitleError("")}
    }
    const onChangeContents = (event) => {
        setContents(event.target.value)
        if(event.target.value !== ""){setContentsError("")}
    }
// const aaa = () => {
//     checkValidation()
//     onClickGraphqlApi()
// }

    return (

    <Wrapper>
        <Header>게시물 등록</Header>
        <NamePw>
            <Contents>
                <Label>작성자</Label>
                <Writer type="text" placeholder="이름을 적어주세요." onChange={onChangeName}></Writer>
                <div style={{ color: "red", paddingTop: "20px" }}>{nameError}</div>
            </Contents>
            <Contents>
                <Label>비밀번호</Label>
                <Password type="password" onChange={onChangePw} placeholder="비밀번호를 입력해주세요."></Password>
                <div style={{ color: "red", paddingTop: "20px" }}>{pwError}</div>
            </Contents>
        </NamePw>
        <Contents>
            <Label>제목</Label>
            <Input type="text" onChange={onChangeTitle} placeholder="제목을 작성해 주세요."></Input> 
            <div style={{ color: "red", paddingTop: "20px" }}>{titleError}</div>
            <Label>내용</Label>
            <Input type="text" onChange={onChangeContents} placeholder="내용을 작성해주세요."></Input> 
            <div style={{ color: "red", paddingTop: "20px" }}>{contentsError}</div>
        </Contents>

        <div> 

        {/* <RegisterButton onClick = { checkValidation } > */}

        <RegisterButton onClick = { () => { checkValidation(), onClickGraphqlApi() } }>


            등록하기 
        </RegisterButton>
 

        </div>
    </Wrapper>
    )
}
