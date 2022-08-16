import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react"
import { IMutation, IMutationUploadFileArgs } from "../../src/commons/types/generated/types";


const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file)
            {url
            size}
    }
`

export default function ImageUploadPage(){
    const [imageUrl, setImageUrl] = useState("")

    const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">,IMutationUploadFileArgs>(UPLOAD_FILE)


    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    
        // event.target 까지는 input태크
        // .files 추가하면 파일을 가져올수있음
        // 배열로 들어옴

        // if (event.target.files)또는 event.target.files &&
        const file = event.target.files?.[0];
        // 배열이 언디파인드나 널일수 있기때문에 물음표 붙이기 
        console.log(file)

        try {
            const result = await uploadFile({ variables: {file} })
            console.log(result.data?.uploadFile.url)

            setImageUrl(result.data?.uploadFile.url)
        } catch(error){
            Modal.error({ content: "에러발생! "})
        }
    }


    return(
        <>
        <input type="file" onChange={onChangeFile} />
        <img src={`https://storage.googleapis.com/${imageUrl}`} />
        </>

    )
}