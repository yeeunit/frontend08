import { useQuery } from "@apollo/client";
import { useRouter } from "next/router"
import { IQuery, IQueryFetchUseditemArgs } from "../../../../commons/types/generated/types";
import MarketDetailUI from "./MarketDetail.presenter";
import { FETCH_USEDITEM } from "./MarketDetail.queries";



export default function MarketDetail(){

    const router = useRouter()

    
    const { data } = useQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(FETCH_USEDITEM, {
      variables: {useditemId: String(router.query.useditemId)}
    })


  return(

    <MarketDetailUI
    data = {data}
    />
  )

}