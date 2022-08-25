import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../../src/commons/types/generated/types";
import { withAuth } from "../../../../../src/components/commons/example/hoc/withAuth";
import MarketWrite from "../../../../../src/components/units/market/write/MarketWrite.container";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      useditemAddress {
        zipcode
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

function EditPage() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: {
      useditemId: router.query._id as string,
    },
  });

  return <MarketWrite isEdit={true} data={data} />;
}

export default withAuth(EditPage);
