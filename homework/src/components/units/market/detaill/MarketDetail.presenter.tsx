import * as D from "./MarketDetail.styles"
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardDetailUIProps } from "./MarketDetail.types";
import { Tooltip } from "antd";


export default function MarketDetailUI(props){

    return (
        <D.Wrapper>
            <D.CardWrapper>
              <D.Header>
                
                <D.AvatarWrapper>
                  <D.Avatar src="/images/avatar.png" />
                  <D.Writer>{props.data?.fetchBoard?.writer}</D.Writer>

                </D.AvatarWrapper>

                  <D.Info>
                    <D.CreatedAt>
                    {getDate(props.data?.fetchBoard?.createdAt)}
                    </D.CreatedAt>
                  </D.Info>
{/* 
                <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            > 툴팁
              <D.LocationIcon src="/images/board/detail/location.png" />
            </Tooltip> */}
              </D.Header>

              <D.Body>
                <D.Title>
                  {props.data?.fetchBoard?.title}</D.Title>
                <D.Contents>
                  {props.data?.fetchBoard?.contents}</D.Contents>
                
                <D.Youtube>                   
                {props.data?.fetchBoard?.youtubeUrl && (

                <D.YoutubePlayer 
                  url= {props.data?.fetchBoard.youtubeUrl}
                  width='500px' height='400px'         
                  playing={true} muted={true} controls={true}  />
                )}
                </D.Youtube>

                <D.ImageWrapper>
                  {/* {props.data?.fetchBoard.images} */}
                  {/* <img 
                style = {{width:"400px"}} 
                src = {`https://storage.googleapis.com/${props.imageUrl}`} /> */}
              {props.data?.fetchBoard.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <D.Image
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}

                </D.ImageWrapper>
               

                <D.LikeDislike>
                  <div>
                  <D.LikeIcon onClick={props.onClickLike} />
                  {props.data?.fetchBoard?.likeCount}
                  </div>
                  <div>
                  
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