import { ChangeEvent, useState } from "react"
import { URL } from "url"
import { checkValidationFile } from "../../src/commons/libraries/validationFile"


export default function ImageUploadPreviewPage(){


    const [imageUrl, setImageUrl] = useState("")

    const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if(!file) return // 파일이 없으면 아래 실행할필요 없어

        const isValid = checkValidationFile(file)
        if(!isValid) return
        // 이미지가 유효해도 바로 스토리지로 넘어가는 게  아니라, 브라우저 자체에서 미리보기

        const fileReader = new FileReader() // 파일 읽어오는 도구
        fileReader.readAsDataURL(file) // 파일을 넣으면 이를 읽어 유알엘(주소)로 만들어줌

        // 파일 완성이 되면
        fileReader.onload = (data) => {

            // 아래 리저트 값이 스트링일떄만 넣어야하니.. 타입스크립트 설정
            if(typeof data.target?.result === "string")
            console.log(data.target?.result)
            setImageUrl(data.target?.result) // result가 주소
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
        </>
    )

}