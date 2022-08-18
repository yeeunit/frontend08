import { ChangeEvent } from "react";
import Searchbars02UI from "./Searchbars02.presenter";
import { ISearchbars02Props } from "./Searchbars02.types";
import _ from "lodash";

export default function Searchbars02(props: ISearchbars02Props) {
  const getDebounce = _.debounce((value: string) => {
    props.refetch({ search: value, page: 1 });
    // props.refetchBoardsCount({ search: value });
    props.onChangeKeyword(value);
  }, 200);

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  return <Searchbars02UI onChangeSearchbar={onChangeSearchbar} />;
}
