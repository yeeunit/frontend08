import * as D from "./MarketDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import Link from "next/link";
import Dompurify from "dompurify";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import KaKaoMap from "../../kakaoMap";
import { v4 as uuidv4 } from "uuid";
import Comment from "../comment/Comment.container";

export default function MarketDetailUI(props) {
  return (
    <D.Wrapper>
      <D.CardWrapper>
        <div style={{ fontSize: "33px", color: "#2b3856" }}>
          상품 디테일 보기
        </div>
        <br />

        <D.Header>
          <D.AvatarWrapper>
            <D.Avatar src="/images/avatar.png" />
            <D.Writer>
              {/* 판매자 <br /> */}
              {props.data?.fetchUseditem?.seller?.name}
            </D.Writer>
          </D.AvatarWrapper>

          <D.Info>
            <D.CreatedAt>
              {getDate(props.data?.fetchUseditem.createdAt)}
            </D.CreatedAt>
            <br />
            <br />

            <D.Heart>
              <button
                style={{ width: "90px", height: "40px", fontSize: "20px" }}
                // pickCount={props.data?.fetchUseditem.pickedCount as number}
                onClick={props.onClickPick}
              >
                <HeartFilled /> 찜 {props.data?.fetchUseditem.pickedCount}
              </button>
            </D.Heart>
          </D.Info>
        </D.Header>

        <D.Body>
          <D.Contents>
            상품명
            <br />
            {props.data?.fetchUseditem.name}
          </D.Contents>
          <D.Contents>
            가격
            <br />
            {props.data?.fetchUseditem.price}
          </D.Contents>
          <D.Contents>
            요약 <br />
            {props.data?.fetchUseditem.remarks}
          </D.Contents>
          <D.Contents>
            콘텐츠
            <br />
            {typeof window !== "undefined" ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    props.data?.fetchUseditem.contents
                  ),
                }}
              ></div>
            ) : (
              ""
            )}
          </D.Contents>
          <D.Contents>
            태그
            {props.data?.fetchUseditem.tags?.map((el, index) => (
              <D.Tags key={uuidv4()}>{el}</D.Tags>
            ))}
          </D.Contents>
          <D.Contents>
            이미지 <br />
            <D.ImageWrapper>
              {props.data?.fetchUseditem.images?.map((el, index) => (
                <>
                  <D.Image
                    key={el}
                    // src={`https://storage.googleapis.com/${el[index]}`}
                    src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[index]}`}
                  />
                </>
              ))}
              {/* <>
                <D.Image></D.Image>
              </>
             */}
            </D.ImageWrapper>
          </D.Contents>
          <D.Contents>
            지도 <br />
            <D.MapWrap>
              <KaKaoMap
                data={props.data?.fetchUseditem}
                address={
                  props.data?.fetchUseditem.useditemAddress?.address as string
                }
                // width="100%"
                // height="448px"
              />
            </D.MapWrap>
          </D.Contents>
        </D.Body>

        <D.BottomWrapper>
          <Link href="/boards/market/">
            <D.Button>
              <a>목록으로</a>
            </D.Button>
          </Link>

          {/* <Link href="/boards/basket">
            <D.Button>
              <a>장바구니 담기</a>
            </D.Button>
          </Link> */}
          <D.Button onClick={props.onClickUpdate}> 수정하기</D.Button>
          <D.Button>구매하기</D.Button>
        </D.BottomWrapper>
      </D.CardWrapper>

      <div>
        {props.dataUsedItemQuestions?.fetchUseditemQuestions.map(
          (el, index) => (
            <Comment
              key={uuidv4()}
              userInfoId={props.userInfo?._id}
              el={el}
              useditemId={props.useditemId}
            />
          )
        )}
      </div>
    </D.Wrapper>
  );
}
