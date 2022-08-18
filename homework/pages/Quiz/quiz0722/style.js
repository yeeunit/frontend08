import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 800px;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid gray;
  background-color: white;
`;

export const TableTop = styled.div`
  border-top: 4px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-top: 1px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid gray;

`;

export const Div = styled.div`

`

export const ColumnHeader = styled.div`
  width: 25%;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  border-bottom: 3px solid gray;

`;

export const ColumnBasic = styled.div`
  width: 25%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: purple;
    font-weight: 700;
  }
`;


