import { Wrapper, Header, Title, HdBox, SubTitle, BodyWrap, Numbering, Question, BtMenu, Name, Footer, Img } from "../../../styles/faq"




export default function MyPage(){

    return (
    <Wrapper>

        <HdBox>
        </HdBox>

        <Header>
        
            <Title>
            <h1>마이</h1>

            <Name>
            <Img src="/img-60.png"></Img> 임정아
            </Name>
        
        
            </Title>

            <SubTitle>
            <SubTitle>공지사항</SubTitle>

            <SubTitle>이벤트</SubTitle>

            <SubTitle>FAQ</SubTitle>

            <SubTitle>QnA</SubTitle>
            </SubTitle>

        </Header>

        <BodyWrap>

            <Question>
                <Numbering>Q.01</Numbering>
                리뷰 작성은 어떻게 하나요?
            </Question>

            <Question>
                <Numbering>Q.02</Numbering>
                리뷰 수정/삭제는 어떻게 하나요?
            </Question>

            <Question>
                <Numbering>Q.03</Numbering>
                아이디/비밀번호를 잊어버렸어요.
            </Question>

            <Question>
                <Numbering>Q.04</Numbering>
                회원탈퇴를 하고싶어요.
            </Question>

            <Question>
                <Numbering>Q.05</Numbering>
                출발지 설정은 어떻게 하나요?
            </Question>

            <Question>
                <Numbering>Q.06</Numbering>
                비밀번호를 변경하고 싶어요.
            </Question>

        
        </BodyWrap>

        <Footer>

            <BtMenu>
            <Img src="/Vector (1).png"></Img>
            홈</BtMenu>
                
            <BtMenu>
            <Img src="/Vector (2).png"></Img> 잇츠로드</BtMenu>

            <BtMenu>
            <Img src="/Vector (3).png"></Img>
            마이찜</BtMenu>

            <BtMenu>
            <Img src="/Vector (2).png"></Img>
            마이</BtMenu>
        
        </Footer>


    </Wrapper>

    )


}