import BoardListUI from "./BoardList.presenter";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_BOARDS, DELETE_BOARD } from "./BoardList.queries";
import { useRouter } from "next/router";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  const [deleteBoard] = useMutation(DELETE_BOARD)

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = (event) => {
    router.push(`/boards/${event.target.id}`);
  };



  const onClickDelete = (event) => {
    deleteBoard({
        variables:{ boardId: event.target._id }
        ,
        refetchQueries: [{query: FETCH_BOARDS }]
    })
}

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickDelete={onClickDelete}
    />
  );
}
