import KakaoMap from '../../kakaoMap'
import Uploads02 from '../../uploads/02/Uploads02.container'
import * as M from './MarketWrite.styles'
import { v4 as uuidv4 } from "uuid";

import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Contents } from '../../board/detail/BoardDetail.styles';
import { PropertySafetyFilled } from '@ant-design/icons';



const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });


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
    {/* <M.Input 
    id="contents"
    type="text"
    placeholder="내용을 입력해주세요"
    onChange={props.onChangeInputs} /> */}
    {/* <ReactQuill onChange={props.onChangeContents} /> */}

    <ReactQuill id="contents" style={{width: "770px", height: "200px"}} onChange={props.onChangeContents} />

    

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

    <M.MapWrapper>
        <M.KakaoMap>
            <M.Label> 거래위치 </M.Label>
            <KakaoMap></KakaoMap>
        </M.KakaoMap>

    <M.AddressWrapper>
      <M.Label> GPS </M.Label>
          <M.LAT_LNG type="text" />
          <M.LAT_LNG type="text" />

      <M.Label> 주소 </M.Label>
        <M.Address type="text" />
    </M.AddressWrapper>

    </M.MapWrapper>


    <M.Label> 사진첨부 </M.Label>
      
      <M.ImageWrapper>
        {props.fileUrls.map((el, index) => (
                <Uploads02
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              ))}
      </M.ImageWrapper>


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