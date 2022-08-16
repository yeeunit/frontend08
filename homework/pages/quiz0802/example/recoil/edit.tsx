// # 2-2. Recoil 적용하기
// 1. pages/example/recoil/new 페이지, board/example/recoil/edit 페이지, /src/commponents/unit/example/write 컴포넌트를 각각 만들어 줍니다.
// 2. new 페이지와 edit 페이지에서 write 컴포넌트를 불러와서 연결해 줍니다.
// 3. edit 페이지에서 write 컴포넌트를 불러올 때 props로 isEdit={true}를 넘겨줍니다.
// 4. write 컴포넌트에서는 props로 받은 isEdit으로 3항 연산자를 사용하여 "등록하기" 또는 "수정하기"를 화면에 보여줍니다. <h1 />태그를 사용하세요.
// 5. new 페이지에 접속하면 "등록하기", edit 페이지에 접속하면 "수정하기"가 나오는지 확인해 주세요.
// 6. edit 페이지에서 props로 넘겨주지 않고, RecoilRoot를 통해 넘겨주세요.
// 7. write 페이지에서 props로 받지 않고, useRecoilState를 통해 받아주세요.
// 8. new 페이지에 접속하면 "등록하기", edit 페이지에 접속하면 "수정하기"가 나오는지 확인해 주세요.


import { isEditState } from "../../../../src/commons/store";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import RecoilWriteUI from "../../../../src/components/units/example/write/RecoilWrite";


export default function RecoilEditPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true)
  }, [])


  return <RecoilWriteUI />  ;
}
