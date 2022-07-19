import { getDate } from "../../../../commons/libraries/utils";
import * as L from "./BoardList.styles";

export default function BoardListUI(props) {
  return (
    <L.Body>

    <L.Wrapper>
      <L.TableTop>
        <L.List> List </L.List>
        <L.TitleSearch type="text" placeholder="제목을 검색해주세요"></L.TitleSearch>
      </L.TableTop>

      {props.data?.fetchBoards.map((el, _id) => (

      <L.Row key = {el._id}>
        <L.ColumnHeaderBasic><input type="checkbox" /></L.ColumnHeaderBasic>

        <L.ColumnHeaderBasic>{String(el._id).slice(-4).toUpperCase()} 
        </L.ColumnHeaderBasic>

        <L.ColumnHeaderTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
          {el.title} 
        </L.ColumnHeaderTitle>

        <L.ColumnHeaderBasic>{el.writer} </L.ColumnHeaderBasic>
        
        <L.ColumnHeaderBasic>{getDate(el.createdAt)} </L.ColumnHeaderBasic>
      </L.Row>

      ))} 
     

      <L.Footer>
        <L.Button onClick={props.onClickMoveToBoardNew}>
          {/* <L.PencilIcon src="/images/board/list/write.png" /> */}
          게시물 등록하기
        </L.Button>
        {/* <L.Button onClick={props.onClickDelete}>
          삭제
        </L.Button> */}
        
        {/* <L.Button id={el._id} onClick={props.onClickDelete}> */}

      </L.Footer>
    </L.Wrapper>
    </L.Body>
  );
}
