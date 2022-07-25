import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";
import { IQuery, IQueryFetchBoardsArgs,
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
    fetchBoardsCount}
`;

const Row = styled.div`
  display: flex;
  padding-left: 50px ;
`;

const Column = styled.div`
  width: 25%;
  color: steelblue;
  font-weight: 400;
  text-align: left;
`;


export default function StaticRoutedPage() {
  const [startPage, setStartPage] = useState(1);
  const [textColor, setTextColor] = useState('blue');

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const{ data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof HTMLSpanElement)) return;
    setTextColor('red')

    refetch({ page: Number(event.target.id) });

  };


  const onClickPrevPage = () => {
    if (startPage ===1) return;
    setStartPage((prev) => prev - 10);

    refetch({ page: startPage - 10 });
    setTextColor('black')

  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
    setStartPage((prev) => prev + 10);

    refetch({ page: startPage + 10 });
    }
  };

  const Style = styled. div `
    color: black;
    cursor: pointer;
    height: 60px;
    line-height: 60px;
    background: #eee;
    `

  return (
    <>
      {data?.fetchBoards?.map((el) => (
        <Row key={el._id}>
          <Column> {el.writer}</Column>
        
          <Column> {el.title}</Column>
        </Row>
      ))}

    <Style >
    {/* disabled={disabled} */}
      <span onClick={onClickPrevPage} style={{ color: textColor}}> ◀️ Prev </span>

      {new Array(10).fill(1).map((_, index) => (
        
        index + startPage <= lastPage ? (
          <span
            style={{ color: textColor}}
            key={index + startPage}
            id={String(index + startPage)}
            onClick={onClickPage}
          > 
           {/* {setIsActive(true)} */}

            {" "}
            {index + startPage}
          </span>
          ) : 
          (
          <span></span>
          )
      ))}

      <span onClick={onClickNextPage} style={{ color: textColor}}> Next ▶️</span>
    </Style>
            
    </>
  );
}
