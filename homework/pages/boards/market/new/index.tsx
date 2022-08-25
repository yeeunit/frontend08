// 등록하기

import { useState } from "react";
import { withAuth } from "../../../../src/components/commons/example/hoc/withAuth";
import MarketWrite from "../../../../src/components/units/market/write/MarketWrite.container";

function MarketWritePage() {
  const [isEdit, setEdit] = useState(false);
  return <MarketWrite isEdit={isEdit} />;
}

export default withAuth(MarketWritePage);
