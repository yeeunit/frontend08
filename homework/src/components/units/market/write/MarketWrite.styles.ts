import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./MarketWrite.types";
import DaumPostcodeEmbed from 'react-daum-postcode';
import { Modal } from "antd";

export const Wrapper = styled.div`
  width: 1000px;
  /* height: 1847px; */
  margin: 50px auto;
  padding: 100px;
  display: flex;  
  flex-direction: column;
  /* border: 7px solid #2B3856; */
  /* box-shadow: 0px 0px 10px gray; */
  background-color: white;
  color: #2B3856;
  font-family: "Jua";
  border: #2B3856 1px solid;
`;

export const Title = styled.div`
  font-family: "Jua";
  font-size: 55px;
  font-weight: bold;
  margin: 10px;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
  margin: 10px;

`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  padding: 10px;
  margin: 20px;


`;

export const Label = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin: 10px;

`;

export const Input = styled.input`
  width: 770px;
  height: 50px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  background-color: #eee;
  margin: 10px;

`;

// export const Reactquill = styled(Reactquill)`
//   width:700px;

// `

export const Contents = styled.textarea`
  width: 800px;
  height: 480px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
  background-color: #eee;

`;

export const MapWrapper = styled.div`
  width: 800px;
  /* border: 1px solid #bdbdbd; */
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-bottom: 20px;

`;


export const KakaoMap = styled.div`
  width: 400px;
  /* border: 1px solid #bdbdbd; */
  display: flex;
  flex-direction: column;
`;


export const AddressWrapper = styled.div`
  width: 400px;
  padding: 10px;
  /* border: 1px solid #bdbdbd; */
  display: flex;
  flex-direction: column;

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
  /* border: 1px solid #bdbdbd; */
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
  width: 300px;
  height: 50px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  background-color: #eee;
`;


export const LAT_LNG = styled.input`
  width: 200px;
  height: 50px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  background-color: #eee;
`;


export const ImageWrapper = styled.div`
  width: 800px;
  padding-right:500px;
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;

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


export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
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
