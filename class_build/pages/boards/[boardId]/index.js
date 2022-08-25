import { useRouter } from "next/router";
import Head from "next/head";
import { GraphQLClient } from "graphql-request";

export default function BoardsDetailPage() {
  const router = useRouter();

  export const getSerberSideProps = async (context) => {

    const graphQLClient = new GraphQLClient(
    "http://backend08.codebootcamp.co.kr/graphql"
    )
    const result = await graphQLClient.request(FETCH_BOARD, {
      boardId: context.query.boardId
    })
  
    return {
      props: {
        title: result.fetchBoard.title,
        contents : result.fetchBoard.contents,
        images: result.fetchBoard.images
      
      }
    }
  }


  const FETCH_BOARD = gql`
  query fetchBoard($number: Int){
      fetchBoard(number: $number){
          number
          writer
          title
          contents
      }
  }
`
export const fetchBoard {


}

  return (
    <div>
      <Head>
        <meta property="og:title" content={props?.fetchBoard.title} />
        <meta property="og:description"  content={props?.fetchBoard.title} />
        <meta property="of: image"  content={props?.fetchBoard.title} />
      </Head>

      <div>
        안녕하세요! 게시글 상세페이지 입니다!!!, 게시글 ID는
        {router.query.boardId}입니다!!!
      </div>
    </div>
  );
}
