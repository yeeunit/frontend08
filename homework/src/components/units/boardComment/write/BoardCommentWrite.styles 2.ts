import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 1000px;
  padding: 40px 100px;
  background-color: white;
  border-top: 1px dotted gray;
  
`;

export const Title = styled.span`
  color:  #2B3856;
  font-family: "Jua";
  font-size: 22px;
  font-weight: 500;

`

export const PencilIcon = styled.img``;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

`;

export const ContentsWrapper = styled.div`
  border: 1px solid lightgray;
`;

export const Input = styled.input`
  width: 155px;
  height: 50px;
  padding-left: 20px;
  border: 1px solid lightgray;
  margin: 10px 5px 10px 0;
`;

export const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
`;

export const Button = styled.button`
  width: 100px;
  height: 44px;
  background-color:  #2B3856;
  color:  white;
  font-family: "Jua";
  border: none;
  line-height: 44px;
  font-size: 16px;

  cursor: pointer;
  /* :hover {
  } */
`;



export const Star = styled(Rate)`
  padding-left: 10px;
  /* list-style: none;
  color: gold; */

`;