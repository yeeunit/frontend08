import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1000px;
  margin: 100px auto;
`;

export const TableTop = styled.div`
  border-top: 3px solid #2B3856;
  border-bottom: 3px solid #2B3856;
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  background-color: #2B3856;
  color: white;
  font-weight: 500;
  font-size: 18px;
`;

export const TableBottom = styled.div`
  border-bottom: 3px solid navy;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: purple;
    font-weight: 600;
    background-color: #f5f2fc;

  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
  
`;

export const ColumnHeaderTitle = styled.div`
  width: 40%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 40%;
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
