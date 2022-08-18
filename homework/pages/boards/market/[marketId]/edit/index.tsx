import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchUseditemArgs } from "../../../../../src/commons/types/generated/types";

export const FETCH_USEDITEM= gql`
query fetchUseditem($useditemId: ID!) {
  fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
    }
  }
`


export default function BoardsEditPage() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchUseditm">, 
  IQueryFetchUseditemArgs> 
  (FETCH_USEDITEM, { variables: { boardId: String(router.query.boardId) },
  });

  return <MarketWrite isEdit={true} data={data} />;
}
