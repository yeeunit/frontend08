
import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
    }
}
`














// export default function BoardWriteUI(props){

//     return (
//         <>
//             작성자: <input type="text" onChange={props.bbb} /><br />
//             제목: <input type="text" onChange={props.ccc} /><br />
//             내용: <input type="text" onChange={props.ddd} /><br />
//             <button onClick={props.aaa}>GRAPHQL-API 요청하기!!!</button>

//             {/* <button onClick={onClickGraphqlApi}>GRAPHQL-API 요청하기!!!</button> */}

//         </>
//     )
// }