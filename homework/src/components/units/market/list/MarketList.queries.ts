import { gql } from "@apollo/client";

export const FETCH_USEDITEMS = gql`
query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
  fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page ) {
      _id
      name
      remarks
      contents
      price
      images
    }
  }
`

export const FETCH_BOARDS_COUNT = gql`
    query fetchBoardsCount($search: String){
        fetchBoardsCount(search: $search)
    }
`