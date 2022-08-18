import * as D from "./MarketDetail.styles"
import { getDate } from "../../../../commons/libraries/utils";
import Link from "next/link";
import DOMPurify from "dompurify";


export default function MarketDetailUI(props){

    return (
        <D.Wrapper>
            <D.CardWrapper>
              <D.Header>
                
                <D.AvatarWrapper>
                  <D.Avatar src="/images/avatar.png" />
                  <D.Writer>{props.data?.fetchUseditem?.seller}</D.Writer>

                </D.AvatarWrapper>

                  <D.Info>
                    <D.CreatedAt>
                    {getDate(props.data?.fetchUseditem?.createdAt)}
                    </D.CreatedAt>
                  </D.Info>

              </D.Header>

              <D.Body>
                <D.Title> (제목) <br />
                  {props.data?.fetchUseditem?.name}
                </D.Title>
                
                <D.Contents> (가격) <br />
                  {props.data?.fetchUseditem?.price}
                </D.Contents>

                <D.Contents> (remarks) <br />
                  {props.data?.fetchUseditem?.remarks}
                </D.Contents>

                <D.Contents> (contents) <br />
                {typeof window !== "undefined" ? (
                <div
                  style={{ color: "blue" }}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(props.data?.fetchUseditem.contents),
                  }}
                ></div>
              ) : (
                <div style={{ color: "blue" }} />
              )}
                </D.Contents>


                <D.Contents> 태그입력 <br />
                  {props.data?.fetchUseditem?.tags}
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
               
              </D.Body>

            <D.BottomWrapper>
              <Link href="/boards/market/">
                <D.Button><a>목록으로</a></D.Button>
              </Link>

              <Link href="/boards/basket">
                <D.Button><a>장바구니 담기</a></D.Button>
              </Link>


              <D.Button>바로 구매하기</D.Button>
            </D.BottomWrapper>

            </D.CardWrapper>
          </D.Wrapper>
      );
}