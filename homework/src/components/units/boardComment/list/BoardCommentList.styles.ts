

import styled from "@emotion/styled"
import { Modal, Rate } from "antd";


export const Wrapper = styled.div`
    margin: 50px auto;
    width: 1000px; 
    display: flex;
    flex-direction: column;
    padding: 100px;
    border-bottom: 4px solid #2B3856;
;
`

export const ItemWrapper = styled.div`
  width: 1200px;
  margin: 0px 100px;
  padding-top: 20px;
  height: 128px;
  border-bottom: 1px solid lightgray;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction : column;
    align-items: center;

`
export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`;
export const UpdateIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const PasswordModal = styled(Modal)``;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;

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
  
  export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const Contents = styled.div``;



export const CommentWrap = styled.div`
width: 1000px; 
display: flex;
flex-direction : column;            

`
export const CommentTitle = styled.div`
font-size: 24px;
font-weight: 600;
color: #FF1654;
padding-top: 10px;
float: left;
`
export const CommentBox = styled.input`
width: 1000px; 
border: 1px solid #BDBDBD;
background: #f9f9f9;
height: 100px;
padding-left: 20px;
margin-bottom: 20px;

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
width: 1000px; 
border: 1px solid #BDBDBD;
background: #f9f9f9;
height: 100px;
padding-left: 20px;
margin-bottom: 20px;
`

export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const DateString = styled.div`
  color: lightgray;
  padding-top: 15px;
  padding-left: 60px;
`;

export const Star = styled(Rate)`
  padding-left: 20px;
`;