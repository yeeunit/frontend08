import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { getDate } from "../../../commons/libraries/utils";
import { IBoard } from "../../../commons/types/generated/types";
import BasketUI from "./Basket.presenter";
import { FETCH_BOARDS } from "./Basket.queries";



export default function StaticRoutedPage() {

  const [basketItems, setBasketItems] = useState<IBoard[]>([]);
  const { data } = useQuery(FETCH_BOARDS)


  useEffect(() => {
  
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
    }, []);
  
    
  const onClickSaveLocal = (basket) => () => {
      console.log(basket)
      console.log(getDate(date));}


  return (
    <BasketUI
    onClickSaveLocal ={onClickSaveLocal}
    />
  );
}



