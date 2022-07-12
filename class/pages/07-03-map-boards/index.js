//내꺼 오류 아래거 멘토

// import { useQuery, gql } from '@apollo/client'
// import styled from '@emotion/styled'


// const FETCH_BOARDS = gql`
//     query fetchBoards($number: Int){
//         fetchBoards{
//             number
//             writer
//             title
//             contents
//         }
//     }
// `

// const Row = styled.div`
//     display = flex;

// `
// //  flex-direction : row; //디폴트값 안써도 무방

// const Column = styled.div`
//     width: 25%;

// `

// export default function StaticRoutedPage(){
//     const { data } = useQuery(FETCH_BOARDS)
    
//     return (
//         <>
//             {data?.fetchBoards.map(el => (
//                 <Row>
//                     <Column><input type="checkbox" /></Column>
//                     <Column>{el.number}</Column>
//                     <Column>{el.writer}</Column>
//                     <Column>{el.title}</Column>
//                 </Row>
//             ))}
//         </>
//     )
// }



import { useQuery, gql } from '@apollo/client'
import styled from "@emotion/styled"

const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            number
            writer
            title
            contents
        }
    }
`

const Row = styled.div`
    display: flex;
`

const Column = styled.div`
    width: 25%;
`

export default function StaticRoutedPage(){
    const { data } = useQuery(FETCH_BOARDS)

    return (
        <>
            {data?.fetchBoards.map(el => (
                <Row>
                    <Column><input type="checkbox" /></Column>
                    <Column>{el.number}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.contents}</Column>
                </Row>
            ))}
        </>
    )
}
