import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react"
import { checkValidationFile } from "../../src/commons/libraries/validationFile";
import { IMutation, IMutationUploadFileArgs } from "../../src/commons/types/generated/types";


const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file)
            {url}
    }
`

export default function ImageUploadPage(){
    const aaa = useRef<HTMLInputElement>(null)

    const [imageUrl, setImageUrl] = useState("")

    const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">,IMutationUploadFileArgs>(UPLOAD_FILE)


    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    
        
        const file = event.target.files?.[0];
        console.log(file)

        const isValid = checkValidationFile(file)
        if(!isValid) return

        // if (!file?.size){
        //     alert("파일이 없습니다!")
        //     return // 함수 종료
        // }

        // if (file.size > 5 * 1024 * 1024 ){
        //     alert("파일용량이 너무 큽니다. (제한 5MB)")
        //     return
        // }

        // if (!file.type.includes("jpeg") && file.type.includes("png")){
        //     alert("jpg 또는 png 파일만 업로드 가능")
        //     return
        // }

        try {
            const result = await uploadFile({ variables: {file} })
            console.log(result.data?.uploadFile.url)

            setImageUrl(result.data?.uploadFile.url)
        } catch(error){
            Modal.error({ content: "에러발생! "})
        }
    }

    const onClickImage = () => {
        aaa.current.click()

    }


    return(
        <>
        <button style={{width: "200px", height: "50px", margin:"20px", backgroundColor:"pink"}} onClick={onClickImage}
        >
            이미지 등록 </button><br />

        <input style={{ display: "none"}} 
        type="file" 
        onChange={onChangeFile} 
        ref={aaa}
        accept="image/jpeg"/>
        <img src={`https://storage.googleapis.com/${imageUrl}`} style={{width: "300px"}} />
        <br />
        </>

    )
}