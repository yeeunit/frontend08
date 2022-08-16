import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`

query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      createdAt
    }
  }

    # query fetchBoards {
    #     fetchBoards {
    # # (
    # #     $endDate: DateTime
    # #     $startDate: DateTime
    # #     $search: String
    # #     $page: Int)
    #     # fetchBoard{(
    #     #     endDate: $endDate
    #     #     startDate: $startDate
    #     #     search: $search
    #     #     page: $page
    #     # )
        
    #     _id
    #     writer
    #     title
    #     contents
    #     createdAt
    #     } 
    # }
`

export const FETCH_BOARDS_COUNT = gql`
    query fetchBoardsCount($search: String){
        fetchBoardsCount(search: $search)
    }
`