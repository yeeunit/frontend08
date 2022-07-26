import axios from "axios"
import { useEffect, useState } from "react"

export default function openapiWithUseEffectPage(){

    const [dogUrl, setDogUrl] = useState("")

    useEffect(() => {
        const fetchDog = async () => {
            const result = await axios.get("https://dog.ceo/api/breeds/image/random")
            setDogUrl(result.data.message)
            }
            fetchDog();
    }, [])
    // useEffect를 쓰면 계속 이미지가 바뀌지 않고 한번만 고정해서 보여줌

    // pubic API
    return (
        <div> 
            
            <h1> Quiz1 오픈 API  연습</h1>
            <img src={dogUrl} />
        
        </div>
    )    
}


// 아래의 open-api 주소에 접속하여 제공하는 api를 사용하여 화면에 그림을 그려보세요.
// 타입스크립트 기반의 nodejs 백엔드 폴더를 만들어 주세요. 

// 