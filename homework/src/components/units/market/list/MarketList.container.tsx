import MarketListUI from "./MarketList.presenter"
import { useQuery } from "@apollo/client"
import _ from "lodash"
import { 
  IQuery, 
  IQueryFetchUseditemsArgs} from "../../../../commons/types/generated/types"
import { FETCH_USEDITEMS } from "./MarketList.queries"
import { useRouter } from "next/router"
import { MouseEvent } from "react"


export default function MarketList(){

    // const [keyword, setKeyword] = useState("")
    const router = useRouter();

    const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">, 
    IQueryFetchUseditemsArgs>(FETCH_USEDITEMS);
   
    const onClickMoveToMarketDetail = (event: MouseEvent<HTMLDivElement>) => {
      if (!(event.target instanceof HTMLDivElement)) return;
      router.push(`/boards/market/${event.currentTarget.id}`);
      console.log(event.currentTarget.id)
    };
  

  return(

    <MarketListUI
    data = {data}

    refetch = {refetch}
    onClickMoveToMarketDetail = {onClickMoveToMarketDetail}
    // keyword = {keyword}
    />
  )

}