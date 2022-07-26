// 상세페이지

import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.contatiner";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.contatiner";


export default function BoardDetailPage(){
    
    return(
      <>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />  
      </>
      )
    }