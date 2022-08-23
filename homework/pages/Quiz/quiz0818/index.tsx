// # 4-1. 옵티미스틱UI
// 1. fetchBoard API를 사용해 데이터를 불러오고, 좋아요 버튼을 만들어서 좋아요가 올라가도록 구현해 주세요.
// (좋아요 버튼을 누르면 fetchBoard를 refetch 합니다.)
// 2. 좋아요 버튼을 누를 때, 3G로 속도를 낮춰서 저사양 컴퓨터에서 성능을 확인해 보세요.
// 3. refetch를 삭제하고, optimistic-ui를 사용하여 좋아요 숫자를 올려주세요.
// 4. 다시 한 번 3G로 속도를 낮춰서 저사양 컴퓨터에서 성능을 확인해 보세요.


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


export default function OptimisticUiPage(){

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId : "62fde64303562900296b2f2e" },
    })

    const [likeBoard] = useMutation(LIKE_BOARD)
    
    const onClickLike = () => {
        likeBoard({
            variables: { boardId : "62fde64303562900296b2f2e" },

        refetchQueries: [{query: FETCH_BOARD, variables: { boardId : "62fde64303562900296b2f2e"} }],


    //    optimisticResponse: {
    //     // 좋아요가 없으면 0
    //     likeBoard: (data?.fetchBoard.likeCOunt || 0)+ 1,
    //    },
    //     update(cache, {data}){
    //         cache.writeQuery({
    //             query: FETCH_BOARD,
    //             variables: {boardId: "62fde64303562900296b2f2e"},
    //             data: {
    //                 fetchBoard: {
    //                     // 반드시 다음 두가지를 필수로 써줘야함
    //                     _id: "62fde64303562900296b2f2e",
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
        <br/><br/>
        <div>조아요  {data?.fetchBoard.likeCount}</div>
        <br/>
        <button onClick={onClickLike}>좋아요 올리기!</button>
        <br/><br/>
        </>
    )
}


// 