import styled from '@emotion/styled'

export const Wrapper = styled.div`
    color: black; 
    width: 450px;
    margin: 0 auto;
    padding: 0;
    border: 2px solid #ddd;
`


export const HdBox = styled.div`
    background : #ddd;
    width: 100%;
    height: 25px;

`
export const Header = styled.div`
    padding: 40px 35px 5px 35px;
`

export const Title = styled.div`
    display : flex;
    flex-direction: low;
	justify-content: space-between;
`
export const Img = styled.img`
    width: 40px;
`

export const Name = styled.div`
    float: right;
    font-weight: 600;
`

export const SubTitle = styled.div`
    display: flex;
    flex-direction: low;
    color: #ccc;
    font-size: 20px;
    font-weight: 600;
    width: 400px;
    padding-bottom: 20px;
    :nth-child(3) {color: #FF1B6D;
    text-decoration: underline;  
    border-bottom: 10px;

    }
`
export const BodyWrap = styled.div`
    padding: 35px;
    border-top: 1px solid #ccc;

`

export const Numbering = styled.div`
    color : #bbb;
    font-size : 11px;
    font-weight : 500;
    padding-bottom: 5px;
`

export const Question = styled.div`
    padding-bottom: 20px;
    font-size : 15px;

`

export const Footer = styled.footer`
    display: flex;
    flex-direction: low;
    height: 70px;
    text-align: center;
`

export const BtMenu = styled.div`
   
    color: #bbb;
    font-size: 15px;
    font-weight: 600;
    width: 400px;
    padding-bottom: 20px;
    display : flex;
    flex-direction: column;
    border-top: 1px solid #ddd;

`