import styled from "@emotion/styled"
import { Rate } from "antd"


export const Wrapper = styled.div`
    margin: 0px auto;
    width: 1000px; 
    display: flex;
    flex-direction: column;
    border-bottom: 3px solid #2B3856;
    border-top: 3px solid #2B3856;
    background-color: white;
`

export const CommentWrap = styled.div`
    padding: 20px;
    float: left;

`
export const CommentTitle = styled.div`
font-size: 24px;
font-weight: 700;
color: #2B3856;
`

export const Input = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid lightgray;
  margin-right: 20px;
`;


export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction : column;
    align-items: center;

`

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: #2B3856;
  color: white;
  font-size: 18px;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;
  
  `
  
export const CommentBox = styled.input`
width: 900px; 
border: 1px solid #BDBDBD;
background: #f9f9f9;
height: 100px;
padding-left: 20px;
margin-bottom: 20px;
display: block;

`

export const CommentBtn = styled.button`
width: 120px;
height: 40px;
background: #2B3856;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: white;
cursor: pointer;
margin-bottom: 20px;

`

export const CommentList = styled.div`
font-size: 20px;
font-weight: 400;
color: #FF1654;
padding-top: 10px;
float: left;
width: 800px; 
border: 1px solid #BDBDBD;
background: #f9f9f9;
height: 100px;
padding-left: 20px;
margin-bottom: 20px;
`


export const ProfilePhoto = styled.div`

`

export const CommentWriter = styled.div`
`

export const Grade = styled.div`
  list-style: none;
`

export const Date = styled.div`

`

export const Star = styled(Rate)`
`