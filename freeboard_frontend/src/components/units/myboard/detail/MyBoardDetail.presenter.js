import { getDate } from "../../../../commons/libraries/utils";
import * as D from "./MyBoardDetail.styles";

export default function MyBoardDetailUI(props){
    return (

    <D.Body>
    <D.Wrapper>

        <D.Header>

            <D.ProfilePhoto>
                <img src="/profile.png" alt='사진'/>
            </D.ProfilePhoto>
            <D.Writer> 

                {/* _id : {props.data ? props.data.fetchBoard._id : "받아오는 중입니다."} */}
                작성자 : {props.data ? props.data.fetchBoard.writer: "받아오는 중입니다."}
            </D.Writer>
            <D.Date>
            {getDate(props.data?.fetchBoard?.createdAt)}
                
            </D.Date>
            <D.LinkLocation>
                ??
            </D.LinkLocation>

        </D.Header>

        <D.Bodywrap>
            <D.Title>
             제목 : {props.data ? props.data.fetchBoard.title : "받아오는 중입니다."}
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

            <D.Youtube 
            url={props.data?.fetchBoard.youtubeUrl}
                width="486px"
                height="240px"
            />

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


        {/* <div> _id : {data ? data.fetchBoard._id : "받아오는 중입니다."}</div> */}
        {/* <div> writer : {data ? data.fetchBoard.writer: "받아오는 중입니다."}</div> */}
        {/* <div> title : {data ? data.fetchBoard.title : "받아오는 중입니다."}</div> */}
        {/* <div> Images : {data ? data.fetchBoard.images : "받아오는 중입니다."}</div> */}
            
        </D.Wrapper>

        <D.Footer>
            <D.BottomWrapper>
                <D.Button onClick={props.onClickMoveToMyBoardList}>목록으로</D.Button>
                <D.Button onClick={props.onClickMoveToMyBoardEdit}>수정하기</D.Button>
                <D.Button>삭제하기</D.Button>
            </D.BottomWrapper>
        
        <D.CommentWrap>
                <D.CommentTitle>
                    댓글
                    <br /><br />⭐️⭐️⭐️⭐️⭐️
                </D.CommentTitle>
                
                <D.CommentBox type="text" 
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있씁니다." >
                </D.CommentBox>

                    <D.CommentBtn> 댓글등록</D.CommentBtn>

                <D.CommentList>
                댓글 목록
                </D.CommentList>

        </D.CommentWrap>



        </D.Footer>
    </D.Body>
    )
}