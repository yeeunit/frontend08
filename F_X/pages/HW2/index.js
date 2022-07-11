import {Fragment, useState} from 'react'

export default function HomeworkPage(){

     // Quiz 1-1 let과 document.getElementById()를 사용해 주세요.
     function sayHello(){
        let sayHello = document.getElementById("sayHello").innerText

        document.getElementById("sayHello").innerText = "반갑습니다."

    }

    // Quiz 1-2 state를 사용해 주세요.
    const[hello, niceToMeetYou] = useState("안녕!")

    function changeHello(){
        niceToMeetYou("반갑습니다!!!")
    }


    // Quiz 2-1 let과 document.getElementById()를 사용해 주세요.

    function counterUp(){
        let count = Number(document.getElementById("count").innerText) + 1

        document.getElementById("count").innerText = count
    } 

    function counterDown(){
        let count = Number(document.getElementById("count").innerText) - 1

        document.getElementById("count").innerText = count
    } 

    // Quiz 2-2 state를 사용해 주세요.
    const [count, setCount] = useState(0)

    function counterUp2(){
        setCount(count + 1)
    }
    
    function counterDown2(){
            setCount(count - 1)
    }


    // Quiz 3-1  let과 document.getElementById()를 사용해 주세요.

    function authNum(){
        let number = document.getElementById("number").innerText

        document.getElementById("number").innerText = String((Math.floor(Math.random()*1000000))).padStart(6,"0")

    }
    
    
    // Quiz 3-2  state를 사용해 주세요.

    const [number2, setAuthNum] = useState("000000")

    function authNum2(){
        setAuthNum(String((Math.floor(Math.random()*1000000))).padStart(6,"0"))

    }


    // Quiz 4 회원가입 화면 만들기 

    // function checkValidation() {

    //     const email = document.getElementById("email").value
    //     const pw1 = document.getElementById("pw1").value
    //     const pw2 = document.getElementById("pw2").value

    //     if(email.includes("@") === false){
    //         document.getElementById("emailError").innerText = "이메일이 잘못됐습니다."
    //     } else if(pw1 !== pw2){
    //         document.getElementById("pwError").innerText = "비밀번호가 잘못됐습니다."
    //     } else{
    //         document.getElementById("confirmation").innerText = "가입이 완료됐습니다!!!"

    //     }


    const [email, setEmail] = useState("")    
    const [pw1, setPw1] = useState("")    
    const [pw2, setPw2] = useState("")  

    const [emailError, setEmailError] = useState("")
    const [pw1Error, setPw1Error] = useState("")
    const [pw2Error, setPw2Error] = useState("")
    const [pwError, setPwError] = useState("")
    const [complete, setCompleteMessage] = useState("")



    function onChangeEmail(event){
        setEmail(event.target.value);
        if(event.target.value !== ""){
            setEmailError("")
        }
    }

    function onChangePw1(event){
        setPw1(event.target.value)
        if(event.target.value !== ""){
            setPw1Error("")
        }
    }

    function onChangePw2(event){
        setPw2(event.target.value)
        if(event.target.value !== ""){
            setPw2Error("")
            setPwError("")
        }
    }

    function checkValidation(){

        if(email.includes("@") === false){
            setEmailError("이메일이 잘못됐습니다.")
            setCompleteMessage("")
        } 
        if(!pw1){
            setPw1Error("비밀번호를 입력하세요.")
            setCompleteMessage("")
        } 
        if(!pw2){
            setPw2Error("비밀번호를 다시 입력하세요.")
            setCompleteMessage("")
        } 
        if(pw1 !== pw2){
            setPwError("비밀번호가 일치하지 않습니다.")
            setCompleteMessage("")
        } 
        if(email.includes("@") && pw1 !=="" && pw2 !=="" && pw1 === pw2) {
            setCompleteMessage("가입 완료 🎉")
            alert("가입이 완료됐습니다!!!")
        }

    }


    return(
        <Fragment> 

            <div style={{padding: "0 20px 0 20px", margin:"20px", width: "500px", border: "1px solid grey"}}>
            <h2 style={{textAlign: "center"}}> Homework / 2022.07.06.(수) </h2>
            <h3>Quiz 1-1</h3>
            <button id="sayHello" onClick={sayHello}>안녕하세요</button>
            <br />

            <h3>Quiz 1-2</h3>
            <button onClick={changeHello}>{hello}</button>  
            <br /> <br /> <hr />
 


            <h3>Quiz 2-1</h3>
            <div id="count">0</div>
            <button onClick={counterUp}>카운트 올리기</button> &nbsp;
            <button onClick={counterDown}>카운트 내리기</button>

            <br />

            <h3>Quiz 2-2</h3>
            <div>{count}</div>
            <button onClick={counterUp2}>카운트 올리기!!!</button> &nbsp;
            <button onClick={counterDown2}>카운트 내리기!!!</button>
            <br /><br /> <hr />



            <h3>Quiz 3-1</h3>
            <span id="number">000000</span> &nbsp;
            <button onClick={authNum}>인증번호 전송</button>
            <br />

            <h3>Quiz 3-2</h3>
            <span>{number2}</span> &nbsp;
            <button onClick={authNum2}>인증번호 전송</button>
            <br /><br /> <hr />


            <h3>Quiz 4 &#40;회원가입 화면 만들기&#41; </h3>
            {/* <h3>Quiz 4</h3>
            <div>
                <input type="text" id="email" placeholder="이메일" />
                <div id="emailError"></div>
            </div><br />

            <div>
                <input type="password" id="pw1" placeholder="비밀번호"></input>
            </div><br />

            <div>
                <input type="password" id="pw2" placeholder="비밀번호 확인"></input>
                <div id="pwError"></div>

            </div><br />

            <div>
                <button id="join" onClick={checkValidation}>가입하기</button>
                <div id="confirmation"></div>
            </div><br /> */}


            <div>
            이메일 : <input type="text" placeholder="이메일" onChange={onChangeEmail} /><br/>
                <div style={{ color: "red" }}>
                {emailError}</div>
            </div><br />

            <div>
            비밀번호 : <input type="password" placeholder="비밀번호" onChange={onChangePw1}/><br/>
                <div style={{ color: "red" }}>
                {pw1Error}</div>
            </div><br />

            <div>
            비밀번호 : <input type="password" placeholder="비밀번호" onChange={onChangePw2} /><br/>
                <div style={{ color: "red" }}>
                {pw2Error} {pwError}</div>
            </div><br />

            <div>
                <button onClick={checkValidation} >가입하기</button> &nbsp;
                <span style={{ color: "blue" }}>
                {complete}</span>
            </div><br />

            <h3>오류 수정 완료! 👏👏👏</h3>
        </div>
        </Fragment>

        
    )
}


