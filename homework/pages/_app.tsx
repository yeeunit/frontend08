// import '../styles/globals.css'
import { Global } from '@emotion/react'
import { AppProps } from 'next/app'
import { globalStyles } from '../src/commons/styles/globalStyles'
import Layout from '../src/components/commons/layout'

import { RecoilRoot, useRecoilState } from "recoil";
import ApolloSetting from '../src/components/commons/apollo'





function MyApp({ Component, pageProps }: AppProps) {


  // prettier-ignore
  return(
      <>
       <RecoilRoot>
        <ApolloSetting>
          {/* <ApolloProvider client={client}>  */}
              <Global styles={globalStyles} />
              <Layout>
              <Component {...pageProps} />
              </Layout> 
          {/* </ApolloProvider> */}
          </ApolloSetting>
          </RecoilRoot>
      </>
  )
}

export default MyApp;
