import { useState } from "react";
import { IBoard } from "../../../../src/commons/types/generated/types";

export default function Button(props: any) {
  const [isBasket, setIsBasket] = useState(false);

  const onClickBasket = (basket: IBoard) => () => {
    console.log(basket);
    const baskets: Pick<IBoard, "contents" | "title" | "_id" | "writer">[] =
      JSON.parse(localStorage.getItem("baskets") || "[]");
    const temp = baskets.filter((el) => el._id === basket._id);

    if (temp.length === 1) {
      const deletedBasket = baskets.filter((el) => el._id !== basket._id);
      localStorage.setItem("baskets", JSON.stringify(deletedBasket));
      alert("삭제 완료.");
      setIsBasket(false);
      return;
    }

    const { __typename, ...newBasket } = basket;
    baskets.push(newBasket);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    alert("등록 완료.");
    setIsBasket(true);
  };

  return (
    <button
      onClick={isBasket ? onClickBasket(props.el) : onClickBasket(props.el)}
    >
      {isBasket ? "담기 취소" : "게시물 담기"}
    </button>
  );
}
