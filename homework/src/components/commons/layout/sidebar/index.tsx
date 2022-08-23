import styled from "@emotion/styled";


const Wrapper = styled.div`
    position: fixed;
    width: 200px;
    height: 500px;
    right: 5%;
    top: 219px;
    background: #FFFFFF;
    border: 1px solid #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    font-family: 'Jua';
`;

const Text = styled.div`

    font-size: 18px;
    margin-bottom: 15px;
`

const Image = styled.div`
    width: 130px;
    height: 130px;
    border: 1px solid #000000;
    margin-bottom: 10px;
    cursor: pointer;
`
export default function LayoutSidebar() {

    return(
        <>     
        <Wrapper> 
            <Text>오늘 본 상품</Text>

            <Image></Image>
            <Image></Image>
            <Image></Image>

        </Wrapper>
        </>    
    )
}

