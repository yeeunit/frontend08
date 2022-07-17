import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MyBoardDetailUI from "./MyBoardDetail.presenter";
import { FETCH_BOARD } from './MyBoardDetail.queries'


export default function MyBoardDetail(){
    const router = useRouter()
    console.log(router.query.boardId)

    const { data } = useQuery(FETCH_BOARD, {
      variables: { boardId: router.query.boardId },
    });

    // const onClickMoveToBoardList = () => {
    //   router.push("/boards");
    // };
  
    // const onClickMoveToBoardEdit = () => {
    //   router.push(`/boards/${router.query.boardId}/edit`);
    // };
    
    return (
      <MyBoardDetailUI 
        data={data}
        // onClickMoveToBoardList={onClickMoveToBoardList}
        // onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      />
    )
}