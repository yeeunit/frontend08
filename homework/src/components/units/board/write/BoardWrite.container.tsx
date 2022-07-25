// 등록하기 콘테이너

import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { IMutation, IMutationCreateBoardArgs, IMutationDeleteBoardArgs, IMutationUpdateBoardArgs } from "../../../../commons/types/generated/types";
import BoardWriteUI from "./BoardWrite.presenter";
import {CREATE_BOARD, UPDATE_BOARD, DELETE_BOARD} from "./BoardWrite.queries"
import { IBoardWriteProps, IUpdateBoardInput } from "./BoardWrite.types";


// 중괄호 이유는?


export default function BoardWrite(props: IBoardWriteProps) {

    const router = useRouter()
    const [isActive, setIsActive] = useState(false);

    const [isOpen, setIsOpen] = useState(false)

    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [youtube, setYoutube] = useState("");
    const [zipcode, setZipcode] = useState("")
    const [address, setAddress] = useState("");
    const [addressDetail, setAddressDetail] = useState("");
  
    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [contentsError, setContentsError] = useState("");
  
    const [createBoard] = useMutation<Pick<IMutation, "createBoard">, 
    IMutationCreateBoardArgs>(CREATE_BOARD)

    const [updateBoard] = useMutation<Pick<IMutation, "updateBoard">, 
    IMutationUpdateBoardArgs>(UPDATE_BOARD)

    const [deleteBoard] = useMutation<Pick<IMutation, "deleteBoard">, 
    IMutationDeleteBoardArgs>(DELETE_BOARD)


    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
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
  
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
      if(event.target.value !== ""){
        setPasswordError("")
      }
      if (writer && event.target.value && title && contents) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
  
    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
      if(event.target.value !== ""){
        setTitleError("")
      }
      if (writer && password && event.target.value && contents) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
  
    const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setContents(event.target.value);
      if(event.target.value !== ""){
        setContentsError("")
      }
      if (writer && password && title && event.target.value) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    const onChangeYoutube = (event: ChangeEvent<HTMLInputElement>) => {
      setYoutube(event.target.value);
      }

      const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
        setAddressDetail(event.target.value);
        }
      
        const onClickAddressSearch = () => {
          setIsOpen(true);
        };
    
        const onCompleteAddressSearch = (data: any) => {
          setAddress(data.address);
          setZipcode(data.zonecode);
          setIsOpen(false);
        };
        
    
  

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
              writer,
              password,
              title,
              contents,
              youtubeUrl: youtube,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            }
          }
        })
        // console.log(result)
        console.log(result.data?.createBoard._id)
        console.log("게시물 등록 완료")
        router.push(`/boards/${result.data?.createBoard._id}`)
  
          } 
          catch (error){
            if (error instanceof Error) Modal.error( {content: error.message })
          }
      }
    };


    const onClickUpdate = async () => {
      if (!title && !contents && !youtube && !address && !zipcode) {
        alert("수정한 내용이 없습니다.");
        return;
      }
  
      if (!password) {
        alert("비밀번호를 입력해주세요.");
        return;
      }
  
      const updateBoardInput: IUpdateBoardInput = {};
      if (title) updateBoardInput.title = title;
      if (contents) updateBoardInput.contents = contents;
      if (youtube) updateBoardInput.youtubeUrl = youtube;
      if (zipcode || address || addressDetail) {
        updateBoardInput.boardAddress = {}
      }
  
      try {
        if (typeof router.query.boardId !== "string") return
        const result = await updateBoard({
          variables: {
            boardId: router.query.boardId,
            password,
            updateBoardInput
          },
        })
        router.push(`/boards/${result.data?.updateBoard._id}`)
      } catch(error) {
        if (error instanceof Error)
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

    return(
        <BoardWriteUI 
            isActive = {isActive}

            writerError = {writerError}
            passwordError = {passwordError}
            titleError = {titleError}
            contentsError = {contentsError}

            onChangeWriter = {onChangeWriter}
            onChangePassword = {onChangePassword}
            onChangeTitle = {onChangeTitle}
            onChangeContents = {onChangeContents}
            onChangeYoutube = {onChangeYoutube}
            onChangeAddressDetail = {onChangeAddressDetail}
            onClickAddressSearch = {onClickAddressSearch}
            onCompleteAddressSearch ={onCompleteAddressSearch}

            onClickSubmit={onClickSubmit}  
            onClickUpdate={onClickUpdate}
            onClickDelete={onClickDelete}
            
            isEdit = {props.isEdit}
            data = {props.data}
            isOpen = {isOpen}
            zipcode = {zipcode}
            address = {address}
            addressDetail = {addressDetail}


        />
    )
}

