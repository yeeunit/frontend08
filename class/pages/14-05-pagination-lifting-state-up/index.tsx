import { useQuery,gql } from "@apollo/client";
import { IQuery, IQueryFetchBoardArgs, IQueryFetchBoardsArgs } from "../../src/commons/types/generated/types";
import Board from "../../src/components/units/14-board-pagination/board";
import Pagination from "../../src/components/units/14-board-pagination/pagination";

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


export default function StaticRoutedPage() {

  const { data, refetch } = useQuery<
  Pick<IQuery, "fetchBoards">,
  IQueryFetchBoardsArgs
>(FETCH_BOARDS);

const{ data: dataBoardsCount } = useQuery<Pick<IQuery, "fetchBoardsCount">,IQueryFetchBoardArgs>(FETCH_BOARDS_COUNT);
const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);


  return (
    <>
     <Board data={data}/>
     <Pagination refetch={refetch} lastPage={lastPage}/>
    </>
  );
}
