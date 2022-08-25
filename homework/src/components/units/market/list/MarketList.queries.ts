import { gql } from "@apollo/client";

export const FETCH_USEDITEMS = gql`
  query fetchUseditems($page: Int) {
    fetchUseditems(page: $page) {
      _id
      name
      price
      images
      createdAt
    }
  }
`;
// export const FETCH_USEDITEMS = gql`
// query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
//   fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page ) {
//       _id
//       name
//       remarks
//       contents
//       price
//       images
//       tags
//       # seller{
//       #   name
//       # }
//       createdAt
//       pickedCount
//     }
//   }
// `
