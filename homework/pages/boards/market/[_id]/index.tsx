// 상세페이지

import { withAuth } from "../../../../src/components/commons/example/hoc/withAuth";
import Detail from "../../../../src/components/units/market/detaill/MarketDetail.container";

function MarketDetailPage() {
  return <Detail />;
}

export default withAuth(MarketDetailPage);
