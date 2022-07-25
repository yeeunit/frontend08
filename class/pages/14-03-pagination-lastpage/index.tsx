import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";
import {IQuery, IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

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

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function StaticRoutedPage() {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const{ data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  //위에랑 데이터 이름이 같기떄문에 :하고 이름 지어주기

  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);
  // 데이터보드카운트가 없을수 있으니 물음표 넣기

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof HTMLSpanElement)) return;
    refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = () => {
    if (startPage ===1) return;
    // 스타트 페이지가 1일때 이전페이지로 못가게 

    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    // 1 마지막 페이지 계산하기 (패치보드 카운트; 전체게시글 개수 가져오기)
    // 2 마지막 페이지가 포함된 상태일때 다음 페이지 클릭 제한 
    // 3 마지막 페이지 까만 숫자 보이게 하기

    if (startPage + 10 <= lastPage) {
    setStartPage((prev) => prev + 10);
    refetch({ page: startPage + 10 });
    }
  };
  // 또는 early-exit 패턴 사용
  // if (startPage + 10 > lastPage) return;
  //   setStartPage((prev) => prev + 10);
  //   refetch({ page: startPage + 10 });
    
  // };


  return (
    <>
      {data?.fetchBoards?.map((el) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
        </Row>
      ))}
      <span onClick={onClickPrevPage}>이전페이지</span>

      {new Array(10).fill(1).map((_, index) => (
        
        index + startPage <= lastPage ? (
          <span
            key={index + startPage}
            id={String(index + startPage)}
            onClick={onClickPage}
          >
            {" "}
            {index + startPage}
          </span>
          ) : 
          (
          <span>x</span>
          )
      ))}
      <span onClick={onClickNextPage}>다음페이지</span>

      {/* {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))} */}

      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(el => (
          <span key={el} id={String(el)} onClick={onClickPage}> {el} </span>
      ))} */}

      {/* <span id="1" onClick={onClickPage}> 1 </span>
      <span id="2" onClick={onClickPage}> 2 </span>
      <span id="3" onClick={onClickPage}> 3 </span> */}
    </>
  );
}
