import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
    mutation{
        createBoard(writer:"철수", title:"제목입니다~~", contents:"내용이에요!!!"){
            _id
            number
            message
        }
    }
`


export default function GraphqlMutationPage(){

    const [createBoard] = useMutation(CREATE_BOARD)

    //화살표함수

    const onClickGraphqlApi = async () => {
        const result = await createBoard()
        console.log(result)
        console.log(result.data.createBoard.message)


    }

    return (

        <button onClick={onClickGraphqlApi}>Graphql-API 요청하기!!!</button>

    )

}