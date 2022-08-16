import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { 
  IMutation, 
  IMutationDeleteBoardArgs, 
  IMutationDislikeBoardArgs, 
  IMutationLikeBoardArgs, 
  IQuery, 
  IQueryFetchBoardArgs 
} from "../../../../commons/types/generated/types"

import {
  DELETE_BOARD, 
  DISLIKE_BOARD, 
  FETCH_BOARD, 
  LIKE_BOARD
} from "./MarketDetail.queries"
import BoardDetailUI from "./MarketDetail.presenter"


export default function MarketDetail(){

    const router = useRouter()
    const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">, 
    IMutationLikeBoardArgs>(LIKE_BOARD)

    const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">, 
    IMutationDislikeBoardArgs>(DISLIKE_BOARD)

    const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">, 
    IMutationDeleteBoardArgs>(DELETE_BOARD)

    const { data } = useQuery<Pick<IQuery, "fetchBoard">, 
    IQueryFetchBoardArgs>(FETCH_BOARD,{
        variables: {boardId: String(router.query.boardId)},
    })


  const onClickDelete = async () => {
    if (typeof router.query.boardId !== "string") 
    return;
    try {
      await deleteBoard({
          variables:{ boardId: router.query.boardId }
        })
        alert("게시글이 정상적으로 삭제되었습니다.");
      router.push("/boards");
    }
    catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  }
  

  const onClickLike = () => {
    if (typeof router.query.boardId !== "string") return
    likeBoard({
      variables: { boardId: router.query.boardId},
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId }
        }
      ]
    })
  }

  const onClickDislike = () => {
    if (typeof router.query.boardId !== "string") return
    dislikeBoard({
      variables: { boardId: router.query.boardId},
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId }
        }
      ]
    })
  }

  return(

    <MarketDetailUI
    data = {data}
    onClickMoveToList = {onClickMoveToList}
    onClickMoveToBoardEdit={onClickMoveToBoardEdit}
    onClickDelete = {onClickDelete}

    onClickLike = {onClickLike}
    onClickDislike = {onClickDislike}

    />
  )

}