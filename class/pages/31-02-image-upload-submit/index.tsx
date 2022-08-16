import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react"
import { checkValidationFile } from "../../src/commons/libraries/validationFile"


const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPreviewPage(){
    const [imageUrl, setImageUrl] = useState("")
    const [file, setFile] = useState<File>()

    const [uploadFile] = useMutation(UPLOAD_FILE);
    const [callGraphql] = useMutation(CREATE_BOARD)

    const onClickGraphqlApi = async () => {
        const resultFile = await uploadFile({ variables: {file} })
        const url = resultFile.data.uploadFile.url

        // const result = await axios.get("https://koreanjson.com/posts/1"); // rest-api 방식
        const result = await callGraphql({
          variables: {
            createBoardInput: {
              writer: "철수",
              password: "1234",
              title: "인냥",
              contents: "반갑",
              images: [url],
            },
          },
        });
        console.log(result);
      };
    


    const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if(!file) return // 파일이 없으면 아래 실행할필요 없어

        const isValid = checkValidationFile(file)
        if(!isValid) return
        // 이미지가 유효해도 바로 스토리지로 넘어가는 게  아니라, 브라우저 자체에서 미리보기

        // 1.진짜 url
        const fileReader = new FileReader() // 파일 읽어오는 도구
        fileReader.readAsDataURL(file) // 파일을 넣으면 이를 읽어 유알엘(주소)로 만들어줌
        fileReader.onload = (data) => {
            if(typeof data.target?.result === "string")
            console.log(data.target?.result)
            setImageUrl(data.target?.result) 
            setFile(file)
        }
    }


    // 2.가짜 url 생성
    // const result = URL.createObjectURL(file)
    // console.log(result)
    // // setImageUrl()

    return(
        <>
        
        <input type="file" onChange={onChangeFile} />
        <img src={imageUrl} />
        <button onClick={onClickGraphqlApi}>게시글 등록하기</button>
        </>
    )

}