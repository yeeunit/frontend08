import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { IQuery, IQueryFetchBoardsArgs } from "../../src/commons/types/generated/types";
import InfiniteScroll from 'react-infinite-scroller'

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function StaticRoutedPage() {
  const { data, fetchMore } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);

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
    <InfiniteScroll pageStart={0} loadMore={onFetchMore} hasMore={true}>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.contents}</Column>
        </Row>
      )) || <div></div>}
    </InfiniteScroll>
  );
}