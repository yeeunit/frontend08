import { gql } from "@apollo/client";

export const FETCH_USEDITEM = gql`

query fetchUseditem($useditemId: ID!) {
  fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
    }
  }
`

export const FETCH_BOARD = gql`
query fetchBoard($boardId: ID!){
    fetchBoard(boardId: $boardId){
        _id
        writer
        title
        contents
        createdAt
        youtubeUrl
        images
        likeCount
        dislikeCount
        boardAddress {
            zipcode
            address
            addressDetail
            }
      createdAt
    }
}
`

export const DELETE_BOARD = gql`
    mutation deleteBoard($boardId: ID!){
        deleteBoard(boardId: $boardId)
    }
`

export const LIKE_BOARD = gql`
    mutation likeBoard($boardId: ID!) {
        likeBoard(boardId: $boardId)
    }
`

export const DISLIKE_BOARD = gql`
    mutation dislikeBoard($boardId: ID!) {
        dislikeBoard(boardId: $boardId)
    }
`