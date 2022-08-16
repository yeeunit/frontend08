// 등록하기 프리젠터

import * as W from "./BoardWrite.styles";
import { IBoardWriteProps } from "./BoardWrite.types";
import { v4 as uuidv4 } from "uuid";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import Link from "next/link";


// import "react-quill/dist/quill.snow.css";
// import dynamic from "next/dynamic";
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });


export default function BoardWriteUI(props: IBoardWriteProps){


    return(
      <>
      {props.isOpen && (
        <W.AddressModal visible={true}>
          <W.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </W.AddressModal>
      )}


      <W.Wrapper>
        <W.Title>{props.isEdit ? "게시글 수정" : "게시글 등록"}</W.Title>
        <W.WriterWrapper>
          <W.InputWrapper>
            <W.Label>작성자</W.Label>
              <W.Writer 
              id ="writer"
              type="text" 
              placeholder="이름을 적어주세요." 
              onChange={props.onChangeInputs}
              defaultValue={props.data?.fetchBoard.writer || ""}
              readOnly={!!props.data?.fetchBoard.writer}
              />
              <W.Error>{props.writerError}</W.Error>
          </W.InputWrapper>

          <W.InputWrapper>
            <W.Label>비밀번호</W.Label>
              <W.Password 
              id="password"
              type="password" 
              placeholder="비밀번호를 작성해주세요." 
              onChange={props.onChangeInputs} />
              <W.Error>{props.passwordError}</W.Error>
          </W.InputWrapper>
        </W.WriterWrapper>
        
        <W.InputWrapper>
          <W.Label>제목</W.Label>
          <W.Subject 
          id="title"
          type="text" placeholder="제목을 작성해주세요." onChange={props.onChangeInputs} 
          defaultValue={props.data?.fetchBoard.title}/>
          <W.Error>{props.titleError}</W.Error>
        </W.InputWrapper>

        <W.InputWrapper>
          <W.Label>내용</W.Label>
          <W.Contents 
          id="contents"
          placeholder="내용을 작성해주세요." onChange={props.onChangeInputs} 
          defaultValue={props.data?.fetchBoard.contents}>
            {/* <ReactQuill  placeholder="내용을 작성해주세요." onChange={props.onChangeContents} 
          defaultValue={props.data?.fetchBoard.contents}/> */}
            </W.Contents>
          <W.Error>{props.contentsError}</W.Error>
        </W.InputWrapper>

        <W.InputWrapper>
          <W.Label>주소</W.Label>
            <W.ZipcodeWrapper>
              <W.Zipcode 
              placeholder="00000"
              readOnly
              value={
                props.zipcode ||
                props.data?.fetchBoard.boardAddress?.zipcode ||""} />
              <W.SearchButton 
              onClick={props.onClickAddressSearch}>
                우편번호 검색</W.SearchButton>
            </W.ZipcodeWrapper>
            <W.Address
              readOnly
              value={
              props.address ||
              props.data?.fetchBoard.boardAddress?.address ||
              ""
            }
          />
          <W.Address
              onChange={props.onChangeAddressDetail}
              defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail || ""
            }
          />
            {/* <W.Address 
            onChange = {props.onChangeAddressDetail}
            /> */}
        </W.InputWrapper>

        <W.InputWrapper>
          <W.Label>유튜브</W.Label>
          <W.Youtube placeholder="링크를 복사해주세요."
          onChange={props.onChangeYoutubeUrl}
          defaultValue={props.data?.fetchBoard.youtubeUrl || ""}
          />
        </W.InputWrapper>

        <W.ImageWrapper>
          <W.Label>사진첨부</W.Label>
          {props.fileUrls.map((el, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
          
          </W.ImageWrapper>


          {/* <W.UploadButton style={{cursor:"pointer"}} onClick={props.onClickImage} >+</W.UploadButton> */}
{/* 
          <input 
                style={{ display: "none" }}
                type="file" 
                ref={props.fileRef}
                onChange={props.onChangeFile} 
                accept="png"/>
                <br /><br />
                <img 
                style = {{width:"400px"}} 
                src = {`https://storage.googleapis.com/${props.imageUrl}`} /> */}

          {/* {props.fileUrls.map((el, index) => (
            <W.UploadButton
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))} */}



        <W.OptionWrapper>
          <W.Label>메인설정</W.Label>
          <W.RadioButton type="radio" id="youtube" name="radio-button" />
          <W.RadioLabel htmlFor="youtube">유튜브</W.RadioLabel>
          <W.RadioButton type="radio" id="image" name="radio-button" />
          <W.RadioLabel htmlFor="image">사진</W.RadioLabel>
        </W.OptionWrapper>
        
        <W.ButtonWrapper>
          <W.SubmitButton 
          onClick={props.isEdit? props.onClickUpdate : props.onClickSubmit}
          isActive={props.isEdit? true : props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}

          </W.SubmitButton>

          <W.CancelButton>
            
            <Link href="/boards/">        
            <a > 취소하기 </a>
            </Link>
            
          </W.CancelButton>
        </W.ButtonWrapper>
    </W.Wrapper>
{/* 
    {props.isOpen && (
      <W.AddressModal visible={true}>
        <W.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
      </W.AddressModal>
    )} */}
    </>
  )
}