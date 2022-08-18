import { SearchOutlined } from "@ant-design/icons";
import Paginations from "../../../commons/paginations/01/Paginations01.container";
import Searchbars02 from "../../../commons/searchbars/02/Searchbars02.container";
import * as L from "./MarketList.styles"


export default function MarketListUI(props){

  return (
    <>
    <L.Wrapper>
    <h2>베스트 상품</h2>
    <L.PreviewWrapper>
    <L.PreviewItem></L.PreviewItem>
    <L.PreviewItem></L.PreviewItem>
    <L.PreviewItem></L.PreviewItem>
    </L.PreviewWrapper>

    <L.ListBar>
      <span>판매중 상품 </span>
      <span>판매된 상품 </span>

      <Searchbars02
        refetch={props.refetch}
        refetchBoardsCount={props.refetchBoardsCount}
        onChangeKeyword={props.onChangeKeyword}
      />
      <L.SearchBtn>검색</L.SearchBtn>
    </L.ListBar>

      <L.Line></L.Line>

      <L.ContentsWrapper>

          <L.ImgBox>이미지</L.ImgBox>
          <L.DetailsWrap>

            <L.Title>상품명</L.Title>
            <div>요약</div>
            <div>태그</div>
            <div>판매자</div>
            <div>좋아요</div>

          </L.DetailsWrap>
          <L.PriceWrap>가격</L.PriceWrap>

      </L.ContentsWrapper>
    
     


          <L.Button>
            상품 등록하기
          </L.Button>

    </L.Wrapper>
    </>
  );


}