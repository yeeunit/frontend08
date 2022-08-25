// import { gql } from "@apollo/client";

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

// export const DELETE_USED_ITEM_QUESTION = gql`
//   mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
//     deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
//   }
// `;

// export const UPDATE_USED_ITEM_QUESTION = gql`
//   mutation updateUseditemQuestion(
//     $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
//     $useditemQuestionId: ID!
//   ) {
//     updateUseditemQuestion(
//       updateUseditemQuestionInput: $updateUseditemQuestionInput
//       useditemQuestionId: $useditemQuestionId
//     ) {
//       _id
//       contents
//     }
//   }
// `;
