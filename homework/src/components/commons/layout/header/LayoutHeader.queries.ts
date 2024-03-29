import { gql } from "@apollo/client";

export const LOGOUT_USER = gql`
    mutation logoutUser {
        logoutUser
    }
`;

export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
    mutation createPointTransactionOfLoading($impUid: ID!) {
        createPointTransactionOfLoading(impUid: $impUid) {
            _id
            impUid
            amount
            status
            statusDetail
        }
    }
`

export const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn {
        fetchUserLoggedIn {
            _id
            email
            name
            userPoint {
                _id
                amount
            }
        }
    }
`