import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchUseditemArgs } from "../../../../../src/commons/types/generated/types";
import MarketWrite from "../../../../../src/components/units/market/write/MarketWrite.container";

export const FETCH_USEDITEM= gql`
query fetchUseditem($useditemId: ID!) {
  fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      tags
      createdAt
    }
  }
`


export default function BoardsEditPage() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchUseditem">, 
  IQueryFetchUseditemArgs> 
  (FETCH_USEDITEM, { variables: { useditemId: String(router.query.useditemId) },
  });

  return <MarketWrite data={data}/>;
}
