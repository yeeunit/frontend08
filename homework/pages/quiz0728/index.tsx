// 0728목 퀴즈

import { gql, useMutation } from "@apollo/client"
import { Modal } from "antd"
import { ChangeEvent, useEffect, useRef, useState } from "react"
import { IMutation, IMutationUploadFileArgs } from "../../src/commons/types/generated/types"
import { LikeOutlined } from '@ant-design/icons'
    
    const UPLOAD_FILE = gql`
        mutation uploadFile($file:Upload!){
            uploadFile(file: $file){
                _id
                url
                size
                createdAt
            }
        }
    `

    const CREATE_BOARD = gql`
        mutation createBoard(
            $createBoardInput:CreateBoardInput!){
                createBoard(createBoardInput: $createBoardInput){
                    _id
                    writer
                    title
                    contents
                    images
                }
            }
    `

export default function ImageUploadPage(){

    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const inputRef = useRef<HTMLInputElement>(null)
    const fileRef = useRef<HTMLInputElement>(null);

    const [imageUrl, setImageUrl] = useState("")
    const [createBoard] = useMutation(CREATE_BOARD)
    const [uploadFile] = useMutation<Pick<IMutation,"uploadFile">,IMutationUploadFileArgs>(UPLOAD_FILE)

    // const[showWriter, setShowWriter] = useState()
    // const[showPassword, setShowPassword] = useState()
    // const[showTitle, setShowTitle] = useState()
    // const[showContents, setShowContents] = useState()
    // const[showFile, setShowFile] = useState()

    useEffect(() => {
        // console.log ("컴포넌트가 마운트됐습니다~")
        inputRef.current?.focus()},[])

    
    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    } 
    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }
    const onChangeContents = (event) => {
        setContents(event.target.value)
    }

    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event?.target.files?.[0]
        console.log(file)

        
        try{

        const result = await uploadFile({
            variables: {file} })
            console.log(result.data?.uploadFile.url)
            setImageUrl(result.data?.uploadFile.url)
            
        } catch(error){
            Modal.error({ content: "에러발생"})
        }
    }

        const onClickImage = () => {
        fileRef.current?.click();
      };

        const onClickRegister = async () => {

        try{
            const result = await createBoard({
                variables:{
                    createBoardInput: {
                        writer,
                        title,
                        contents,
                        password,
                        images : [imageUrl] 
                    }
                }
            })
            console.log(result)
            console.log(result.data.createBoard.message)
            alert("성공!")

        } catch (error){
            console.log(error.message)
            alert("실패!!!")
        }
    }

    return(
        <>
        <div style={{padding: "30px", margin: "30px", border: "1px solid black", background:"white"}}>

            <h3>Quiz 4-1 : useRef로 포커스 맞추기</h3>

                <div >
                <input style={{width: "200px", height: "30px"}}
                type="password" 
                ref={inputRef}
                placeholder="비밀번호를 입력하세요"/>
                </div>


            <br /><br />
            <h3>Quiz 4-2 : 이미지 업로드</h3>
                작성자 : 
                <input type="text" placeholder="이름"
                onChange={onChangeWriter}/>  
                <br /><br />

                비밀번호 : 
                <input type="password" placeholder="비밀번호"
                onChange={onChangePassword}/>  
                <br /><br />
                
                제목 : 
                <input type="text" placeholder="제목"
                onChange={onChangeTitle} />  
                <br /><br />

                내용 : 
                <input type="text" placeholder="내용"
                onChange={onChangeContents} />  
                <br /><br />

                <LikeOutlined style={{cursor:"pointer", fontSize: "100px"}} onClick={onClickImage} />
            
                <input 
                style={{ display: "none" }}
                type="file" 
                ref={fileRef}
                onChange={onChangeFile} 
                accept="png"/>
                <br /><br />
                <img 
                style = {{width:"400px"}} 
                src = {`https://storage.googleapis.com/${imageUrl}`} />
        
                <br /><br />
                <button style={{cursor:"pointer", width: "150px", height: "50px", backgroundColor: "pink"}} onClick={onClickRegister}>등록하기</button>
                
                <br /><br />
                <h3> 등록 결과 </h3>
                <div>
                    {/* {ShowResult} */}
                </div>

        </div>
        </>
    )
}