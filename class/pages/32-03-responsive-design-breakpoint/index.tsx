import styled from "@emotion/styled"
import { breakPoints } from "../../src/commons/styles/media"

    const Wrapper = styled.div`
        width: 1000px;
        height: 1000px;
        background-color: red;

        @media ${breakPoints.tablet}{
            // 태블릿사이즈일떄 위드사이즈를 어떻게 할 것인가
            width: 500px;
            height: 500px;
            background-color: green;
        }

        @media ${breakPoints.mobile}{
            // 모바일 
            width: 100px;
            height: 100px;
            background-color: pink;
            display: none;
        }
    `

    const MWrapper = styled.div`
        display: none;

        @media ${breakPoints.mobile} {
            width: 30%; // 반응형 디자인에서 가로는 비율로 주기
            height: 18.75rem; // = 300px; rem 컨버터
            // em도 있음. 
            // 전체 사이즈에따라 한번에 바꾸고 싶을떄 rem or em
            // em은 부모의 폰트사이즈를 따라감 
            // rem은 바디의 폰트사이즈 비례해서 같이 바뀜.
            display: block;
            background-color: orange;
        }
    `

export default function ResponsiveDesignPage() {

    return (
        <>
        <MWrapper>모바일에서만 필요한 컴포넌트</MWrapper>
        <Wrapper>상자</Wrapper>
        </>
    )
}