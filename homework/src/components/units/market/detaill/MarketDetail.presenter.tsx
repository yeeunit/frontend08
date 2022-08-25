import * as D from "./MarketDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import Link from "next/link";
import Dompurify from "dompurify";
import { HeartOutlined } from "@ant-design/icons";
import KaKaoMap from "../../kakaoMap";
import Comment from "../comment/Comment.container";
import { v4 as uuidv4 } from "uuid";

export default function MarketDetailUI(props) {
  return (
    <D.Wrapper>
      <D.CardWrapper>
        <div style={{ fontSize: "40px", color: "#2b3856" }}>
          상품 디테일 보기
        </div>
        <br />
        <br />

        <D.Header>
          <D.AvatarWrapper>
            <D.Avatar src="/images/avatar.png" />
            <D.Writer>
              판매자 <br />
              {props.data?.fetchUseditem?.seller}
            </D.Writer>
          </D.AvatarWrapper>

          <D.Info>
            <D.CreatedAt>
              작성일 <br />
              {getDate(props.data?.fetchUseditem?.createdAt)}
            </D.CreatedAt>
            <HeartOutlined />
          </D.Info>
        </D.Header>

        <D.Body>
          <D.Title>
            상품명
            <br />
            {props.data?.fetchUseditem?.name}
          </D.Title>
          <D.Contents>
            가격
            <br />
            <D.Price>{props.data?.fetchUseditem?.price}</D.Price>
          </D.Contents>
          <D.Contents>
            요약 <br />
            {props.data?.fetchUseditem?.remarks}
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
            태그 <br />
            <D.Tags>{props.data?.fetchUseditem?.tags}</D.Tags>
          </D.Contents>
          이미지 <br />
          <D.ImageWrapper>
            {props.data?.fetchUseditem.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <D.Image
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </D.ImageWrapper>
          <D.MapWrap>
            <KaKaoMap
              data={props.data?.fetchUseditem}
              address={
                props.data?.fetchUseditem.useditemAddress?.address as string
              }
              width="100%"
              height="448px"
            />
          </D.MapWrap>
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

          <D.Button>구매하기</D.Button>
        </D.BottomWrapper>
      </D.CardWrapper>

      {props.dataUsedItemQuestions?.fetchUseditemQuestions.map((el, index) => (
        <Comment
          key={uuidv4()}
          userInfoId={props.userInfo?._id}
          el={el}
          useditemId={props.useditemId}
        />
      ))}
    </D.Wrapper>
  );
}
