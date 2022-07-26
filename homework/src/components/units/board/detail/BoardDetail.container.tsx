import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { IMutation, IMutationDeleteBoardArgs, IMutationDislikeBoardArgs, IMutationLikeBoardArgs, IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types"
import { DELETE_BOARD } from "../write/BoardWrite.queries"
import {DISLIKE_BOARD, FETCH_BOARD, LIKE_BOARD} from "./BoardDetail.queries"
import BoardDetailUI from "./BoardDetail.presenter"


export default function BoardDetail(){

    const router = useRouter()
    const [likeBoard] = useMutation<Pick<IMutation, "likeBoard">, IMutationLikeBoardArgs>(LIKE_BOARD)
    const [dislikeBoard] = useMutation<Pick<IMutation, "dislikeBoard">, IMutationDislikeBoardArgs>(DISLIKE_BOARD)
    const [deleteBoard] = useMutation<Pick<IMutation, "deleteBoard">, IMutationDeleteBoardArgs>(DELETE_BOARD)

    const { data } = useQuery<Pick<IQuery, "fetchBoard">, 
    IQueryFetchBoardArgs>(FETCH_BOARD,{
        variables: {boardId: String(router.query.boardId)},
    })

    const onClickMoveToList = () =>{
    router.push(`/boards`)
  }

  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };


  const onClickDelete = async (event) => {
    try {
      await deleteBoard({
          variables:{ 
            number: Number(event.target.id)
          }      
        })
    }
    catch (error) {
      alert(error.message)}
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

    <BoardDetailUI 
    data = {data}
    onClickMoveToList = {onClickMoveToList}
    onClickMoveToBoardEdit={onClickMoveToBoardEdit}
    onClickDelete = {onClickDelete}

    onClickLike = {onClickLike}
    onClickDislike = {onClickDislike}

    />
  )

}