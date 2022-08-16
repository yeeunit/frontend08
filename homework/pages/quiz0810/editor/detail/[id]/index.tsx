// 4. 이동된 페이 지에서는 router의 id를 이용하여 게시물 데이터를 불러와서 화면에 출력해 주세요.
// 5. 출력된 데이터 중, contents 부분은 태그를 포함하고 있으므로, dangerousIySetInnerHTML 속성을 사용하여 나타내 주세요.

import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "../../../../../src/components/units/board/detail/BoardDetail.queries";


const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId){
            _id
            writer
            title
            contents
        }
    }
`


export default function StaticRoutedPage(){

const router = useRouter();

const {data} = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id }
})

console.log(data)


return(
    <>
   
    <div style={{width: "500px", height: "500px", background: "white", textAlign:"left", padding:"30px", border:"5px solid black"}}>
    <h2>8/10(수) 오늘의 퀴즈입니다</h2> <br /><hr /><br />

        <div> 👉 작성자 : {data ? data.fetchBoard.writer : "받아오는 중입니다."}</div>

        <div> 👉 제목 : {data && data.fetchBoard.title} </div>

        👉 내용 : 
        <div style={{width: "350px",  background: "#eee", margin:"30px", padding:"30px"}}
        dangerouslySetInnerHTML={{ __html: data?.fetchBoard.contents }}
        >
        </div>

    </div>
    </>
)

}