import { 
  ApolloClient,
  ApolloLink, 
  ApolloProvider, 
  fromPromise, 
  InMemoryCache } from "@apollo/client";

import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";


const APOLLO_CACHE = new InMemoryCache()


interface IApolloSettingProps {
    children: ReactNode
}

export default function ApolloSetting(props: IApolloSettingProps){

    const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
    const [userInfo, setUserInfo] = useRecoilState(userInfoState)

    // 1. 프리렌더링 예제 - process.browser 방법
    // 2. 프리렌더링 예제 typeof window 방법

    // 3. 프리렌더링 무시 - useEffect 방법
    useEffect(() => {
      console.log("지금은 브라우저다")
      const accessToken = localStorage.getItem("accessToken") || ""
      const userInfo = localStorage.getItem("userInfo")
      setAccessToken(accessToken)

      if (!accessToken || !userInfo) return
      setUserInfo(JSON.parse(userInfo))
    


    // 유쥬뮤테이션, 쿼리는 아폴로 셋팅이 완료된 상태서 만  가능
    // 클라이언트 셋팅은 자식만 가능. 앱에 세팅 
    // 하지만 여기서는 쓸수 없음 // 아폴로클라이언트와 상관없는 액시오스 가능.. 

  // const RESTORE_ACCESS_TOKEN = gql`
  //   mutation restoreAccessToken {
  //     restoreAccessToken{
  //       accessToken
  //     }
  //   }
  // `

      // 2새로운방식

  getAccessToken().then((newAccessToken) => {
  setAccessToken(newAccessToken)
  })
  }, [])


  const errorLink = onError(( {graphQLErros, operation, forward }) => {

    // 1-1. 에러를 캐치 
    if(graphQLErros){
      for(const err of graphQLErros){
        // 1-2. 해당 에러가 토큰 만료 에러인지 체크(UNATHENTICATED)
          if( err.extensions.code === "UNATHENTICATED"){

            return fromPromise(

        // // 2-1. refreshToken으로 accessToken 재발급 받기


        getAccessToken().then(newAccessToken => {

          // 2-2. 재발급 받은 accessToken 저장하기 
        setAccessToken(newAccessToken)


        // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청 하기(토큰 바꿔치기)
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              Authorization: `Bearer ${newAccessToken}`,// 토큰만 새거로 바꿔치기
            }
          })
        })).flatMap(() => forward(operation))
          // 3-2. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청 하기(변경된 operation 재요청하기)

      } }
          }
      })
    

  const uploadLink = createUploadLink({
    uri: "https://backend08.codebootcamp.co.kr/graphql", 
    headers: { Authorization: `Bearer ${accessToken}`},
    credentials: "include", 
  })

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: APOLLO_CACHE, 
    connectToDevTools: true,
  });


    // prettier-ignore
    return(
        <>
            <ApolloProvider client={client}> 
                {props.children}
                {/* <Global styles={globalStyles} />
                <Layout>
                <Component {...pageProps} />
                </Layout> */}
            </ApolloProvider>
        </>
    )
}