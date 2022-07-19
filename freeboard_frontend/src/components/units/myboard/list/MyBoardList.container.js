import MyBoardListUI from "./MyBoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./MyBoardList.queries";
import { useRouter } from "next/router";

export default function MyBoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  const onClickMoveToMyBoardNew = () => {
    router.push("/myboards/new");
  };

  const onClickMoveToMyBoardDetail = (event) => {
    router.push(`/myboards/${event.target.id}`);
  };

  return (
    <MyBoardListUI
      data={data}
      onClickMoveToMyBoardNew={onClickMoveToMyBoardNew}
      onClickMoveToMyBoardDetail={onClickMoveToMyBoardDetail}
    />
  );
}
