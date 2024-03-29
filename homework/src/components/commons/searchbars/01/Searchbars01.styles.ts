import { FireFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Searchbar = styled.div`
  width: 300px;
  height: 50px;
  border-radius: 15px;
  background-color: #eee;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FireFilledIcon = styled(FireFilled)`
  color: #5729ff;
  font-size: 30px;
  cursor: pointer;

  :hover {
    color: red;
  }
`;

export const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  margin: 0px 20px;
`;
