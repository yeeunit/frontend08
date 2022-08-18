// 8. 이동된 페이지에서 로컬스토리지에 저장된 데이터를 목록 형태로 화면에 나타내 보세요.


import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IBoard } from "../../../src/commons/types/generated/types"


const TableTop = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #2B3856;
  color: white;
  font-size: 20px;
  font-family: "Jua";
  width: 800px;
  text-align: center;
  height: 40px;
  line-height: 40px;

`;

const Row = styled.div`
  display: flex;
  background-color: white;
  width: 800px;
  border: 2px solid #2B3856;
  text-align: center;

`;

const Column = styled.div`
  margin: 10px;
  `;




export default function StaticRoutedPage() {
  const [baskets, setBaskets] = useState<IBoard[]>([]);


  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBaskets(result);
  }, []);

  
  return (
    <div style={{padding: "40px"}}>
    <h1 style={{marginBottom:"20px", textAlign:"center", color:"#2B3856", }}>로컬스토리지에 저장된 데이터 목록 조회하기</h1>
    
    <TableTop>
    <div style={{width:"50%"}}>아이디</div>
    <div style={{width:"20%"}}>작성자</div>
    <div style={{width:"30%"}}>제목</div>
    </TableTop>



      {baskets.map((el) => (
        <Row key={el._id}>
          <Column style={{width:"50%"}}>{el._id}</Column>
          <Column style={{width:"20%"}}>{el.writer}</Column>
          <Column style={{width:"30%"}}>{el.title}</Column>
        </Row>
      ))}

    </div>
  );
}
