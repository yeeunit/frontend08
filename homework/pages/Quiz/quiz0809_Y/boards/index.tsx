import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { IQuery } from "../../../../src/commons/types/generated/types";
import Button from "../button";

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

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function BasketPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARDS);

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column>{el.contents}</Column>
          <Button el={el} />
        </Row>
      ))}
    </div>
  );
}
