import { useQuery } from "@apollo/client"
import _ from "lodash"
import { useRouter } from "next/router"
import { ChangeEvent, MouseEvent, useState } from "react"
import { 
  IBoard,
  IQuery, 
  IQueryFetchBoardsArgs, 
  IQueryFetchBoardsCountArgs } from "../../../../commons/types/generated/types"
import BoardListUI from "./BoardList.presenter"
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries"


export default function BoardList(){

    const router = useRouter()
    
    const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">, 
    IQueryFetchBoardsArgs>(FETCH_BOARDS);
   
    const { data: dataBoardsCount, refetch: refetchBoardsCount  } = useQuery<
    Pick<IQuery, "fetchBoardsCount">, 
    IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT)

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  }

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {    
    if (!(event.target instanceof HTMLDivElement)) return;
      // console.log(event.target.id)
      // console.log(event.target.createdAt)
      router.push(`/boards/${event.target.id}`);
    }



    const [keyword, setKeyword] = useState("")

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

const onChangeKeyword = (value: string) => {
  setKeyword(value);
};



const onClickBasket = (basket: IBoard) => () => {
  console.log(basket);

  // 1. 기존 장바구니 가져오기
  const baskets: Pick<IBoard, "contents" | "title" | "_id" | "writer">[] =
    JSON.parse(localStorage.getItem("baskets") || "[]");

  // 2. 이미 담겼는지 확인하기
  const temp = baskets.filter((el) => el._id === basket._id);
  if (temp.length === 1) {
    alert("이미 담으신 물품입니다!!!");
    return;
  }

  // 3. 해당 장바구니에 담기
  const { __typename, ...newBasket } = basket;
  baskets.push(newBasket);
  localStorage.setItem("baskets", JSON.stringify(baskets));
};


  return(

    <BoardListUI
    data = {data}

    onClickMoveToBoardNew = {onClickMoveToBoardNew}
    onClickMoveToBoardDetail = {onClickMoveToBoardDetail}

    onChangeSearch = {onChangeSearch}
    onClickPage = {onClickPage}

    refetch = {refetch}
    refetchBoardsCount = {refetchBoardsCount}
    count = {dataBoardsCount?.fetchBoardsCount}
    keyword = {keyword}
    onChangeKeyword={onChangeKeyword}
    // onClickBasket={onClickBasket}
    // onClickMove={onClickMove}
    />
  )

}