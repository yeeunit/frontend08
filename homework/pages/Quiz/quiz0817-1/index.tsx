// # 3-1. Callback 친구들
// 1. /pages/quiz07/callback/index.tsx 페이지를 만들고, 아래 그림과 같이 화면을 완성해 주세요.
// - 각각의 버튼을 눌렀을 때, 버튼에 해당하는 방법으로 데이터를 불러와서 화면에 보여주세요.
//    1) callback - XMLHttpRequest 사용
//    2) promise - axios.then() 사용
//    3) async/await - await axios 사용
// 1. 3개 버튼 각각 모두에 대해서, 다음 주소([http://numbersapi.com/random?min=1&max=200](http://numbersapi.com/random?min=1&max=200))를 사용하여 임의의 숫자를 하나 불러와 주세요.
// 2. 불러온 숫자를 가지고 다음 주소([https://koreanjson.com/posts/숫자](https://koreanjson.com/posts/$%7Bnum%7D))에 해당하는 게시물을 불러와 주세요.
// 3. 불러온 게시물을 작성한 작성자(UserId)가 쓴 다른 게시물 목록을 다음 주소([https://koreanjson.com/posts?userId=작성자ID](https://koreanjson.com/posts?userId=$%7Buser%7D))를 활용하여 불러와 주세요.
// 4. 위 4번의 게시글 목록을 위 버튼 을 클릭했을 때, 결과로 나타내 보세요.
// (state에 저장하고 map으로 출력해 보세요.)


import axios from "axios"
import { useState } from "react"


export default function QuizPage(){

    const [result1, setResult1] = useState<any>([])
    const [result2, setResult2] = useState<any>([])
    const [result3, setResult3] = useState<any>([])

    // onClickCallback
    const onClickCallback = () => {

        const aaa = new XMLHttpRequest()
        aaa.open("get", 'http://numbersapi.com/random?min=1&max=200')
        aaa.send()
        aaa.addEventListener("load", (res: any) => {
            // console.log(res)
            const num = res.target.response.split(" ")[0] 
            console.log(num)

            const bbb = new XMLHttpRequest()
            bbb.open("get", `https://koreanjson.com/posts/${num}`)
            bbb.send()
            bbb.addEventListener("load", (res: any) => {
            // console.log(res)

            const userId = JSON.parse(res.target.response).UserId

            const ccc = new XMLHttpRequest()
            ccc.open("get", `https://koreanjson.com/posts?userId=${userId}`)
            ccc.send()
            ccc.addEventListener("load", (res: any) => {
                console.log(res) // 최종 결과값
                console.log(JSON.parse(res.target.response));
                setResult1(JSON.parse(res.target.response))

            // const one = JSON.parse(res.target.response)
                })
            })
        })
    }

    // onClickPromise
    const onClickPromise = () => {

        axios
        .get('http://numbersapi.com/random?min=1&max=200')
        .then((res) => {
          const num = res.data.split(" ")[0];
             console.log(num)
            return axios.get(`https://koreanjson.com/posts/${num}`)
        })
        .then((res) => {
            const userId = res.data.UserId;
            return axios.get(`https://koreanjson.com/posts?userId=${userId}`)
        })
        .then((res) => {
            console.log(res.data);
            setResult2(res)

          });
    }

    // onClickAsyncAwait    
    const onClickAsyncAwait = async () => {

        const res1 = await axios.get("http://numbersapi.com/random?min=1&max=200");
        const num = res1.data.split(" ")[0];

        const res2 = await axios.get(`https://koreanjson.com/posts/${num}`);
        const userId = res2.data.UserId;

        const res3 = await axios.get(`https://koreanjson.com/posts?userId=${userId}`)
        console.log(res3);
         console.log(res3.data);
         setResult3(res3)
    }

    return(
        <>
         

        결과 :  
        <button onClick={onClickCallback}> CALLBACK </button>
        <br />
        {result1.map((el) => (
            <div key={el.id}> 
                <div style={{fontSize:"18px", color:"red", fontWeight:"700"}}> {el.title}</div>
                <div> {el.content}</div>
                <br /><hr /><br />
            </div>
            ))
        }
        
        결과 :  
        <button onClick={onClickPromise}>PROMISE </button>
        <br />
        {result2.data?.map((el) => (
            <div key={el.id}> 
                <div style={{fontSize:"20px", color:"orange", fontWeight:"700"}}> {el.title}</div>
                <div> {el.content}</div>
                <br /><hr /><br />
            </div>
            ))
        }

        결과 :  
        <button onClick={onClickAsyncAwait}>ASYNC/AWAIT </button>

        {result3.data?.map((el) => (
            <div key={el.id}> 
                <div style={{fontSize:"20px", color:"purple", fontWeight:"700"}}> {el.title}</div>
                <div> {el.content}</div>
                <br /><hr /><br />
            </div>
            ))
        }

        </>
    )
}