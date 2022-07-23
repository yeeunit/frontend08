// 등록하기 콘테이너

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import {CREATE_BOARD, UPDATE_BOARD, DELETE_BOARD} from "./BoardWrite.queries"


// 중괄호 이유는?


export default function BoardWrite(props) {

    const router = useRouter()
    const [isActive, setIsActive] = useState(false);

    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [youtube, setYoutube] = useState("");
  
    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [contentsError, setContentsError] = useState("");
  
    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)
    const [deleteBoard] = useMutation(DELETE_BOARD)

    const onChangeWriter = (event) => {
      setWriter(event.target.value);
      if(event.target.value !== ""){
        setWriterError("")
      }

      // 이거뭐지

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

    const onChangeYoutube = (event) => {
      setYoutube(event.target.value);
      }
    
  

    const onClickSubmit = async () => {
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
      if (writer && password && title && contents) {
      
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: title,
              contents: contents,
              youtubeUrl: youtube
            }
          }
        })
        console.log(result)
        console.log(result.data.createBoard._id)
        console.log("게시물 등록 완료")
        router.push(`/boards/${result.data.createBoard._id}`)
  
          } 
          catch (error){
              console.log(error.message)
              alert("실패했습니다!!!")
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
        router.push(`/boards/${result.data.updateBoard._id}`)
      } catch(error) {
        alert(error.message)
      }
    };


    const onClickDelete = async () => {
      try{
      const result = await deleteBoard({
        variables:{
          boardId:router.query.boardId,
          password: password,
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

}

  

    return(
        <BoardWriteUI 
            isActive={isActive}

            writerError={writerError}
            passwordError={passwordError}
            titleError={titleError}
            contentsError={contentsError}
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onChangeYoutube={onChangeYoutube}

            onClickSubmit={onClickSubmit}  
            onClickUpdate={onClickUpdate}
            onClickDelete={onClickDelete}
            
            isEdit={props.isEdit}
            data={props.data}


        />
    )
}

