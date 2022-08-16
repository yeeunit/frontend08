import { useRouter } from "next/router"
import { ComponentType, useEffect } from "react"

// prettier-ignore 
export const withAuth = (Component: ComponentType) => <P extends {}>(props: P) => { const router = useRouter()

useEffect(() => {
    if (!localStorage.getItem("accessToken")){
        alert("로그인후 이용가능합")
        router.push("/23-06-login-check-hoc")
    }
}, [])

    return <Component {...props} />
}