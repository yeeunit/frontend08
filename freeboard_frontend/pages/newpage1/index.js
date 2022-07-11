import { useState } from "react";
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'

import {
  Address,
  ButtonWrapper,
  Contents,
  Error,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  UploadButton,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper
} from "../../styles/emotion1";


const UPDATE_BOARD = gql`

    mutation updateBoard($updateBoardInput: UpdateBoardInput!,
    $password: String, $boardId: ID!){
            updateBoard(
                updateBoardInput: $updateBoardInput,
                password: $password,
                boardId: $boardId){
                    _id
                    writer
                    title
                    contents
                    youtubeUrl
                  }
            }  
`

export default function UpdateBoardPage() {
  const router = useRouter()

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [_id, set_Id] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");


  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [updateBoard] = useMutation(UPDATE_BOARD)


  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if(event.target.value !== ""){
      setWriterError("")
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if(event.target.value !== ""){
      setPasswordError("")
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if(event.target.value !== ""){
      setTitleError("")
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if(event.target.value !== ""){
      setContentsError("")
    }
  };

  const onChangeYoutubeUrl = (event) =>{
    setYoutubeUrl(event.target.value)
}

  const onClickUpdate = async () => {

    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    }
    
    if(writer && password && title && contents){
      alert("게시물이 수정되었습니다!"); 

      try {
          const result = await updateBoard({
              variables: {
                  updateBoardInput: {
                      title: title,
                      contents: contents,
                      youtubeUrl : youtubeUrl
                    }, 
                  password : password,
                  boardId: _id
              }
          })

          console.log(result)
          console.log("아이디는 " + 
          result.data.updateBoard._id)

      router.push(`/boards_router/${result.data.updateBoard._id}`)

      } 
      catch (error){
          console.log(error.message)
          alert("실패했습니다ㅠㅠ")
      }
  }        
  
  };

  return (
    <Wrapper>
      <Title>게시글 수정</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer type="text" placeholder="이름을 적어주세요." onChange={onChangeWriter} />
          <Error>{writerError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password type="password" placeholder="비밀번호를 작성해주세요." onChange={onChangePassword} />
          <Error>{passwordError}</Error>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject type="text" placeholder="제목을 작성해주세요." onChange={onChangeTitle} />
        <Error>{titleError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents placeholder="내용을 작성해주세요." onChange={onChangeContents} />
        <Error>{contentsError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube placeholder="링크를 복사해주세요." onChange={onChangeYoutubeUrl} />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton>+</UploadButton>
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
      <ButtonWrapper>
        <SubmitButton onClick={onClickUpdate}>수정하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
