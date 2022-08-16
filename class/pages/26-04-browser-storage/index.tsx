

export default function BrowserStoragePage(){


    const onClickSaveCookie = () =>{
        document.cookie = "aaa=철수"
        document.cookie = "zzz=맹수"
        document.cookie = "fff=f"


    }

    const onClickSaveLocal = () =>{
        localStorage.setItem("bbb","영희")
    }

    const onClickSaveSession = () =>{
        sessionStorage.setItem("ccc", "후니")
    }


     // 쿠키는 벡엔드와 소통하기 위해 사용
     // 백엔드에서는 리스폰드를 보낼때 쿠키 정보를 담아서 보냄
    const onClickLoadCookie = () => {
        const mycookie = document.cookie
        .split("; ")
        .filter(el => el.startsWith("aaa="))
        // 철수만 추출하기 
        console.log(mycookie)

        // 로그인을 한번이라도 하면 리프레시 토큰이 있을 것.
        // 백엔드에서 쿠키에 담아서 보내줌 
        // 벡앤드와 데이터를 주고박기 위해서 (variables 없이)
    }

    const onClickLoadLocal = () => {
        const bbb = localStorage.getItem("bbb")
        console.log(bbb)
    }

    const onClickLoadSession = () => {
        const ccc = sessionStorage.getItem("ccc")
        console.log(ccc)
    }


    return(
        <>
        <button onClick={onClickSaveCookie}> 쿠키에 저장하기 </button>
        <button onClick={onClickSaveLocal}> 로컬 저장 </button>
        <button onClick={onClickSaveSession}> 세션 저장 </button>

        ======================================================== 

        <button onClick={onClickLoadCookie}> 쿠키에서 조회 </button>
        <button onClick={onClickLoadLocal}> 로컬 조회 </button>
        <button onClick={onClickLoadSession}> 세션 조회 </button>



        </>
    )
}