import { gql } from '@apollo/client'

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput){
      _id
      writer
      title
      contents
      youtubeUrl
      dislikeCount
      images
      createdAt
      updatedAt
      deletedAt
    }
  }
`


export const UPDATE_BOARD = gql`
  mutation updateBoard($boardId: ID!, $password: String, $updateBoardInput: UpdateBoardInput!) {
    updateBoard(boardId: $boardId, password: $password, updateBoardInput: $updateBoardInput) {
      _id
    }
  }
`