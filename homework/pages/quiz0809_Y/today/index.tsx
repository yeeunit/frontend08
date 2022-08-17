import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IBoard, IQuery } from "../../../../src/commons/types/generated/types";
import { getDate } from "../../../../src/commons/libraries/utils";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function todayPage() {
  const date = new Date();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARDS);
  console.log(data);

  const onClickDate = (data: IBoard) => () => {
    console.log(data);
    const todays: Pick<IBoard, "contents" | "title" | "_id" | "writer">[] =
      JSON.parse(localStorage.getItem(getDate(date)) || "[]");

    const { __typename, ...rest } = data;
    todays.push(rest);
    localStorage.setItem(getDate(date), JSON.stringify(todays));
    alert("등록 완료.");
  };

  const [todays, setTodays] = useState<IBoard[]>([]);

  useEffect(() => {
    const todays = JSON.parse(localStorage.getItem(getDate(date)) || "[]");
    setTodays(todays);
  }, []);

  return (
    <>
      <div>
        {data?.fetchBoards.map((el) => (
          <Row onClick={onClickDate(el)} key={el._id}>
            <Column>{el.writer}</Column>
            <Column>{el.title}</Column>
            <Column>{el.contents}</Column>
          </Row>
        ))}
      </div>
      <div>
        {todays.map((el) => (
          <Row key={el._id}>
            <Column>{el.writer}</Column>
            <Column>{el.title}</Column>
            <Column>{el.contents}</Column>
          </Row>
        ))}
      </div>
    </>
  );
}
