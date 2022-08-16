// # 1-1. apollo-cache-state 직접 변경하기
// 1. fetchBoards 를 요청하여 게시물 목록을 불러와 주세요.
// 2. 불러온 목록을 보기 좋게 꾸며 주세요.
// 3. 같은 페이지에 작성자, 비밀번호, 제목, 내용 입력창을 만들고, 게시물 등록하기 버튼을 만들어 주세요.
// 4. 게시물 등록하기 버튼을 누를 경우, createBoard 뮤테이션을 요청해 주세요.
// 5. 등록된 data가 반영된 최신 목록을 보여주기 위해, refetchQueries를 사용해 보세요.
// 6. 이번에는 서버 부하 감소를 위해 refetchQueries를 사용하지 않고, 직접 apollo-state를 변경해 보세요.
// ⇒ 힌트: cache.modify를 사용합니다.
// 7. 게시물 목록의 각각의 행에 [X] 버튼을 추가해 주세요.
// 8. 해당 버튼을 누르면 deleteBoard 뮤테이션을 요청해 주세요.
// 9. 제거된 data가 반영된 최신 목록을 보여주기 위해, refetchQueries를 사용해 보세요.
// 10. 이번에는 서버 부하 감소를 위해 refetchQueries를 사용하지 않고, 직접 apollo-state를 변경해 보세요.


import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

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
  background-color: white;
  width: 800px;
  border: 1px solid navy;
`;

const Column = styled.div`
  width: 200px;
  margin: 10px;

`;


export default function StaticRoutedPage() {
    const { data } = useQuery(FETCH_BOARDS);
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const [createBoard] = useMutation(CREATE_BOARD)


    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

   
    const onChangeWriter = (event) => {
      setWriter(event.target.value);
    }
    const onChangePassword = (event) => {
      setPassword(event.target.value);
    }
    const onChangeTitle = (event) => {
      setTitle(event.target.value);
    }

    const onChangeContents = (event) => {
      setContents(event.target.value);
    }


  const onClickDelete = (boardId: string) => () => {
    deleteBoard({
        variables:{ boardId },
        // refetchQueries: [{query: FETCH_BOARDS }],
        update(cache, {data}){
            // result.data.deleteBoard
            cache.modify({
                fields:{
                    fetchBoards: (prev, {readField}) => {
                        const deletedId = data.deleteBoard 
                        const filteredPrev = prev.filter(
                            (el) => readField("_id", el) !== deletedId 
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
                    writer,
                    password,
                    title,
                    contents
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


  return (
    <>
    <div>

      

      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column style={{width:"50%"}} >{el._id}</Column>
          <Column style={{width:"20%"}}>{el.writer}</Column>
          <Column style={{width:"20%"}}>{el.contents}</Column>
          <button style={{width:"10%"}} onClick={onClickDelete(el._id)}>X</button>

        </Row>
      ))}

  </div>

    <div style={{margin:"20px", }} >
      작성자 : <input type="text" onChange={onChangeWriter} />

      비밀번호 : <input type="password" onChange={onChangePassword}/>

      제목 : <input type="text"onChange={onChangeTitle} />

      내용 : <input type="text"onChange={onChangeContents}/>

        
      <button onClick={onClickCreate}>등록하기</button>

    </div>
    </>
  );
}
