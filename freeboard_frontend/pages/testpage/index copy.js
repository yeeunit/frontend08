import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId: $boardId){
            _id
            writer
            title
            contents
        }
    }
`

export default function StaticRoutedPage(){
    
    const router = useRouter()
    console.log(router)
    console.log(router.query)
    console.log(router.query.No)
    
    const { data } = useQuery(FETCH_BOARD, {
        variables: { 
            boardId: router.query.No }
    } )
    
    console.log(data)

    return( 
    <>
        <div> _id : {data ? data.fetchBoard._id : "받아오는 중입니다."}</div>
        <br/><br/>
        <div> writer : {data ? data.fetchBoard.writer: "받아오는 중입니다."}</div>
        <br/><br/>
        <div> title : {data ? data.fetchBoard.title : "받아오는 중입니다."}</div>
        <br/><br/>
        <div> contents : {data ? data.fetchBoard.contents : "받아오는 중입니다."}</div>
        <br/><br/>
        <div> youtubeUrl : {data ? data.fetchBoard.youtubeUrl : "받아오는 중입니다."}</div>
        <br/><br/>
        <div> Images : {data ? data.fetchBoard.images : "받아오는 중입니다."}</div>
    </>
    )

}


// fetchBoard(
//     boardId: ID!
//     ): Board!
//     type Board {
//     _id: ID!
//     writer: String
//     title: String!
//     contents: String!
//     youtubeUrl: String
//     likeCount: Int!
//     dislikeCount: Int!
//     images: [String!]
//     boardAddress: BoardAddress
//     user: User
//     createdAt: DateTime!
//     updatedAt: DateTime!
//     deletedAt: DateTime
//     }