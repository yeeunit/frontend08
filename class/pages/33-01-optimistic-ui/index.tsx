import { gql, useMutation, useQuery } from "@apollo/client"

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId: $boardId){
            _id
            likeCount
        }
    }
`

const LIKE_BOARD = gql`
    mutation likeBoard($boardId: ID!){
        likeBoard(boardId: $boardId)
    }
`
const LOG_OUT = gql`
    mutation logoutUser{
        logoutUser
    }

`
export default function OptimisticUiPage(){

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId : "62fd212103562900296b2e2b" },
    })

    const [likeBoard] = useMutation(LIKE_BOARD)
    const [logOut] = useMutation(LOG_OUT)
    const onClickLogOut = async() => {
        await logOut()
    }
    const onClickLike = () => {
        likeBoard({
            variables: { boardId : "62fd212103562900296b2e2b" },
        refetchQueries: [{query: FETCH_BOARD, variables: { boardId : "62fd212103562900296b2e2b"} }],

       // 가짜로 받았다고 속이기
    //    optimisticResponse: {
    //     // 좋아요가 없으면 0
    //     likeBoard: (data?.fetchBoard.likeCOunt || 0)+ 1,
    //    },
    //     update(cache, {data}){
    //         cache.writeQuery({
    //             query: FETCH_BOARD,
    //             variables: {boardId: "62fd212103562900296b2e2b"},
    //             data: {
    //                 fetchBoard: {
    //                     // 반드시 다음 두가지를 필수로 써줘야함
    //                     _id: "62fd212103562900296b2e2b",
    //                     __typename: "Board",
    //                     // 17을 18로 강제로 바꿈
    //                     likeCount: data.likeBoard,
    //                 }
    //             }
    //         })
    //     }
    })
    }

    return(
        <>
        <div>현재 카운트(좋아요): {data?.fetchBoard.likeCount}</div>
        <button onClick={onClickLike}>좋아요 올리기!</button>
        <br/>
        <button onClick={onClickLogOut}>로그아웃</button>
        </>
    )
}


// 