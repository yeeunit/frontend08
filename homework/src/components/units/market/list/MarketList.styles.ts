import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1000px;
  margin: 50px auto;
  background-color: white;
 
  /* border-top: 30px solid #2B3856; */
`;

export const PreviewWrapper = styled.div`
  width: 1000px;
  height: 250px;
  /* border: 2px solid navy; */
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin: 20px 0;
  background-color: #eee;
`
export const PreviewItem = styled.div`
  width: 200px;
  height: 220px;
  background-color: #ddd;
  /* border: 2px solid navy; */

`
export const ListBar = styled.div`
  width: 1000px;
  height: 60px;
  background-color: #eee;
  padding: 10px;
  /* border: 2px solid navy; */
  display: flex;
  flex-direction: row;

`

export const SearchBtn = styled.div`
  height: 40px;
  width: 60px;
  color: white;
  background-color: #bbb;
  padding:15px;
`

export const Line = styled.div`
  height: 2px;
  width: 1000px;
  border: 1px solid #ccc;
  margin: 20px 0;

`
export const ContentsWrapper = styled.div`
  width: 1000px;
  /* border: 1px solid navy; */
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  background-color: #bbb;
  padding: 10px;

  :hover{cursor: pointer;}

`
export const ImgBox = styled.div`
  width: 160px;
  height: 180px;
  /* border: 1px solid navy; */
  background-color: #ccc;
`
export const Img = styled.img`
 width: 160px;
  height: 180px;

`

export const DetailsWrap = styled.div`
  width: 600px;
  height: 180px;
  padding: 10px;
  background-color: #ddd;

  /* border: 1px solid navy; */
`
export const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
`

export const PriceWrap = styled.div`
  width: 180px;
  height: 180px;
  /* border: 1px solid navy; */
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 180px;
  background-color: #eee;

`


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


export const ColumnBasic = styled.div`
  width: 20%;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

`;

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
  background-color: #2B3856;
  color:  white;
  font-family: "Jua";
  font-size: 16px;
  border: none;
  text-align: center;
  line-height: 40px;

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
