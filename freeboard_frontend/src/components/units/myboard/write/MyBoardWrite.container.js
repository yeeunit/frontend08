import { useState } from "react";
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import MyBoardWriteUI from './MyBoardWrite.presenter'
import { CREATE_BOARD, UPDATE_BOARD } from './MyBoardWrite.queries'


export default function MyFreeBoardWrite(props){
  
const router = useRouter()
  const [isActive, setIsActive] = useState(false);

  const [name, setName] = useState("")    
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  // const [youtubeUrl, setYoutubeUrl] = useState("")
  // const [images, setImages] = useState("")

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("")
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD)
 const [updateBoard] = useMutation(UPDATE_BOARD);


  const onChangeName = (event) => {
    setName(event.target.value);
    if(event.target.value !== ""){
      setNameError("")
    }

    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if(event.target.value !== ""){
      setPasswordError("")
    }

    if (name && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if(event.target.value !== ""){
      setTitleError("")
    }

    if (name && password && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if(event.target.value !== ""){
      setContentsError("")
    }

    if (name && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

    // const onChangeYoutubeUrl = (event) =>{
    // setYoutubeUrl(event.target.value);
    // }

    // const onChangeImages = (event) =>{
    // setImages(event.target.value);
    // }


  const onClickRegister = async () => {

    if (!name) {
      setNameError("이름을 입력해주세요^^");}
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요^^");}
    if (!title) {
      setTitleError("제목을 입력해주세요^^");}
    if (!contents) {
      setContentsError("내용을 입력해주세요^^");}
    if (name && password && title && contents) {
        console.log("입력 완료!");

      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
                writer: name,
                password: password,
                title: title,
                contents: contents,
                // youtubeUrl : youtubeUrl,
                // images : images
            }
          }
        })
        console.log("아이디는 " + result.data.createBoard._id)
        console.log(result.data.createBoard)
        router.push(`/myboards/${result.data.createBoard._id}`)
      } 
      catch(error) {
        alert(error.message)
        alert("실패했습니다ㅠㅠ")
      }
    }
  };


  const onClickUpdate = async () => {
    if (!title && !contents) {
      alert("수정한 내용이 없습니다.");
      return;
    }
  

    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const updateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;

    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: password,
          updateBoardInput: updateBoardInput
        },
      })
      console.log(result)
      router.push(`/myboards/${result.data.updateBoard._id}`)
    } catch(error) {
      alert(error.message)
    }
  };


  return (
    <MyBoardWriteUI
        isActive={isActive}
        nameError={nameError}
        passwordError={passwordError}
        titleError={titleError}
        contentsError={contentsError}
        onChangeName={onChangeName}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        // onChangeYoutubeUrl={onChangeYoutubeUrl}
        // onChangeImages={onChangeImages}
        onClickRegister={onClickRegister}
        onClickUpdate={onClickUpdate}
        isEdit={props.isEdit}
        data={props.data}
    />
  )
}