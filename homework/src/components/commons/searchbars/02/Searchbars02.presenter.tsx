import {
  Searchbar,
  SearchbarInput,
} from "./Searchbars02.styles";
import { ISearchbars02UIProps } from "./Searchbars02.types";

export default function Searchbars01UI(props: ISearchbars02UIProps) {
  return (
    <Searchbar>
      {/* <FireFilledIcon /> */}
      <SearchbarInput
        placeholder="제품을 검색해 주세요."
        onChange={props.onChangeSearchbar}
      />
    </Searchbar>
  );
}
