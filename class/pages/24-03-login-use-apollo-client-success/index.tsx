// 로그인 결과보기

import { useRecoilState } from "recoil";
import { userInfoState } from "../../src/commons/store";
import { withAuth } from "../../src/components/commons/hocs/withAuth";

// const FETCH_USER_LOGGED_IN = gql`
//     query fetchUserLoggedIn {
//         fetchUserLoggedIn{
//             email
//             name
//         }
//     }
// `

// 로그인 한사람만 이용가능한 페이지(권한분기)

function LoginSuccessPage(){

    const [userInfo] = useRecoilState(userInfoState)

    // const router = useRouter()
    // const {data} = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN)

    // useEffect(() => {
    // if(!localStorage.getItem("accessToken")){
    //     alert("로그인후 이용가능합")
    //     router.push("/23-03-login-check")
    // }
    // }, [])


    return(
        <>
        <div>{userInfo.name}님 환영합니다</div>
        </>
    )
}

export default withAuth(LoginSuccessPage)