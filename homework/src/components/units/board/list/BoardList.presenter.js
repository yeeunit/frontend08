import * as L from "./BoardList.styles"

export default function BoardListUI(props){

  return (
    <L.Wrapper>
        <h1>목록보기</h1>

      <L.TableTop />
        <L.Row>
          <L.ColumnHeaderBasic>ID</L.ColumnHeaderBasic>
          <L.ColumnHeaderTitle>제목</L.ColumnHeaderTitle>
          <L.ColumnHeaderBasic>작성자</L.ColumnHeaderBasic>
          <L.ColumnHeaderBasic>날짜</L.ColumnHeaderBasic>
        </L.Row>

        {props.data?.fetchBoards.map((el) => (
          
          <L.Row >
            <L.ColumnBasic id={el._id} onClick={props.onClickMoveToBoardDetail}>
              {String(el._id).slice(-4).toUpperCase()}
            </L.ColumnBasic>

            <L.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>{el.title}
            </L.ColumnTitle>

            <L.ColumnBasic id={el._id} onClick={props.onClickMoveToBoardDetail}>{el.writer}
            </L.ColumnBasic>

            <L.ColumnBasic id={el._id} onClick={props.onClickMoveToBoardDetail}>{el.createdAt}
            </L.ColumnBasic>

          </L.Row>
          //id={el._id} 없으면 페이지 안넘어감..왜필요하지??
            )
          )
        }
      <L.TableBottom />

          {/* 아이디: {props.data?.fetchBoards._id} */}
          {/* 글쓴이 : {props.data?.fetchBoards.writer}
          제목: {props.data?.fetchBoards.title}
          콘텐츠: {props.data?.fetchBoards.contents}
          날짜 : {props.data?.fetchBoards.createdAt} */}

          <L.Button onClick={props.onClickMoveToBoardNew}>
              새로 글쓰기
          </L.Button>

    </L.Wrapper>
  );
}