import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";
import { IQuery, IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

// const [isActive, setIsActive] = useState(false);
// const [ disabled, setDisabled ] = useState(false);


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
  width: 15%;
  color: purple;
  font-weight: 500;
`;

const Span = styled.span`
    color: ${(props: ColorChange) => props.setColor === Number(props.id) ? 'red' : ''}
`

interface ColorChange {
    setColor: number
    id: string
}

export default function StaticRoutedPage() {
  const [startPage, setStartPage] = useState(1);
  const [ pageColor, setPageColor ] = useState(1);


  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const{ data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    // setDisabled(!disabled)
    if (!(event.target instanceof HTMLSpanElement)) return;
    setPageColor(Number(event.target.id))
    // setIsActive(true)
    refetch({ page: Number(event.target.id) });
  };



  const onClickPrevPage = () => {
    if (startPage ===1) return;

    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
    setPageColor(startPage - 10)
  };

  const onClickNextPage = () => {

    if (startPage + 10 <= lastPage) {
    setStartPage((prev) => prev + 10);
    refetch({ page: startPage + 10 });
    setPageColor(startPage + 10)
    }
  };

  const Style = styled. div `
    color: black;
    cursor: pointer;
    height: 60px;
    line-height: 60px;
    background: #eee;
    
    `
    // const StyleActive = styled. div `
    // color: purple;
    // font-weight: 600;
    // `

  return (
    <>
      {data?.fetchBoards?.map((el) => (
        <Row key={el._id}>
            writer :
          <Column>{el.writer}</Column>
          title :
          <Column>{el.title}</Column>
        </Row>
      ))}

    <Style >
    {/* disabled={disabled} */}
      <span onClick={onClickPrevPage}> ◀️ Prev </span>

      {new Array(10).fill(1).map((_, index) => (
        
        index + startPage <= lastPage ? (
          <Span
           setColor = { pageColor }
            key={index + startPage}
            id={String(index + startPage)}
            onClick={onClickPage}
          > 
           {/* {setIsActive(true)} */}

            {" "}
            {index + startPage}
          </Span>
          ) : 
          (
          <span></span>
          )
      ))}

      <span onClick={onClickNextPage}> Next ▶️</span>
    </Style>
            
    </>
  );
}
