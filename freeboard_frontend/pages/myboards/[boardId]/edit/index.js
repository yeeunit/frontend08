// 수정하기 페이지!

import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MyBoardWrite from "../../../../src/components/units/myboard/write/MyBoardWrite.container";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;


export default function MyBoardsEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return <MyBoardWrite isEdit={true} data={data} />;
}
