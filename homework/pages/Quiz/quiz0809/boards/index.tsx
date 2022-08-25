// # 2-1. 비회원 장바구니 담기(+ 로그인과 연동)

// 1. /pages/quiz06/boards/index.tsx 페이지를 만들고 fetchBoards 게시물 목록을 불러와 주세요.
// 2. 각 행의 오른쪽 마지막 부분에 [ 게시물담기 ] 버튼을 만들어 주세요.
// 3. [ 게시물담기 ] 버튼이 눌린 데이터를 로컬스토리지에 객체 형태로 저장해 보세요.
// ⇒ 또한, [ 게시물담기 ] 버튼을 [ 담기취소 ] 버튼으로 변경해 주세요.
// 4. [ 담기취소 ] 버튼이 눌린 데이터를 로컬스토리지에서 제외해 보세요.

import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { IBoard, IQuery } from "../../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const TableTop = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #2b3856;
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
  border: 1px solid #2b3856;
  height: 40px;
  line-height: 40px;
  width: 700px;
  background-color: white;
  font-family: "Jua";
`;

const Column = styled.div`
  padding: 0 20px;
  text-align: center;
`;
const Button = styled.div`
  background-color: white;
  width: 200px;
  height: 50px;
  text-align: center;
  line-height: 45px;
  font-family: "Jua";
  font-size: 20px;
  margin-top: 20px;
  background-color: #2b3856;
  border: 5px solid #2b3856;
  color: white;
  :hover {
    cursor: pointer;
    border: 5px solid #2b3856;
    background-color: white;
    color: #2b3856;
  }
`;

export default function StaticRoutedPage() {
  // const [isEdit, setIsEdit] = useRecoilState(isEditState);

  // useEffect(() => {
  //   setIsEdit(true)
  // }, [])

  const [isEdit, setIsEdit] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARDS);

  const onClickBasket = (basket: IBoard) => () => {
    console.log(basket);

    // const onClickDelete = (basket: IBoard) => () => {

    //     console.log(basket);
    // }

    // 1. 기존 장바구니 가져오기
    const baskets: Pick<IBoard, "contents" | "title" | "_id" | "writer">[] =
      JSON.parse(localStorage.getItem("baskets") || "[]");

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length === 1) {
      setIsEdit(false);
      alert("이미 담으신 물품입니다!!!");
      return;
    }

    // 3. 해당 장바구니에 담기
    const { __typename, ...newBasket } = basket;
    baskets.push(newBasket);
    localStorage.setItem("baskets", JSON.stringify(baskets));

    // setIsEdit(true)
  };

  // const isActive = () => {
  //     isEdit((prev)=> {
  //         return !prev
  //     })
  // }

  // 장바구니 삭제
  const onClickDeleteBaskets = (baskets: IBoard) => {
    const baskets2: Pick<IBoard, "contents" | "title" | "_id" | "writer">[] =
      JSON.parse(localStorage.getItem("baskets") || "[]");

    const { __typename, ...deleteBasket } = baskets2;
    baskets.push(deleteBasket);
    localStorage.removeItem("baskets", JSON.stringify(baskets2));
    console.log(baskets2);
  };
  // // getitem으로 갖고온다음에
  // 그 배열에서 취소할려는 그거를 제거한다음에
  // 다시 새로운 배열을 set해주면 됩니당
  //     const { __typename, ...deleteBasket } = basket;
  //     baskets.push(deleteBasket);
  //     localStorage.setItem("baskets", JSON.stringify(baskets));
  //   };

  const router = useRouter();
  const onClickMove = () => {
    router.push("/quiz0809/main");
  };

  return (
    <>
      <div style={{ padding: "40px" }}>
        <h1
          style={{
            marginBottom: "20px",
            textAlign: "center",
            color: "#2B3856",
          }}
        >
          {" "}
          비회원 장바구니 담기{" "}
        </h1>

        <TableTop>
          <div style={{ width: "40%" }}>아이디</div>
          <div style={{ width: "20%" }}>작성자</div>
          <div style={{ width: "20%" }}>제목</div>
          <div style={{ width: "20%" }}>V</div>
        </TableTop>

        {data?.fetchBoards.map((el) => (
          <Row key={el._id}>
            <Column style={{ width: "40%" }}>{el._id}</Column>
            <Column style={{ width: "20%" }}>{el.writer}</Column>
            <Column style={{ width: "20%" }}>{el.title}</Column>
            {/* <button style={{width:"20%"}} 
            onClick={onClickBasket(el)} > */}

            <button
              style={{ width: "20%" }}
              onClick={isEdit ? onClickBasket(el) : onClickDeleteBaskets}
              // isActive={isEdit? true : isActive}
            >
              {isEdit ? "게시글 담기" : "담기취소"}
            </button>
          </Row>
        ))}

        <Button onClick={onClickMove}>장바구니 이동하기</Button>
      </div>
    </>
  );
}
