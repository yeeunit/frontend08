import { FireFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Searchbar = styled.div`
  width: 300px;
  height: 40px;
  border-radius: 5px;
  background-color: #ddd;
  padding: 0px 10px;
  display: flex;
  flex-direction: row;
  /* border: 1px solid navy; */

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
