import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
    mutation deleteBoard($boardId: ID!){
        deleteBoard(boardId: $boardId)
    }
`

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput){
      _id
      writer
      title
      contents
    }
  }
`


const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;


export default function StaticRoutedPage() {
    const { data } = useQuery(FETCH_BOARDS);
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const [createBoard] = useMutation(CREATE_BOARD)


  const onClickDelete = (boardId: string) => () => {
    deleteBoard({
        variables:{ boardId },
        // refetchQueries: [{query: FETCH_BOARDS }],
        update(cache, {data}){
            // result.data.deleteBoard
            cache.modify({
                fields:{
                    fetchBoards: (prev, {readField}) => {
                        const deletedId = data.createBoard // 삭제된 ID
                        const filteredPrev = prev.filter(
                            (el) => readField("_id", el) !== deletedId // el._id가 안되므로 (__ref밖에없음) readFiled를 사용해서 꺼내오기
                            )
                        return[...filteredPrev]
                    }
                }
            })
        }
    })
}

    const onClickCreate = () => {
        createBoard({
            variables: {
                createBoardInput: {
                    writer: "영희",
                    password: "1234",
                    title: "제목입니다",
                    contents: "내용입니다"
                }
            },
            // refetchQueries: [{ query: FETCH_BOARDS}],
            update(cache, {data}){
                cache.modify({
                    fields: {
                        fetchBoards: (prev) => {

                           
                        }
                    }
                })
            }
        })
    }

    console.log(data)
  return (
    <>

      {data?.fetchBoards.map(el => (
        <Row key={el._id}>
          <Column>{el._id}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.contents}</Column>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </Row>
      ))}
      <button onClick={onClickCreate}>등록하기</button>
    </>
  );
}
