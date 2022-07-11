import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'

import { 
    Wrapper, Header, NamePw, Label, Writer, Password, 
    Zipcode, ZipcodeWrapper, SearchButton, Contents, Input, RegisterButton,
    RadioButton,RadioLabel, ImageWrapper, OptionWrapper, UploadButton,
 } from "../../styles/emotion"


 const CREATE_BOARD = gql`

    mutation createBoard($createBoardInput: CreateBoardInput!){
            createBoard(
                createBoardInput: 
                $createBoardInput){
                    _id
                    writer
                    title
                    contents
                    youtubeUrl
                    likeCount
                    dislikeCount
                    images
                    createdAt
                    updatedAt
                    deletedAt
                }
            }  
`

export default function FreeBoardPage(){
    const router = useRouter()

    const [name, setName] = useState("")    
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [youtubeUrl, setYoutubeUrl] = useState("")
    const [images, setImages] = useState("")

    const [nameError, setNameError] = useState("")
    const [pwError, setPwError] = useState("")
    const [titleError, setTitleError] = useState("")
    const [contentsError, setContentsError] = useState("")

    const [createBoard] = useMutation(CREATE_BOARD)
    

    const onClickGraphqlApi = async () => {
    // const checkValidation = () => {}

        if(!name){
            setNameError("이름을 입력하세요");
        }
        if(!password){
            setPwError("비밀번호를 입력하세요");
        }
        if(!title){
            setTitleError("제목을 입력하세요");
        }
        if(!contents){
            setContentsError("내용을 입력하세요");
        }
        if(name && password && title && contents){
            alert("게시물 등록이 완료되었습니다!"); //삭제 

            // onClickGraphqlApi
            try {
                const result = await createBoard({
                    variables: {
                        createBoardInput: {
                            writer: name,
                            password: password,
                            title: title,
                            contents: contents,
                            youtubeUrl : youtubeUrl,
                            images : images
                        }
                    }
                })

                console.log("아이디는 " + 
                result.data.createBoard._id)

            router.push(`/boards_router/${result.data.createBoard._id}`)

            } 
            catch (error){
                console.log(error.message)
                alert("실패했습니다ㅠㅠ")
            }
        }        
    }


    const onChangeName = (event) => {
        setName(event.target.value);
        if(event.target.value !== ""){
            setNameError("")}
    }

    const onChangePw = (event) => {
        setPassword(event.target.value);
        if(event.target.value !== ""){
            setPwError("")}
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
        if(event.target.value !== ""){
            setTitleError("")}
    }
    
    const onChangeContents = (event) => {
        setContents(event.target.value)
        if(event.target.value !== ""){
            setContentsError("")}
    }

    const onChangeYoutubeUrl = (event) =>{
        setYoutubeUrl(event.target.value)
    }

    const onChangeImages = (event) =>{
        setImages(event.target.value)
    }


    return (

    <Wrapper>
    
        <Header>게시물 등록</Header>
        
        <NamePw>
            <Contents>
                <Label>작성자</Label>
                <Writer type="text" placeholder="이름을 적어주세요." onChange={onChangeName}></Writer>
                <div style={{ color: "red", paddingTop: "20px" }}>
                {nameError}</div>
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
        </Contents>

        <Contents>
            <Label>내용</Label>
            <Input type="text" onChange={onChangeContents} placeholder="내용을 작성해주세요."></Input> 
            <div style={{ color: "red", paddingTop: "20px" }}>{contentsError}</div>
        </Contents>


        <Contents>
            <Label>주소</Label>
            <ZipcodeWrapper>
            <Zipcode placeholder="07250" />
            <SearchButton>우편번호 검색</SearchButton>
            </ZipcodeWrapper>
        </Contents>
            
        <Contents>
            <Input type="text"></Input>
            <br />
            <Input type="text"></Input>
        </Contents>

        <Contents>
            <Label>유튜브</Label>
            <Input type="url" onChange={onChangeYoutubeUrl} placeholder="링크를 복사해주세요.">
                </Input>
        </Contents>

        <ImageWrapper>
            <Label>사진첨부</Label>
    
            <UploadButton>
            <Input type="file" onChange={onChangeImages} placeholder="파일첨부">
            </Input>
            </UploadButton>

            <UploadButton>+</UploadButton>
            <UploadButton>+</UploadButton>
        </ImageWrapper>

        <OptionWrapper>
            <Label>메인설정</Label>
            <RadioButton type="radio" id="youtube" name="radio-button" />
            <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
            <RadioButton type="radio" id="image" name="radio-button" />
            <RadioLabel htmlFor="image">사진</RadioLabel>
        </OptionWrapper>


        <div>

            {/* checkValidation */} {/* onClickSubmit */}
        <RegisterButton onClick = { onClickGraphqlApi }> 등록하기 </RegisterButton>
 
        </div>

    </Wrapper>

    )
    
}

// 필수 요소가 입력이 안됐을때 게시글이 등록되는 것을 막으려면?? 