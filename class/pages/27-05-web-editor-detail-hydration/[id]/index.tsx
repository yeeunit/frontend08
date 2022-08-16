import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import Dompurify from 'dompurify'

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

    const { data } = useQuery(FETCH_BOARD, { 
        variables: { boardId: router.query.id } 
    })

    console.log(data)

    return (
        <>
            <div style={{color:"red"}}>작성자: {data &&  data.fetchBoard.writer}</div>
            <div style={{color:"green"}}>제목: {data && data.fetchBoard.title}</div>
            {/* <div>내용: {data?.fetchBoard.contents}</div> */}
            {typeof window !== "undefined" && (

            <div 
            style={{color:"blue"}}
            dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(data?.fetchBoard.contents),
            }}
            ></div>
            ) : (
                <div style={{color:"blue"}} />    
            )}
            <div  style={{color:"brown"}}>주소</div>
        </>
    )
}

// playground XSS 공격
// <img src='#' onerror='console.log(localStorage.getItem(\"accessToken\"))' />
