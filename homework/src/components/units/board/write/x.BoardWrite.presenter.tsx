// 등록하기 프리젠터

import * as W from "./BoardWrite.styles";
import { IBoardWriteProps } from "./BoardWrite.types";
// import { v4 as uuidv4 } from "uuid";

// import "react-quill/dist/quill.snow.css";
// import dynamic from "next/dynamic";
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });


export default function BoardWriteUI(props: IBoardWriteProps){


    return(
      <>
      <W.Wrapper>
        <W.Title>{props.isEdit ? "게시글 수정" : "게시글 등록"}</W.Title>
        <W.WriterWrapper>
          <W.InputWrapper>
            <W.Label>작성자</W.Label>
              <W.Writer type="text" 
              placeholder="이름을 적어주세요." 
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer || ""}
              readOnly={!!props.data?.fetchBoard.writer}
              />
              <W.Error>{props.writerError}</W.Error>
          </W.InputWrapper>

          <W.InputWrapper>
            <W.Label>비밀번호</W.Label>
              <W.Password type="password" 
              placeholder="비밀번호를 작성해주세요." 
              onChange={props.onChangePassword} />
              <W.Error>{props.passwordError}</W.Error>
          </W.InputWrapper>
        </W.WriterWrapper>
        
        <W.InputWrapper>
          <W.Label>제목</W.Label>
          <W.Subject type="text" placeholder="제목을 작성해주세요." onChange={props.onChangeTitle} 
          defaultValue={props.data?.fetchBoard.title}/>
          <W.Error>{props.titleError}</W.Error>
        </W.InputWrapper>

        <W.InputWrapper>
          <W.Label>내용</W.Label>
          <W.Contents placeholder="내용을 작성해주세요." onChange={props.onChangeContents} 
          defaultValue={props.data?.fetchBoard.contents}>
            {/* <ReactQuill  placeholder="내용을 작성해주세요." onChange={props.onChangeContents} 
          defaultValue={props.data?.fetchBoard.contents}/> */}
            </W.Contents>
          <W.Error>{props.contentsError}</W.Error>
        </W.InputWrapper>

        <W.InputWrapper>
          <W.Label>주소</W.Label>
            <W.ZipcodeWrapper>
              <W.Zipcode placeholder="07250"
              readOnly
              value={props.zipcode ||
              props.data?.fetchBoard.boardAddress?.zipcode ||""} />
              <W.SearchButton>우편번호 검색</W.SearchButton>
            </W.ZipcodeWrapper>
            <W.Address 
            onChange = {props.onChangeAddressDetail}
            />
        </W.InputWrapper>

        <W.InputWrapper>
          <W.Label>유튜브</W.Label>
          <W.Youtube placeholder="링크를 복사해주세요."
          onChange={props.onChangeYoutube}
          defaultValue={props.data?.fetchBoard.youtubeUrl || ""}
          />
        </W.InputWrapper>

        <W.ImageWrapper>
          <W.Label>사진첨부</W.Label>
          <W.UploadButton style={{cursor:"pointer"}} onClick={props.onClickImage} >+</W.UploadButton>
          <W.UploadButton>+</W.UploadButton>
          <W.UploadButton>+</W.UploadButton>

          <input 
                style={{ display: "none" }}
                type="file" 
                ref={props.fileRef}
                onChange={props.onChangeFile} 
                accept="png"/>
                <br /><br />
                <img 
                style = {{width:"400px"}} 
                src = {`https://storage.googleapis.com/${props.imageUrl}`} />

          {/* {props.fileUrls.map((el, index) => (
            <W.UploadButton
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))} */}


        </W.ImageWrapper>

        <W.OptionWrapper>
          <W.Label>메인설정</W.Label>
          <W.RadioButton type="radio" id="youtube" name="radio-button" />
          <W.RadioLabel htmlFor="youtube">유튜브</W.RadioLabel>
          <W.RadioButton type="radio" id="image" name="radio-button" />
          <W.RadioLabel htmlFor="image">사진</W.RadioLabel>
        </W.OptionWrapper>
        
        <W.ButtonWrapper>
          <W.SubmitButton onClick={props.isEdit? props.onClickUpdate : props.onClickSubmit}
          isActive={props.isEdit? true : props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}

          </W.SubmitButton>

          <W.CancelButton onClick={props.onClickMoveToMain}>취소하기</W.CancelButton>
        </W.ButtonWrapper>
    </W.Wrapper>

    {props.isOpen && (
      <W.AddressModal visible={true}>
        <W.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
      </W.AddressModal>
    )}
    </>
  )
}