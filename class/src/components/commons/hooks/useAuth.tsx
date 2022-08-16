import { useRouter } from "next/router"
import { useEffect } from "react"

export function useAuth(){

    const router = useRouter()

    useEffect(() => {
    if(!localStorage.getItem("accessToken")){
        alert("로그인후 이용가능합")
        router.push("/23-06-login-check-hoc")
    }
    }, [])
}