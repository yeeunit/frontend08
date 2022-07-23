import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1000px;
  margin: 100px;
`;

export const TableTop = styled.div`
  border-top: 3px solid navy;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 3px solid navy;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid purple;

  :hover {
    color: purple;
    font-weight: 600;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
  color: tomato;
  font-weight: 500;
  font-size: 20px;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
  color: tomato;
  font-weight: 500;
  font-size: 20px;

`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;
