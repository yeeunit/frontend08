import KakaoMap from '../../kakaoMap'
import * as M from './MarketWrite.styles'

export default function MarketWriteUI(props){

  return(
    <>
    <M.Wrapper>
    <M.Title> 상품 등록하기</M.Title>


  {/* <M.InputWrapper> */}
    <M.Label> 상품명 </M.Label>
    <M.Input 
    id="name"
    type="text"
    placeholder="상품명을 적어주세요."
    onChange={props.onChangeInputs}
    />
  {/* </M.InputWrapper> */}


    <M.Label> 한줄요약 </M.Label>
    <M.Input  
    id="remarks"
    type="text"
    placeholder="한줄 요약을 적어주세요."
    onChange={props.onChangeInputs}
    />


    <M.Label> 상품설명 </M.Label>
    <M.Input 
    id="contents"
    type="text"
    placeholder="내용을 입력해주세요"
    onChange={props.onChangeInputs} />
    {/* <ReactQuill onChange={props.onChangeContents} /> */}
    

    <M.Label> 판매가격 </M.Label>
    <M.Input 
    id="price"
    type="text"
    placeholder="가격을 입력해주세요"
    onChange={props.onChangeInputs} />


    <M.Label> 태그입력 </M.Label>
    <M.Input 
    id="tag"
    type="text"
    placeholder="#tag #태그"/>

    <M.Label> 거래위치 </M.Label>
    {/* <M.Input type="text" /> */}
    <KakaoMap></KakaoMap>

    <M.Label> GPS </M.Label>
    <M.Input type="text" />

    <M.Label> 주소 </M.Label>
    <M.Input type="text" />

    <M.Label> 사진첨부 </M.Label>
    <M.Input type="text" />


    <M.SubmitButton
    onClick = {props.onClickSubmit}
    >
      등록하기
    </M.SubmitButton>
    
    {/* <button 
    onClick = { props.isEdit ? props.onClickUpdate : props.onClickSubmit }
    isActive = { props.isEdit ? true : props.isActive }
    >
    { props.isEdit ? "수정하기" : "등록하기" }

    </button> */}


    </M.Wrapper>
    </>
  )
}