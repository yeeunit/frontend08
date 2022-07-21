import styled from '@emotion/styled'


const Wrapper = styled.div`
    height : 50px;
    background: #2B3856;
    color: white;
    font-size: 24px;
    font-weight: 500;
    line-height: 50px;
    font-family : "myfont";
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export default function LayoutFooter(){

    return  (

        <Wrapper> 
         <div> 중고마켓 </div>
         <div> 마이페이지 </div>
         <div>자유게시판</div>

        </Wrapper>
    )
}