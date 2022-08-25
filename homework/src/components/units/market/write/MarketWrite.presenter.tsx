import KakaoMap from "../../kakaoMap";
import Uploads02 from "../../uploads/02/Uploads02.container";
import * as M from "./MarketWrite.styles";
import { v4 as uuidv4 } from "uuid";

import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MarketWriteUI(props) {
  return (
    <>
      <M.Wrapper>
        <M.Form
          onSubmit={
            props.isEdit
              ? props.handleSubmit(props.onClickUpdate)
              : props.handleSubmit(props.onClickCreate)
          }
        >
          <M.Title>{props.isEdit ? "상품 수정" : "상품 등록"}</M.Title>

          {props.isOpen && (
            <M.AddressModal visible={true}>
              <M.AddressSearchInput
                onComplete={props.onCompleteAddressSearch}
              />
            </M.AddressModal>
          )}
          <M.Label> 상품명 </M.Label>
          <M.Input
            type="text"
            placeholder="상품명을 적어주세요."
            {...props.register("name")}
          />

          <M.Label> 한줄요약 </M.Label>
          <M.Input
            type="text"
            placeholder="한줄 요약을 적어주세요."
            {...props.register("remarks")}
          />

          <M.Label> 상품설명 </M.Label>
          <ReactQuill
            style={{ width: "770px", height: "200px" }}
            onChange={props.onChangeContents}
          />

          <M.Label> 판매가격 </M.Label>
          <M.Input
            type="text"
            placeholder="가격을 입력해주세요"
            {...props.register("price")}
          />

          <M.Label> 태그입력 </M.Label>
          <M.Input
            type="text"
            placeholder="#태그"
            {...props.register("tags")}
          />

          <M.MapWrapper>
            <M.KakaoMap>
              <M.Label> 거래위치 </M.Label>
              <KakaoMap data={props.data} address={props.address} />
            </M.KakaoMap>

            <M.AddressWrapper>
              {/* <M.Label> GPS </M.Label> */}

              <M.Label> 주소 </M.Label>
              <M.Address
                type="text"
                placeholder="00000"
                readOnly
                // value={
                //  props.zipcode ||
                //   props.data?.fetchUseditems.useditemAddress?.zipcode || ""
                // }
                {...props.register("useditemAddress.zipcode")}
              />

              <M.Address
                readOnly
                {...props.register("useditemAddress.address")}
                // value={
                //   props.address ||
                //   props.data?.fetchUseditems.useditemAddress?.address ||
                //   ""
                // }
              />

              {/* //   type="text" */}
              {/* //   {...props.register("useditemAddress.address")} */}
              {/* // /> */}
              <M.Address
                onChange={props.onChangeAddressDetail}
                // defaultValue={
                //   props.data?.fetchUseditems.useditemAddress?.addressDetail ||
                //   ""
                // }

                type="text"
                {...props.register("useditemAddress.addressDetail")}
              />
              <br />
              <M.AddressButton
                // type="button"
                // id="modalOpen"
                onClick={props.onClickAddressSearch}
              >
                우편번호 검색
              </M.AddressButton>
              {/* <M.Label
                type="text"
                readOnly
                {...props.register("useditemAddress.address")}
              /> */}
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

          <M.SubmitButton onClick={props.onClickCancel}>
            취소하기
          </M.SubmitButton>

          <M.SubmitButton>
            {props.isEdit ? "수정하기" : "등록하기"}
          </M.SubmitButton>
        </M.Form>
      </M.Wrapper>
    </>
  );
}
