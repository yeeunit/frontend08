import { isEditState } from "../../../../commons/store";
import { useRecoilState } from "recoil";


export default function RecoilWriteUI() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  return <h1>{isEdit ? "수정하기" : "등록하기"}</h1>;
}
