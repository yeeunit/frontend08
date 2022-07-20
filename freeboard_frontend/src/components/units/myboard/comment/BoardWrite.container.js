import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from "react";
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'


export default function FreeBoardWrite(props){

    const router = useRouter()
    const [isActive, setIsActive] = useState(false);

    const [name, setName] = useState("")    
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [nameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState("")
    const [titleError, setTitleError] = useState("");
    const [contentsError, setContentsError] = useState("");

    const [createBoard] = useMutation "createBoard" (CREATE_BOARD)
    const [updateBoard] = useMutation "updateBoard" (UPDATE_BOARD)


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

    
    const onClickRegister = async () => {

    if (!name) {
      setNameError("이름을 입력해주세요");}
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요");}
    if (!title) {
      setTitleError("제목을 입력해주세요");}
    if (!contents) {
      setContentsError("내용을 입력해주세요^^");}
    if (name && password && title && contents) {
        console.log("입력 완료!");

      try {
        const result = await createBoard({

          const createBoardInput: String(router.query._id){
              writer: name,
                password: password,
                title: title,
                contents: contents
          } }

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
        router.push(`/boards/${result.data.createBoard._id}`)
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


    // const updateBoardInput = {};
    // if (title) updateBoardInput.title = title;
    // if (contents) updateBoardInput.contents = contents;

    const myVariables: IMyVariables = { boardId: String(router.query._id) }
    
    if (boardId) myVariables._id = boardId;
    if (password) myVariables.password = password;
    if (updateBoardInput) myVariables.updateBoardInput = name;

   
    try {
      const result = await updateBoard({
        variables: myVariables 

      })
      
      
      router.push(`/boards/${result.data.updateBoard._id}`)
    } catch(error) {
      alert(error.message)
    }
    };


  return (
    <BoardWriteUI
        isActive={isActive}
        nameError={nameError}
        passwordError={passwordError}
        titleError={titleError}
        contentsError={contentsError}
        onChangeName={onChangeName}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onClickRegister={onClickRegister}
        onClickUpdate={onClickUpdate}
        isEdit={props.isEdit}
        data={props.data}
    />
  )
}