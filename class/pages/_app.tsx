// import "../styles/globals.css";
import { Global } from "@emotion/react";
import "antd/dist/antd.css";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwvduIZ06CtF0Egqbh6yVT6LDVX-zN-No",
  authDomain: "codecamp-yeeuit.firebaseapp.com",
  projectId: "codecamp-yeeuit",
  storageBucket: "codecamp-yeeuit.appspot.com",
  messagingSenderId: "694610873380",
  appId: "1:694610873380:web:1b7438beed24967cac5cb1",
  measurementId: "G-BWTTQ0CG0F"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);


function MyApp({ Component, pageProps }: AppProps) {
  
  return (
   
//     <Head>  모든 페이지에서 카카오맵을 다운받으므로 비효율적
//     <script 
//     type="text/javascript" 
//     src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b4231ee4e877b1e937e9152e088001de"></script>
// </Head>


    <RecoilRoot>
      <ApolloSetting>
      <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
