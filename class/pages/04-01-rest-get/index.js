import axios from 'axios'
import { useState } from "react"

export default function RestGestPage(){

    const [title, setTitle] = useState("")

    // 비동기
    // function onClickRestApiAsync(){
    //     const result = axios.get("https://koreanjson.com/posts/1")
    //     console.log(result)
    // }
    // 화살표함수 사용시 콘솔 에러 확인 가능 

    const onClickRestApiAsync = () => {
        const result = axios.get("https://koreanjson.com/posts/1")
        console.log(result)

    }


    // 동기
    // async function onClickRestApiSync(){
    //     const result = await axios.get("https://koreanjson.com/posts/1")
    //     console.log(result)
    //     console.log(result.data.title)
    //     setTitle(result.data.title)

    // }

    const onClickRestApiSync = async () => {
        const result = await axios.get("https://koreanjson.com/posts/1")
        console.log(result)
        console.log(result.data.title)
        setTitle(result.data.title)

    }

    return (
    <>
        <button onClick={onClickRestApiAsync}>REST-API(비동기) 요청하기!</button><br /><br />
        <button onClick={onClickRestApiSync}>REST-API(동기) 요청하기!</button>

        <div>{title}</div>


    </>
    )
}