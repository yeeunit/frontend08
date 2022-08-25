// 상세페이지

import { withAuth } from "../../../../src/components/commons/example/hoc/withAuth";
import MarketDetail from "../../../../src/components/units/market/detaill/MarketDetail.container";

function MarketDetailPage() {
  return <MarketDetail />;
}

export default withAuth(MarketDetailPage);
