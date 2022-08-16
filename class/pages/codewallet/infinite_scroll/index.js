import { gql, useQuery } from "@apollo/client";
import * as H from "./style"
import InfiniteScroll from 'react-infinite-scroller'


export const getDate = (value) => {
    const date = new Date(value)
    const mm = String(date.getMonth() + 1).padStart(2, "0")
    const dd = String(date.getDate()).padStart(2, "0")
    return `${mm}-${dd}`
}

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;


export default function InfinitePageScroller(){

    const { data, fetchMore } = useQuery(FETCH_BOARDS);

    const onFetchMore = () => {
        if(!data) return; // 데이터가 없으면 실행하지마
    
        fetchMore({
            variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
            updateQuery: (prev, { fetchMoreResult }) => {
                if(!fetchMoreResult.fetchBoards)
                    return {fetchBoards: [...prev.fetchBoards]}
            
                return {
                    fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards]
                }
            }
        })
      }

    return (
    <H.Wrapper>
        <h2>QUIZ 5-1 <br /> 무한스크롤 구현하기</h2>
       
      <H.TableTop />

      <H.Row>
        <H.ColumnHeader>ID</H.ColumnHeader>
        <H.ColumnHeader>제목</H.ColumnHeader>
        <H.ColumnHeader>작성자</H.ColumnHeader>
        <H.ColumnHeader>날짜</H.ColumnHeader>
      </H.Row>

      <H.Div>
       <InfiniteScroll pageStart={0} loadMore={onFetchMore} hasMore={true} style={{height:"500px", overflow:"auto"}} >
      {data?.fetchBoards.map((el) => (
        <H.Row key={el._id}>
          <H.ColumnBasic>{String(el._id).slice(-4).toUpperCase()}</H.ColumnBasic>
          <H.ColumnBasic>{el.title}</H.ColumnBasic>
          <H.ColumnBasic>{el.writer}</H.ColumnBasic>
          <H.ColumnBasic>{getDate(el.createdAt)}</H.ColumnBasic>

        </H.Row>
      )) || <div></div>}
      </InfiniteScroll>
      </H.Div>
       
    </H.Wrapper>
    
    )
}