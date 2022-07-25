import { getDate } from "../../../../commons/libraries/utils";
import Paginations from "../../../commons/paginations/01/Paginations01.container";
import * as L from "./BoardList.styles"
import { IBoardListUIProps } from "./BoardList.types";

export default function BoardListUI(props: IBoardListUIProps){

  return (
    <>
    <L.Wrapper>

        <L.TableTop>
          <L.ColumnHeaderBasic>ID</L.ColumnHeaderBasic>
          <L.ColumnHeaderTitle>제목</L.ColumnHeaderTitle>
          <L.ColumnHeaderBasic>작성자</L.ColumnHeaderBasic>
          <L.ColumnHeaderBasic>날짜</L.ColumnHeaderBasic>
        </L.TableTop>

        {props.data?.fetchBoards.map((el) => (
          
          <L.Row key={el._id}>

            <L.ColumnBasic>
              {String(el._id).slice(-4).toUpperCase()}
            </L.ColumnBasic>

            <L.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
              {el.title}
            </L.ColumnTitle>

            <L.ColumnBasic>
              {el.writer}
            </L.ColumnBasic>

            <L.ColumnBasic>
            {getDate(el.createdAt)}

            </L.ColumnBasic>

          </L.Row>
          //id={el._id} 없으면 페이지 안넘어감..왜필요하지??
            )
          )
        }

          {/* 아이디: {props.data?.fetchBoards._id} */}
          {/* 글쓴이 : {props.data?.fetchBoards.writer}
          제목: {props.data?.fetchBoards.title}
          콘텐츠: {props.data?.fetchBoards.contents}
          날짜 : {props.data?.fetchBoards.createdAt} */}

        <L.Footer>
          <Paginations refetch={props.refetch} count={props.count} />
          <L.Button onClick={props.onClickMoveToBoardNew}>
              새로 글쓰기
          </L.Button>
        </L.Footer>
    </L.Wrapper>
    </>
  );


}