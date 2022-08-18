import Link from "next/link";
import Searchbars02 from "../../../commons/searchbars/02/Searchbars02.container";
import * as L from "./MarketList.styles"


export default function MarketListUI(props){

  return (
    
    <div>

    <L.Wrapper>

      <h2>베스트 상품</h2>
      <L.PreviewWrapper>
        <L.PreviewItem></L.PreviewItem>
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


    {props.data?.fetchUseditems.map((el) => (
        <div key={el._id}>
      <L.ContentsWrapper id={el._id} 
            onClick={props.onClickMoveToMarketDetail}>

        <L.ImgBox> 
        <L.Img 
        src ={
          el.images?.length !==0 && el.images?.[0] !== ""
          ? `https://storage.googleapis.com/${el.images?.[0]}`
          : ""
        }
         /> 
        </L.ImgBox>

          <L.DetailsWrap>

            <L.Title >
              {el.name}</L.Title>
            <div>{el.remarks}</div>
            <div>{el.contents}</div>
            <div>{el.tags}</div>
            <div>{el.seller}</div>

          </L.DetailsWrap>
          
          <L.PriceWrap>{el.price}</L.PriceWrap>

      </L.ContentsWrapper>

      </div>
     ))}


          <L.Button>
            <Link href="/boards/market/new">
            <a>상품 등록하기</a>
            </Link>
          </L.Button>

    </L.Wrapper>

    </div>
  )
}