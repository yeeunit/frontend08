import { useQuery } from "@apollo/client";
import { IQuery, IUseditem } from "../../../commons/types/generated/types";
import BasketUI from "./Basket.presenter";
import { FETCH_USEDITEMS } from "./Basket.queries";

export default function BasketPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_USEDITEMS);

  const onClickBasket = (basket) => () => {
    console.log(basket);

    // 1. 기존 장바구니 가져오기
    const baskets: Pick<IUseditem, "name" | "_id" | "contents">[] = JSON.parse(
      localStorage.getItem("baskets") || "[]"
    );

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다!!!");
      return;
    }

    // 3. 해당 장바구니에 담기
    const { __typename, ...newBasket } = basket;
    baskets.push(newBasket);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  return <BasketUI onClickBasket={onClickBasket} />;
}
