// after

import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {

  const [inputs, setInputs] = useState({ writer:"", title:"", contents:"" })
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickGraphqlApi = async () => {
    const result = await createBoard({
      variables: {
        // writer: inputs.writer,
        // title: inputs.title,
        // contents: inputs.contents,
        // -> 스프레드 연산자로 변경 가능
        ...inputs
      },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
  };


  // 리팩토링!  만약 인풋을 하면
  // ...inputs
  // =>writer: input.writer,
  // title: inputs.title,
  // contents: input.contents


  // const onChangeTitle = (event) => {
  //   // setTitle(event.target.value);
  //   setInputs({
  //     // writer: inputs.writer,
  //     // title: inputs.title,
  //     // contents: inputs.contents,
  //     // 마지막것은 덮어씌워지므로
  //     ...inputs,4›
  //     event.target.id: event.target.value,

  //   })
  // };

  // const onChangeContents = (event) => {
  //   // setContents(event.target.value);
  //   setInputs({
  //     ...inputs,
  //     event.target.id: event.target.value,
  //   })
  // };

  const onChangeInputs = (event) => {
    // setWriter(event.target.value);
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    })
  };

  return (
    <>
      작성자: <input type="text" id="writer"  onChange={onChangeInputs} />
      <br />
      제목: <input type="text" id="title"  onChange={onChangeInputs} />
      <br />
      내용: <input type="text" id="contents"  onChange={onChangeInputs} />
      <br />
      <button onClick={onClickGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
    </>
  );
}