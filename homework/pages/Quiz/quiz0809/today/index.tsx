// # 2-2. 오늘 본 상품 나타내기

import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getDate } from "../../../src/commons/libraries/utils";
import { IBoard } from "../../../src/commons/types/generated/types";

// 1. /pages/quiz06/today/index.tsx 페이지를 만들고 fetchBoards 게시물 목록을 불러와 주세요.
// 2. 각 행을 클릭하면 클릭된 데이터를 로컬 스토리지에 저장해 보세요.
// ⇒ 단, 클릭된 날짜와 시간을 "YYYY-MM-DD" 형태의 키로 저장해야 합니다.
// 3. 로컬 스토리지에 저장된 데이터 중, 오늘 날짜에 해당하는 데이터만 뽑아서 페이지 우측에 나타내 보세요.




const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            _id
            writer
            title
            contents
            createdAt
        }
    }
`


const TableTop = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #2B3856;
  color: white;
  font-size: 20px;
  font-family: "Jua";
  width: 700px;
  text-align: center;
  height: 40px;
  line-height: 40px;

`;
const Row = styled.div`
    display: flex;
    border: 1px solid #2B3856;
    height: 40px;
    line-height: 40px;
    width: 700px;
    background-color: white;
  font-family: "Jua";
`

const Column = styled.div`
padding: 0 20px;
text-align: center;
cursor: pointer;
`
const Button = styled.div`
    background-color: white;
    width: 200px;
    height: 50px;
    text-align: center;
    line-height: 45px;
    font-family: "Jua";
    font-size: 20px;
    margin-top: 20px;
    background-color: #2B3856;
    border: 5px solid #2B3856;
    color: white;
    :hover{
    cursor: pointer;
    border: 5px solid #2B3856;
    background-color: white;
    color: #2B3856;
}
`


export default function LocalStoragePage(){

    const { data } = useQuery(FETCH_BOARDS)
    // const [baskets, setBaskets] = useState([]);
    const date = new Date();
    const [basketItems, setBasketItems] = useState([]);

    useEffect(() => {
      
      const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
      setBasketItems(baskets);
      }, []);


    // 클릭하면 날짜를! 로컬스토리지에 저장

    const onClickSaveLocal = (basket) => () => {
        console.log(basket)
        console.log(getDate(date));

        // const baskets = JSON.parse(localStorage.getItem(getDate(date)) || "[]");
        // console.log(baskets)

    //     const baskets: Pick<IBoard, "contents" | "title" | "_id" | "writer" | "createdAt">[] =
    //     JSON.parse(localStorage.getItem("baskets") || "[]");
  
    //     const temp = baskets.filter((el) => el._id === basket._id);
    //     if (temp.length === 1) {
    //   alert("이미 담은 물품입니다."); return;
    // }
      
        // const { ...newBasket } = basket;
        // baskets.push(newBasket);
        // localStorage.setItem(getDate(date), JSON.stringify(baskets));

    };


    // const onClickLoadLocal = (baskets: any) => {
    // const items =  JSON.parse(localStorage.getItem("baskets") || "[]");
  
    // console.log(items);
    // };

    
    return (
        <>
        <div style={{padding: "40px"}}>
        <h1 style={{marginBottom:"20px", textAlign:"center", color:"#2B3856", }}>  비회원 장바구니 담기 </h1>


        <TableTop>
        <div style={{width:"40%"}}>작성일</div>
        <div style={{width:"30%"}}>작성자</div>
        <div style={{width:"30%"}}>제목</div>

        </TableTop>


        {basketItems.map((el) => (
          <Row key={el._id}>
            <Column onClick={onClickSaveLocal(el)} style={{width:"40%"}}>
                {el._id}
            </Column>
            <Column onClick={onClickSaveLocal(el)} style={{width:"30%"}}>
                {el.writer}
            </Column>
            <Column onClick={onClickSaveLocal(el)} style={{width:"30%"}}>
                {el.title}
            </Column>
           

          </Row>
        ))}

        <br /><br />
        <h3>Today</h3>

        {/* <button onClick={onClickLoadLocal}>로컬 조회</button> */}
        
        <div>
        {basketItems.map((el) => (
          <Row key={el._id}>
            <Column>{getDate(date)}</Column>
            <Column>{el.title}</Column>
          </Row>
        ))}
      </div>



        </div>
        </>
    )
}