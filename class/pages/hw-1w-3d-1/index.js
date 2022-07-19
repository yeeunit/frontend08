import { useState } from 'react'

export default function CounterStatePage(){

    const [count, setCount] = useState(0)

    function counterUp(){
        setCount(count + 1)

    }


    function counterDown(){
        setCount(count - 1)

    }

    return(
        <>

            <div>{count}</div>
            <button onClick={counterUp}>카운트 증가</button>


            <button onClick={counterDown}>카운트 내리기!!!</button>



        </>
    )

}

export default function SignupStatePage(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [emailError, setEmailError] = useState("")

    function onChangeEmail(event){
        // console.log("111")
        // console.log(event.target) // 작동된 태그
        // console.log(event.target.value) // 작동된 태그의 값
        setEmail(event.target.value)
    }

    function onChangePassword(event){
        setPassword(event.target.value)
    }

    function onClickSignup(event){
        // 진짜 포장이 잘 되었는지 확인해보기
        console.log(email)
        console.log(password)

        // 검증하기
        if(email.includes("@") === false){
            // alert("이메일이 올바르지 않습니다. @없음!!")
            // document.getElementById("qqq").innterText = "이메일이 올바르지 않습니다."
            setEmailError("이메일이 올바르지 않습니다!!!")
            
        } else {
            // 백엔드 컴퓨터에 API함수 요청하기
            alert("회원가입을 축하합니다!")

        }
        
    }

    return (
        <>
            이메일: <input type="text" onChange={onChangeEmail} /> <br />
            <div>{emailError}</div>
            비밀번호: <input type="password" onChange={onChangePassword} /><br />
            <button onClick={onClickSignup}>회원가입</button>

        </>
    )
    
}