import styled from '@emotion/styled'

const Wrapper = styled.div`
    height : 70px;
    color : white; 
    font-size : 22px;
    background-color : #E9CFEC;
    line-height: 70px;
`

const Logo = styled.img`
    height: 50px;
`

export default function LayoutFooter(){

    return <Wrapper>Welcome to Yenny's Page</Wrapper>
}