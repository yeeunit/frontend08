import { gql } from "@apollo/client";

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        zipcode
        address
        addressDetail
      }
      createdAt
      seller {
        email
        name
      }
    }
  }
`;

export const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
      name
      remarks
      contents
      price
    }
  }
`;

// export const CREATE_USED_ITEM_QUESTION = gql`
//   mutation createUseditemQuestion(
//     $createUseditemQuestionInput: CreateUseditemQuestionInput!
//     $useditemId: ID!
//   ) {
//     createUseditemQuestion(
//       createUseditemQuestionInput: $createUseditemQuestionInput
//       useditemId: $useditemId
//     ) {
//       _id
//       contents
//     }
//   }
// `;

// export const FETCH_USED_ITEM_QUESTION = gql`
//   query fetchUseditemQuestions($useditemId: ID!) {
//     fetchUseditemQuestions(useditemId: $useditemId) {
//       _id
//       contents
//       user {
//         _id
//         name
//       }
//       createdAt
//     }
//   }
// `;
