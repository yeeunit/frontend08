import * as D from "./BoardDetail.styles"
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardDetailUIProps } from "./BoardDetail.types";


export default function BoardDetailUI(props: IBoardDetailUIProps){

    return (
        <D.Wrapper>
            <D.CardWrapper>
              <D.Header>
                <D.AvatarWrapper>
                  <D.Avatar src="/images/avatar.png" />
                  <D.Info>
                    <D.Writer>{props.data?.fetchBoard?.writer}</D.Writer>
                    <D.CreatedAt>
                    {getDate(props.data?.fetchBoard?.createdAt)}
                    </D.CreatedAt>
                  </D.Info>
                </D.AvatarWrapper>
              </D.Header>

              <D.Body>
                <D.Title>
                  제목{props.data?.fetchBoard?.title}</D.Title>
                <D.Contents>
                  콘텐츠{props.data?.fetchBoard?.contents}</D.Contents>
                
                <D.Youtube> 유튜브                 
                {props.data?.fetchBoard?.youtubeUrl && (

                <D.YoutubePlayer 
                  url= {props.data?.fetchBoard.youtubeUrl}
                  width='500px' height='400px'         
                  playing={true} muted={true} controls={true}  />
                )}
                </D.Youtube>

                <D.LikeDislike>
                  <div>좋아요
                  <D.LikeIcon onClick={props.onClickLike} />
                  {props.data?.fetchBoard?.likeCount}
                  </div>
                  <div>
                  싫어요
                  <D.DislikeIcon onClick={props.onClickDislike} />
                  {props.data?.fetchBoard?.dislikeCount}
                  </div>
                </D.LikeDislike>

              </D.Body>

            <D.BottomWrapper>
              <D.Button onClick={props.onClickMoveToList}>목록으로</D.Button>
              <D.Button onClick={props.onClickMoveToBoardEdit}>수정하기</D.Button>
              <D.Button onClick={props.onClickDelete}>삭제하기</D.Button>
            </D.BottomWrapper>

            </D.CardWrapper>
          </D.Wrapper>
      );
}