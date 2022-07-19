//import { getDate } from "../../../../commons/libraries/utils";
import * as L from "./MyBoardList.styles";

export default function MyBoardListUI(props) {
  return (
    <L.Wrapper>
      <L.TableTop />
      <L.Row>
        <L.ColumnHeaderBasic>ID</L.ColumnHeaderBasic>
        <L.ColumnHeaderTitle>제목</L.ColumnHeaderTitle>
        <L.ColumnHeaderBasic>작성자</L.ColumnHeaderBasic>
        <L.ColumnHeaderBasic>날짜</L.ColumnHeaderBasic>
      </L.Row>
      {props.data?.fetchBoards.map((el) => (
        <L.Row key={el._id}>
          <L.ColumnBasic>
            {String(el._id).slice(-4).toUpperCase()}
          </L.ColumnBasic>
          <L.ColumnTitle id={el._id} onClick={props.onClickMoveToMyBoardDetail}>
            {el.title}
          </L.ColumnTitle>
          <L.ColumnBasic>{el.writer}</L.ColumnBasic>
          {/* <L.ColumnBasic>{getDate(el.createdAt)}</L.ColumnBasic> */}
        </L.Row>
      ))}
      <L.TableBottom />
      <L.Footer>
        <L.Button onClick={props.onClickMoveToMyBoardNew}>
          {/* <L.PencilIcon src="/images/board/list/write.png" /> */}
          게시물 등록하기
        </L.Button>
      </L.Footer>
    </L.Wrapper>
  );
}
