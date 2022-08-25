import MarketListUI from "./MarketList.presenter";
import { useQuery } from "@apollo/client";
import _ from "lodash";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USEDITEMS } from "./MarketList.queries";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { isWatchActiveState } from "../../../../commons/store";

export default function MarketList() {
  // const [keyword, setKeyword] = useState("")
  const router = useRouter();

  const [isActive, setIsActive] = useRecoilState(isWatchActiveState);

  // const { data, refetch } = useQuery<
  //   Pick<IQuery, "fetchUseditems">,
  //   IQueryFetchUseditemsArgs
  // >(FETCH_USEDITEMS);

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS);

  const onFetchMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  const onClickMoveToMarketDetail = (el: any) => () => {
    router.push(`/boards/market/${el._id}`);
    const watchList = JSON.parse(sessionStorage.getItem("watchList") || "[]");

    const temp = watchList.filter((data: any) => data._id === el._id);
    if (temp.length === 1) {
      return;
    }
    setIsActive((prev) => !prev);
    const { __typename, ...newWatchList } = el;
    watchList.push(newWatchList);
    sessionStorage.setItem("watchList", JSON.stringify(watchList));
  };

  return (
    <MarketListUI
      data={data}
      onFetchMore={onFetchMore}
      onClickMoveToMarketDetail={onClickMoveToMarketDetail}
      // keyword = {keyword}
    />
  );
}
