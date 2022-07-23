// 등록하기 프리젠터

import * as W from "./BoardWrite.styles";


export default function BoardWriteUI(props){

    return(

      <W.Wrapper>
        <W.Title>{props.isEdit ? "게시글 수정" : "게시글 등록"}</W.Title>
        <W.WriterWrapper>
          <W.InputWrapper>
            <W.Label>작성자</W.Label>
            <W.Writer type="text" placeholder="이름을 적어주세요." onChange={props.onChangeWriter}
            defaultValue={props.data?.fetchBoard.writer}
            readOnly={!!props.data?.fetchBoard.writer}
             />
            <W.Error>{props.writerError}</W.Error>
          </W.InputWrapper>
          <W.InputWrapper>
            <W.Label>비밀번호</W.Label>
            <W.Password type="password" placeholder="비밀번호를 작성해주세요." onChange={props.onChangePassword} />
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
          defaultValue={props.data?.fetchBoard.contents}/>
          <W.Error>{props.contentsError}</W.Error>
        </W.InputWrapper>
        <W.InputWrapper>
          <W.Label>주소</W.Label>
          <W.ZipcodeWrapper>
            <W.Zipcode placeholder="07250" />
            <W.SearchButton>우편번호 검색</W.SearchButton>
          </W.ZipcodeWrapper>
          <W.Address />
          <W.Address />
        </W.InputWrapper>
        <W.InputWrapper>
          <W.Label>유튜브</W.Label>
          <W.Youtube placeholder="링크를 복사해주세요."
          />
          

        </W.InputWrapper>
        <W.ImageWrapper>
          <W.Label>사진첨부</W.Label>
          <W.UploadButton>+</W.UploadButton>
          <W.UploadButton>+</W.UploadButton>
          <W.UploadButton>+</W.UploadButton>
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
        </W.ButtonWrapper>
    </W.Wrapper>

    )
}