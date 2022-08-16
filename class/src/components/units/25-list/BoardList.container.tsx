import { useQuery } from "@apollo/client"
import _ from "lodash"
import { useRouter } from "next/router"
import { ChangeEvent, MouseEvent, useState } from "react"
import { 
  IQuery, 
  IQueryFetchBoardsArgs, 
  IQueryFetchBoardsCountArgs } from "../../../../commons/types/generated/types"
import { useMovetoPage } from "../../commons/hooks/useMovetoPage"
import useSearch from "../../commons/hooks/useSearch"
import BoardListUI from "./BoardList.presenter"
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries"


export default function BoardList(){

  const {onClickMovetoPage} = useMovetoPage()
  const [keyword, onChangeKeyword] = useSearch()

   // const router = useRouter()

  // const onClickMoveToBoardNew = () => {
  //   router.push("/boards/new");
  // }

  // const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {    
  //   if (!(event.target instanceof HTMLDivElement)) return;
  //     // console.log(event.target.id)
  //     // console.log(event.target.createdAt)
  //     router.push(`/boards/${event.target.id}`);
  //   }

    
    const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">, 
    IQueryFetchBoardsArgs>(FETCH_BOARDS);
   
    const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">, 
    IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT)




    const getDebounce = _.debounce((value) => {
      refetch({ search: value, page: 1 })
      setKeyword(value)
  }, 1000)

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value)
}

    const onClickPage = (event: MouseEvent<HTMLScriptElement>) => {
  if(!(event.target instanceof HTMLSpanElement)) return;

  refetch({ page: Number(event.target.id )})
}




  return(

    <BoardListUI
    data = {data}
    onClickMovetoPage = {onClickMovetoPage}
    // onClickMoveToBoardNew = {onClickMoveToBoardNew}
    // onClickMoveToBoardDetail = {onClickMoveToBoardDetail}
    onChangeSearch = {onChangeSearch}
    onClickPage = {onClickPage}
    refetch = {refetch}
    count = {dataBoardsCount?.fetchBoardsCount}
    keyword = {keyword}
    onChangeKeyword = {onChangeKeyword}
    />
  )

}