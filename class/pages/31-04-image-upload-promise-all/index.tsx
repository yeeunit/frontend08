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
    // const [imageUrl, setImageUrl] = useState("")
    // const [file, setFile] = useState<File>()

    const [imageUrls, setImageUrls] = useState(["","",""])
    const [files, setFiles] = useState<(File)[]>([])

    const [uploadFile] = useMutation(UPLOAD_FILE);
    const [callGraphql] = useMutation(CREATE_BOARD)

    const onClickGraphqlApi = async () => {
    //     // 1. Promise.all을 안썼을떄 
    //     const resultFile0 = await uploadFile({ variables: { file: files[0] } })
    //     const resultFile1 = await uploadFile({ variables: { file: files[1] } })
    //     const resultFile2 = await uploadFile({ variables: { file: files[2] } })

    //     const url0 = resultFile0.data.uploadFile.url
    //     const url1 = resultFile1.data.uploadFile.url
    //     const url2 = resultFile2.data.uploadFile.url
    //     const resultUrls = [url0, url1, url2]

    //     // 2. Promise.all을 썼을떄 
    //     Promise.all([
    //       uploadFile({ variables: { file: files[0] } }),
    //       uploadFile({ variables: { file: files[1] } }),
    //       uploadFile({ variables: { file: files[2] } }),

    //     ])
    //     console.log(results) // const results = [resultFile0, resultFile, resultFile2]
    //     const resultUrls = results.map((el) => (el ? el.data.uploadFile.url : ""))


        // 3. Promise.all을 썼을때 (리팩토링)

        const results = await Promise.all(
          
          // files : [파일0, 파일1, 파일2]
          files.map((el) => el && uploadFile({ variables: { file: el } }))
          // files.map 의 결과는 [uploadFile({variables: {file: 파일0}}), uploadFile({variables: {file: 파일1}}), uploadFile({variables: {file: 파일2}})]
        )
        console.log(results) // const results = [resultFile0, resultFile, resultFile2]
        const resultUrls = results.map((el) => (el ? el.data.uploadFile.url : ""))



        // const result = await axios.get("https://koreanjson.com/posts/1"); // rest-api 방식
        const result = await callGraphql({
          variables: {
            createBoardInput: {
              writer: "철수",
              password: "1234",
              title: "인냥",
              contents: "반갑",
              images: resultUrls,
            },
          },
        });
        console.log(result);
      };
    


    const onChangeFile = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
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


            const tempUrls = [...imageUrls]
            tempUrls[index] = data.target?.result
            setImageUrls(tempUrls) 


            const tempFiles = [...files]
            tempFiles[index] = file
            setFiles(tempFiles)
        }
    }


    // 2.가짜 url 생성
    // const result = URL.createObjectURL(file)
    // console.log(result)
    // // setImageUrl()

    return(
        <>
        
        <input type="file" onChange={onChangeFile(0)} />
        <input type="file" onChange={onChangeFile(1)} />
        <input type="file" onChange={onChangeFile(2)} />

        <img src={imageUrls[0]} />
        <img src={imageUrls[1]} />
        <img src={imageUrls[2]} />

        <button onClick={onClickGraphqlApi}>게시글 등록하기</button>
        </>
    )

}