import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

import{ 
    Wrapper,
    Header,
    ProfilePhoto,
    Writer,
    Date,
    Title,
    Bodywrap,
    Images,
    Contents,
    Youtube,
    Footer,
    Like,
    Dislike,
    LinkLocation


    } from "../../../styles/emotion2"



const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId: $boardId){
            _id
            writer
            title
            contents
            youtubeUrl
            likeCount
            dislikeCount
            images
            createdAt
            updatedAt
            deletedAt
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
    <Wrapper>
        <Header>
            <ProfilePhoto>
                <img src="../profile.png" alt='사진'/>
            </ProfilePhoto>
            <Writer> 작성자 : 
                {data ? data.fetchBoard.writer: "받아오는 중입니다."}
            </Writer>
            <Date>
                게시일 : 
                {data ? data.fetchBoard.createdAt: "받아오는 중입니다."}

            </Date>
            <LinkLocation>
            </LinkLocation>

        </Header>

        <Bodywrap>
            <Title>
             제목 : {data ? data.fetchBoard.title : "받아오는 중입니다."}
            </Title>

                <Images> 
                <div> 사진 
                </div>

                </Images>

                <Contents>
                내용 : <br/>
                {data ? data.fetchBoard.contents : "받아오는 중입니다."}
                </Contents>

                <Youtube>
                Youtube
                <video url="{data.fetchBoard.youtubeUrl}"> </video> 
                </Youtube>

            </Bodywrap>

            <Footer>
                <Like>
                    <img src="../like.png" alt='사진'/><br/>
                    {data ? data.fetchBoard.likeCount: "받아오는 중입니다."}
                </Like>
                <Dislike>
                    <img src="../dislike.png" alt='사진'/><br/>
                    {data ? data.fetchBoard.dislikeCount: "받아오는 중입니다."}

                </Dislike>
            </Footer>



        {/* <div> _id : {data ? data.fetchBoard._id : "받아오는 중입니다."}</div> */}
        {/* <div> writer : {data ? data.fetchBoard.writer: "받아오는 중입니다."}</div> */}
        {/* <div> title : {data ? data.fetchBoard.title : "받아오는 중입니다."}</div> */}
        {/* <div> Images : {data ? data.fetchBoard.images : "받아오는 중입니다."}</div> */}
        
    </Wrapper>
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