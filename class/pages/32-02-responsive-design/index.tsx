import styled from "@emotion/styled"

    const Wrapper = styled.div`
        width: 1000px;
        height: 1000px;
        background-color: red;

        @media (min-width: 768px)and (max-width: 991px){
            // 태블릿사이즈일떄 위드사이즈를 어떻게 할 것인가
            width: 500px;
            height: 500px;
            background-color: green;
        }

        @media (max-width: 767px){
            // 모바일 
            width: 100px;
            height: 100px;
            background-color: pink;
            /* display: none; */

        }
    `

export default function ResponsiveDesignPage() {

    return (
        <>
        <Wrapper>상자</Wrapper>
        </>
    )
}