
// `http://numbersapi.com/random?min=1&max=200`
// `http://koreanjson.com/posts/${num}`
// `http://koreanjson.com/posts?userId=${userId}`

import axios from "axios"


export default function CallbackPromiseAsyncAwaitPage(){

    const onClickCallback = () => {

        const aa = new XMLHttpRequest()
        aa.open("get", `http://numbersapi.com/random?min=1&max=200`)
        aa.send()
        aa.addEventListener("load", (res: any) => {
            console.log(res)
            const num = res.target.response.split(" ")[0] // 86 (랜덤숫자)

            const bb = new XMLHttpRequest()
            bb.open("get", `http://koreanjson.com/posts/${num}`)
            bb.send()
            bb.addEventListener("load", (res: any) => {
               // console.log(res)
            const userId = JSON.parse(res.target.response).UserId

            const cc = new XMLHttpRequest()
            cc.open("get", `http://koreanjson.com/posts?userId=${userId}`)
            cc.send()
            cc.addEventListener("load", (res) =>{
                console.log(res) // 최종 결과값
                })
            })
        })
    }

    // const myaxios = {
    //     get: (url) => {

    //         return new Promise((resolve, reject) => {
    //             // 오래걸리는 작업(api 요청하기) 
    //             const qq = new XMLHttpRequest()
    //             qq.open("get", url)
    //             qq.send()
    //             qq.addEventListener("load", (res: any) => {
    //                 resolve(res.target.response)
    //             })
    //         })
    //     }
    // }
    // 콜백헬 발생 ???

        // 프로미스 체인
    


    // myaxios.get("https://koreajson.com/posts/1").then(res => {})

    const onClickPromise= () => {

        console.log("1번 실행됩니다.")

        axios
            .get("http://koreanjson.com/posts/1")
            .then((res) => {
                console.log("2번이 실행됩니다.")
                return axios.get("http://koreanjson.com/posts/2")
            })
            .then((res) => {
                console.log("3번 실행됩니다.")
                return axios.get("http://koreanjson.com/posts/3")
            })   
            .then((res) => {
                console.log("4번 실행됩니다.")
            })
        console.log("5번 실행됩니다.")
    }

    const onClickAsyncAwait = async () => {
        const result = await axios.get("첫번째 주소")
    // await는 프로미스가 있어야 기다려줌
    }


    return(
        <>
        <button onClick={onClickCallback}>Callback 요청하기</button>
        <button onClick={onClickPromise}>Promise 요청하기</button>
        <button onClick={onClickAsyncAwait}>AsyncAwait 요청하기</button>
        
        </>
    )

}