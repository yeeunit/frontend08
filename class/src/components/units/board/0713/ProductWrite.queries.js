
import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
        createProduct(seller: $seller, createProductInput: $createProductInput){
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