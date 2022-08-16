import { SearchOutlined } from "@ant-design/icons";
import { getDate } from "../../../../commons/libraries/utils";
import Paginations from "../../../commons/paginations/01/Paginations01.container";
import * as L from "./BoardList.styles"
import { IBoardListUIProps } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";


export default function BoardListUI(props: IBoardListUIProps){

  return (
    <>
    <L.Wrapper>
      <L.Table>
        <L.TableTop>
          <L.ColumnHeaderBasic>ID</L.ColumnHeaderBasic>
          <L.ColumnHeaderTitle>Title</L.ColumnHeaderTitle>
          <L.ColumnHeaderBasic>Writer</L.ColumnHeaderBasic>
          <L.ColumnHeaderBasic>Date</L.ColumnHeaderBasic>
        </L.TableTop>

        {props.data?.fetchBoards.map((el, index) => (
          
          <L.Row key={el._id}>

            <L.ColumnBasic  onClick={props.onClickMoveToBoardDetail}>
              {String(el._id).slice(-4).toUpperCase()}
            </L.ColumnBasic>


            <L.ColumnTitle id={el._id} onClick={props.onClickMovetoPage(`/boards/${el._id}`)}>
              {/* {el.title} */}
              {el.title
                .replaceAll(props.keyword, `###${props.keyword}###`)
                .split("###")
                .map(el => (
                    <span key={uuidv4()} style={{ color: props.keyword === el ? "tomato" : "navy"}}>
                      {el}
                      </span>
            ))}
            </L.ColumnTitle>


            <L.ColumnBasic  onClick={props.onClickMoveToBoardDetail} >
              {el.writer}
            </L.ColumnBasic>

            <L.ColumnBasic  onClick={props.onClickMoveToBoardDetail}>
            {getDate(el.createdAt)}

            </L.ColumnBasic>

          </L.Row>
            )
          )
        }


        <L.Footer>
          <Paginations refetch={props.refetch} onClick={props.onClickMovetoPage("/boards/new")} count={props.count}/>


          <L.Search>

          <input type="text" onChange={props.onChangeSearch}/>

          <SearchOutlined style={{width:"50px"}} /> 
          
          </L.Search>

          <L.Button onClick={props.onClickMoveToBoardNew}>
            새글 작성하기
          </L.Button>


        </L.Footer>

        </L.Table>
    </L.Wrapper>
    </>
  );
}