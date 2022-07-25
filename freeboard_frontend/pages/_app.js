import '../styles/globals.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { Avatar, AvatarWrapper, Body, BottomWrapper, Button, CardWrapper, Contents, CreatedAt, Header, Info, Title, Wrapper, Writer } from "../../../styles/emotion-detail";

function MyApp({ Component, pageProps }) {

  const client = new ApolloClient({
    uri: "http://backend08.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
export default MyApp
