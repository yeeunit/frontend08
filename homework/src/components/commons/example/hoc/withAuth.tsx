// # 4-1. HOC로 권한분기로직 withAuth로 분리하기

// 1. pages/example/hoc/login 페이지, pages/example/hoc/main 페이지, src/components/commons/example/hoc/withAuth.tsx 컴포넌트를 만들어 주세요.
// 2. login 페이지에서 아이디, 비밀번호 입력창을 만들고 loginUser를 활용하여 accessToken을 받은 후, main페이지로 router.push를 통해 이동시켜 주세요.
// 3. main페이지에서 로그인된 유저만 접근할 수 있도록 withAuth 컴포넌트를 완성하고 연결해 주세요.

import { useRouter } from "next/router"
import { useEffect } from "react"

export const withAuth = (Component) => (props) => {

const router = useRouter()

useEffect(() => {
    if(!localStorage.getItem("accessToken")){
        alert("로그인후 이용가능함여~")
        router.push("/boards/login")
    }
}, [])


    return <Component {...props} />

}