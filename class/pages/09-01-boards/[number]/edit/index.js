//수정하기 페이지
import { useRouter } from "next/router"
import { useQuery,gql } from "@apollo/client"
import BoardWrite from "../../../../src/components/units/board/09-write/BoardWrite.container"


const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            number
            writer
            title
            contents
        }
    }
`

export default function GraphqlMutationPage(props){
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number)}
    })
    return <BoardWrite isEdit={true} data={props.data}/>
}


//패치보드 후 프롭스로 보내기 