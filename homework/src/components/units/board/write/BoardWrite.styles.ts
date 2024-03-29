import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./BoardWrite.types";
import DaumPostcodeEmbed from 'react-daum-postcode';
import { Modal } from "antd";

export const Wrapper = styled.div`
  width: 1000px;
  /* height: 1847px; */
  margin: 50px auto;
  padding: 100px;
  display: flex;  
  flex-direction: column;
  align-items: center;
  /* border: 7px solid #2B3856; */
  /* box-shadow: 0px 0px 10px gray; */
  background-color: white;
  color: #2B3856;
  font-family: "Jua";

`;

export const Title = styled.div`
  font-family: "Jua";
  font-size: 55px;
  font-weight: bold;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;

export const Writer = styled.input`
  width: 388px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  margin-right: 22px;
  background-color: #eee;
`;

export const Password = styled.input`
  width: 388px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  background-color: #eee;

`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
`;

export const Subject = styled.input`
  width: 800px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  background-color: #eee;

`;

export const Contents = styled.textarea`
  width: 800px;
  height: 400px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
  background-color: #eee;

`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  float: left;

`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  background-color: #eee;

`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: #2B3856;

  cursor: pointer;
  color: white;
`;

export const Address = styled.input`
  width: 800px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  background-color: #eee;
`;

export const Youtube = styled.input`
  width: 800px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const ImageWrapper = styled.div`
  width: 800px;
  padding-top: 40px;
`;

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const OptionWrapper = styled.div`
  width: 800px;
  padding-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 60px;
`;

export const CancelButton = styled.button`
  width: 140px;
  height: 50px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 50px ;
  border: none;
  font-family: "Jua";
  background-color: #bdbdbd;
  color: #2B3856;
  margin-left: 15px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 140px;
  height: 50px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 50px ;
  border: none;
  margin-right: 15px;

  font-family: "Jua";

  background-color: #2B3856;
  color: ${(props: ISubmitButtonProps) => 
  props.isActive ? "#FFEFD5" : "white;"};
`

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: tomato;
  font-family: none;
`;






export const AddressModal = styled(Modal)`
`;

export const AddressSearchInput = styled(DaumPostcodeEmbed)`
`;
