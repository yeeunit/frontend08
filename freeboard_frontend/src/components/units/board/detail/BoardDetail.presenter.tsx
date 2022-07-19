import { getDate } from "../../../../commons/libraries/utils";
import * as D from "./BoardDetail.styles";

export default function BoardDetailUI(props){
    return (

    <D.Body>
    <D.Wrapper>

        <D.Header>

            <D.ProfilePhoto>
                <img src="/profile.png" alt='사진'/>
            </D.ProfilePhoto>
            <D.Writer> 

                {/* _id : {props.data ? props.data.fetchBoard._id : "받아오는 중입니다."} */}
                작성자 : {props.data?.fetchBoard?.writer}
            </D.Writer>
            <D.Date>
                {getDate(props.data?.fetchBoard?.createdAt)}
                {/* {props.data ? props.data.fetchBoard.createdAt: "받아오는 중입니다."} */}
            </D.Date>
            <D.LinkLocation>
                ??
            </D.LinkLocation>

        </D.Header>

        <D.Bodywrap>
            <D.Title>
             제목 : {props.data?.fetchBoard?.title}
            </D.Title>

            <D.Images> 
                <div> images        
                {/* {data ? data.fetchBoard.Images : "What's wrong with you"} */}
                </div>
            </D.Images>

            <D.Contents>
                내용 <br/>
                {props.data ? props.data.fetchBoard.contents : "받아오는 중입니다."}
            </D.Contents>

            <D.Youtube>
                Youtube : ^^^^<br />
                {/* {data?.fetchBoard?.youtubeUrl} */}

            </D.Youtube>

            </D.Bodywrap>

            <D.Grade>
                <D.Like>
                    <img src="/like.png" alt='사진'/><br/>
                    {props.data ? props.data.fetchBoard.likeCount: "받아오는 중입니다."}
                </D.Like>
                <D.Dislike>
                    <img src="/dislike.png" alt='사진'/><br/>
                    {props.data ? props.data.fetchBoard.dislikeCount: "받아오는 중입니다."}

                </D.Dislike>
            </D.Grade>

        </D.Wrapper>

        <D.Footer>
            <D.BottomWrapper>
                <D.Button onClick={props.onClickMoveToBoardList}>목록으로</D.Button>

                <D.Button onClick={props.onClickMoveToBoardEdit}>수정하기</D.Button>

                <D.Button onClick={props.onClickDelete}>삭제하기</D.Button>
            </D.BottomWrapper>
        
        <D.CommentWrap>
                <D.CommentTitle>
                    댓글
                    <br /><br />⭐️⭐️⭐️⭐️⭐️
                </D.CommentTitle>
                
                <D.CommentBox type="text" 
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있씁니다." >
                </D.CommentBox>

                <D.CommentBtn 
                onClickC={props.onClickCommentSubmit}> 
                댓글등록</D.CommentBtn>

        
                <D.CommentList onChange={props.onChangeComment} >
                댓글 <br/>
               
                

                <D.ProfilePhoto> 
                    프사
                </D.ProfilePhoto>

                <D.CommentWriter>
                    작성자 
                    {props.data ? props.data.fetchBoardComment.writer: "받아오는 중입니다."}                
                    </D.CommentWriter>
                <D.Grade>별점</D.Grade>
                <D.Comment>내용 
                {props.data ? props.data.fetchBoardComment.contents: "받아오는 중입니다."}                
                </D.Comment>
                <D.Date>
                    날짜
                </D.Date>
                

                {/* 작성자: { result.createBoardComment.writer }
                콘텐츠: { result.createBoardComment.contents } */}

                </D.CommentList>

        </D.CommentWrap>

        </D.Footer>
    </D.Body>
    )
}