import * as B from "./MyBoardWrite.styles";

export default function MyBoardWriteUI(props){
    return (

    <B.Body>

    <B.Wrapper> 

    <B.Header>{props.isEdit ? "게시글 수정" : "게시글 등록"}</B.Header>
            
        <B.NP>
            <B.NamePW>
                <B.Label>작성자 *</B.Label>
                <B.Name type="text" 
                placeholder="이름을 적어주세요." 
                onChange={props.onChangeName}>
                </B.Name>
                <B.Error>{props.nameError}</B.Error>
            </B.NamePW>
            
            <B.NamePW>
                <B.Label>비밀번호 *</B.Label>
                <B.Password type="password" 
                onChange={props.onChangePassword} 
                placeholder="비밀번호를 입력해주세요."></B.Password>
                <B.Error>{props.passwordError}</B.Error>
            </B.NamePW>

        </B.NP>
        

        <B.Contents>
            <B.Label>제목 *</B.Label>
            <B.Input type="text" onChange={props.onChangeTitle} 
            placeholder="제목을 작성해 주세요."></B.Input> 
            <B.Error>{props.titleError}</B.Error>
        </B.Contents>

        <B.Contents>
            <B.Label>내용 *</B.Label>
            <B.Youtube type="text" onChange={props.onChangeContents} placeholder="내용을 작성해주세요." />
            <B.Error>{props.contentsError}</B.Error>
            {/* <div style={{ color: "red", paddingTop: "20px" }}>{contentsError}</div> */}
        </B.Contents>


        <B.Contents>
            <B.Label>주소</B.Label>
            <B.ZipcodeWrapper>
            <B.Zipcode placeholder="00000" />
            <B.SearchButton>우편번호 검색</B.SearchButton>
            </B.ZipcodeWrapper>
        </B.Contents>
            
        <B.Contents>
            <B.Input type="text"></B.Input>
            <br />
            <B.Input type="text"></B.Input>
        </B.Contents>

        <B.Contents>
            <B.Label>유튜브</B.Label>
            <B.Input  
                placeholder="링크를 복사해주세요." 
                onChange={props.onChangeYoutubeUrl}
                defaultValue={props.data?.fetchBoard.youtubeUrl || ""} />
        </B.Contents>

        <B.Contents>

            <B.Label>사진첨부</B.Label>

            <B.ImageWrapper>
            <B.UploadButton>+</B.UploadButton>
            <B.UploadButton>+</B.UploadButton>
            <B.UploadButton>+</B.UploadButton>
            </B.ImageWrapper>

        </B.Contents>


            <B.Contents>
                <B.Label>메인설정</B.Label>
            </B.Contents>
        <B.OptionWrapper>

            <B.RadioButton type="radio" id="youtube" name="radio-button" />
            <B.RadioLabel >유튜브</B.RadioLabel>

            <B.RadioButton type="radio" id="image" name="radio-button" />
            <B.RadioLabel>사진</B.RadioLabel>
        </B.OptionWrapper>


        <div>

        <B.RegisterButton onClick={props.isEdit ? props.onClickUpdate : props.onClickRegister }
        isActive={props.isEdit ? true : props.isActive}>
        
        {props.isEdit ? "수정하기" : "등록하기"}
        </B.RegisterButton>

        </div>
           
    
    </B.Wrapper>
    </B.Body>

    )
}