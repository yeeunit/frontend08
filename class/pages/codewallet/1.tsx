import { useState } from "react";

export default function BoardWriteUI() {
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
  
    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [contentsError, setContentsError] = useState("");
  
    const onChangeWriter = (event) => {
      setWriter(event.target.value);
    };
  
    const onChangePassword = (event) => {
      setPassword(event.target.value);
    };
  
    const onChangeTitle = (event) => {
      setTitle(event.target.value);
    };
  
    const onChangeContents = (event) => {
      setContents(event.target.value);
    };
  
    const onClickSubmit = async () => {
      if (writer === "") {
        setWriterError("작성자를 입력해주세요.");
      }
      if (password === "") {
        setPasswordError("비밀번호를 입력해주세요.");
      }
      if (title === "") {
        setTitleError("제목을 입력해주세요.");
      }
      if (contents === "") {
        setContentsError("내용을 입력해주세요.");
      }
      if (writer !== "" && password !== "" && title !== "" && contents !== "") {
          alert("게시글이 등록되었습니다.");
      }
    };
  
    return (
      <div>
        <div>게시글 등록</div>
        <div>
          <div>
            <div>작성자</div>
            <Writer type="text" placeholder="이름을 적어주세요." onChange={onChangeWriter} />
            <div>{writerError}</div>
          </div>
          <div>
            <div>비밀번호</div>
            <Password type="password" placeholder="비밀번호를 작성해주세요." onChange={onChangePassword} />
            <div>{passwordError}</div>
          </div>
        </div>
        <div>
          <div>제목</div>
          <Subject type="text" placeholder="제목을 작성해주세요." onChange={onChangeTitle} />
          <Error>{titleError}</Error>
        </div>
        <div>
          <div>내용</div>
          <Contents placeholder="내용을 작성해주세요." onChange={onChangeContents} />
          <Error>{contentsError}</Error>
        </div>
        <div>
          <div>주소</div>
          <div>
            <Zipcode placeholder="07250" />
            <button>우편번호 검색</button>
          </div>
          <div />
          <div />
        </div>
        <div>
          <Label>유튜브</Label>
          <Youtube placeholder="링크를 복사해주세요." />
        </div>
        <div>
          <Label>사진첨부</Label>
          <div>+</div>

        </div>
        <div>
          <div>메인설정</div>
          <button type="radio" id="youtube" name="radio-button" />
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <button type="radio" id="image" name="radio-button" />
          <RadioLabel htmlFor="image">사진</RadioLabel>
        </div>
        <div>
          <button onClick={onClickSubmit}>등록하기</button>
        </div>
      </div>
    );
  }
  