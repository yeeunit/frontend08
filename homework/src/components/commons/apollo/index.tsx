import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

const APOLLO_CACHE = new InMemoryCache();

interface IApolloSettingProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  // const [userInfo, serUserInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  //   console.log("지금은 브라우저")
  //   const accessToken = localStorage.getItem("accessToken") || ""
  //   const userInfo = localStorage.getItem("userInfo")
  //   setAccessToken(accessToken)

  //   if (!accessToken || !userInfo) return
  //   serUserInfo(JSON.parse(userInfo))
  // }, [])

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code == "UNAUTHENTICATED") {
          return fromPromise(
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken);

              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`,
                },
              });
            })
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend08.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: APOLLO_CACHE,
    // connectToDevTools: true,
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
