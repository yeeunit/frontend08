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

    const onClickMoveToMyBoardList = () => {
      router.push("/myboards");
    };
  
    const onClickMoveToMyBoardEdit = () => {
      router.push(`/myboards/${router.query.boardId}/edit`);
    };
    
    return (
      <MyBoardDetailUI 
        data={data}
        onClickMoveToMyBoardList={onClickMoveToMyBoardList}
        onClickMoveToMyBoardEdit={onClickMoveToMyBoardEdit}
      />
    )
}