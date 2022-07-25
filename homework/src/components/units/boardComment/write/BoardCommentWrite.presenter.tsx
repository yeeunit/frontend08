import * as C from "../write/BoardCommentWrite.styles"
import { IBoardCommentWriteUIProps } from "./BoardCommntWrite.typescript";


export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps){

    return(

        <C.Wrapper>
            <C.CommentWrap>
                <C.CommentTitle>
                    댓글
                </C.CommentTitle>

                   
                    
                    {!props.isEdit && (
        <>
          <span>댓글</span>
        </>
      )}    
                    <C.Input
          placeholder="작성자"
          onChange={props.onChangeWriter}
          value={props.writer || props.el?.writer || ""}
          readOnly={!!props.el?.writer}
        />
        <C.Input
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangePassword}
          value={props.password}
        />


        ⭐️
            <C.Star onChange={props.setStar} />


                <C.CommentBox type="text"  
                onChange={props.onChangeContents}
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있씁니다." 
                value={props.isEdit ? props.contents || props.el?.contents : props.contents}
                 />
                <C.ContentsLength>
            {(props.contents
              ? props.contents.length
              : props.el?.contents.length) || 0}
            /100
          </C.ContentsLength>
                <C.CommentBtn 
                 onClick={props.isEdit ? props.onClickUpdate : props.onClickCommentWrite}
                 >
                   {props.isEdit ? "수정하기" : "등록하기"}
                   </C.CommentBtn>
            
                <C.ProfilePhoto> 
                    프사
                </C.ProfilePhoto>

                <C.CommentWriter>
                    <input placeholder = "작성자"
                    onChange = {props.onChangeWriter} 
                    value = {props.writer} />        
                </C.CommentWriter>


                <C.Grade>별점</C.Grade>
                
                <C.Date>날짜</C.Date>
                
            </C.CommentWrap>

        </C.Wrapper>

    )
}