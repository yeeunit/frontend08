import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1000px;
  margin: 50px auto;
  background-color: white;
  /* border-top: 30px solid #2B3856; */
`;

export const Table = styled.div`
  width: 900px;
  margin: 40px auto;
  background-color: white;
`;


export const TableTop = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  background-color: #2B3856;
  color: white;
  font-size: 20px;
  font-family: "Jua";
`;

export const TableBottom = styled.div`
  border-bottom: 30px solid navy;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color:  #2B3856;
    font-weight: 600;
    background-color: #f5f2fc;


  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 20%;
  text-align: center;
  
`;

// export const ColumnHeaderTitle = styled.div`
//   width: 20%;
//   text-align: center;
// `;

export const ColumnBasic = styled.div`
  width: 20%;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  

`;

// export const ColumnTitle = styled.div`
//   width: 30%;
//   text-align: center;
//   text-overflow: ellipsis;
//   overflow: hidden;
//   white-space: nowrap;  
//   padding-right:20px;
  
// `;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 40px;
  height: 100px;
  width: 800px;
`;

export const Button = styled.div`
  width: 110px;
  height: 40px;
  background-color: white;
  color:  #2B3856;
  font-family: "Jua";
  font-size: 16px;
  border: none;
  text-align: center;
  line-height: 40px;
    /* border-radius: 35px; */

  cursor: pointer;
  :hover {
    color : #f5f2fc;
    background-color: #2B3856;
  }

`

export const Search = styled.div`
    font-size: 20px;
    /* background-color: pink; */
    `
