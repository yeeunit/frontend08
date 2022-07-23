import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards {
    # (
    #     $endDate: DateTime
    #     $startDate: DateTime
    #     $search: String
    #     $page: Int)
        # fetchBoard{(
        #     endDate: $endDate
        #     startDate: $startDate
        #     search: $search
        #     page: $page
        # )
        
        _id
        writer
        title
        contents
        } 
    }
`