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
          <L.ColumnHeaderBasic>Title</L.ColumnHeaderBasic>
          <L.ColumnHeaderBasic>Writer</L.ColumnHeaderBasic>
          <L.ColumnHeaderBasic>Date</L.ColumnHeaderBasic>
          

        </L.TableTop>

        {props.data?.fetchBoards.map((el) => (
          
          <L.Row key={el._id}>

            <L.ColumnBasic  onClick={props.onClickMoveToBoardDetail}>
              {String(el._id).slice(-4).toUpperCase()}
            </L.ColumnBasic>


            <L.ColumnBasic id={el._id} onClick={props.onClickMoveToBoardDetail}>
              {/* {el.title} */}
              {el.title
                .replaceAll(props.keyword, `###${props.keyword}###`)
                .split("###")
                .map(el => (
                    <span key={uuidv4()} style={{ color: props.keyword === el ? "tomato" : "navy"}}>
                      {el}
                      </span>
            ))}
            </L.ColumnBasic>


            <L.ColumnBasic  onClick={props.onClickMoveToBoardDetail} >
              {el.writer}
            </L.ColumnBasic>

            <L.ColumnBasic  onClick={props.onClickMoveToBoardDetail}>
            {getDate(el.createdAt)}

            </L.ColumnBasic>

          </L.Row>
          //id={el._id} 없으면 페이지 안넘어감..왜필요하지??
            )
          )
        }


        <L.Footer>
          <Paginations refetch={props.refetch} onClick={props.onClickPage} count={props.count}/>

          {/* {new Array(10).fill(1).map((_, index) => (
                <Paginations key={index + 1} id={String(index + 1)} onClick={props.onClickPage}>
                    {index + 1}
                </Paginations>
            ))} */}


        
          <L.Search>
          
          <input refetch={props.refetch}
        refetchBoardsCount={props.refetchBoardsCount} type="text" onChange={props.onChangeSearch}/>

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