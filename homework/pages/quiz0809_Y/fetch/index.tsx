import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IBoard } from "../../../../src/commons/types/generated/types";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 1000px;
`;

const Column = styled.div`
  width: 25%;
`;

export default function StaticRoutedPage() {
  const [baskets, setBaskets] = useState<IBoard[]>([]);
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBaskets(baskets);
  }, []);
  return (
    <div>
      {baskets.map((el) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column>{el.contents}</Column>
        </Row>
      ))}
    </div>
  );
}
