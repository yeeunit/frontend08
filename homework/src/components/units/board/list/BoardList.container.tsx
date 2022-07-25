import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { MouseEvent } from "react"
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from "../../../../commons/types/generated/types"
import BoardListUI from "./BoardList.presenter"
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries"



export default function BoardList(){

    const router = useRouter()
    
    const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);
   
    const { data: dataBoardsCount } = useQuery<Pick<IQuery, "fetchBoardsCount">, IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT)

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  }

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {    
      // console.log(event.target.id)
      // console.log(event.target.createdAt)
      router.push(`/boards/${event.target.id}`);
    }

  return(

    <BoardListUI
    data = {data}
    onClickMoveToBoardNew = {onClickMoveToBoardNew}
    onClickMoveToBoardDetail = {onClickMoveToBoardDetail}
    refetch = {refetch}
    count = {dataBoardsCount?.fetchBoardsCount}
    />
  )

}