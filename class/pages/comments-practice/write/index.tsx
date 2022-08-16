import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "../write/styles";


export const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
    }
  }
`;

export const UPDATE_BOARD_COMMENT = gql`
  mutation updateBoardComment(
    $updateBoardCommentInput: UpdateBoardCommentInput!
    $password: String
    $boardCommentId: ID!
  ) {
    updateBoardComment(
      updateBoardCommentInput: $updateBoardCommentInput
      password: $password
      boardCommentId: $boardCommentId
    ) {
      _id
    }
  }
`;

export const FETCH_BOARD_COMMENTS = gql`
    query fetchBoardComments($page: Int, $boardId: ID!){fetchBoardComments(page: $page, boardId : $boardId) {
                _id
                writer
                contents
                rating
                createdAt
                updatedAt
                deletedAt
            }
        }
    
`

export default function BoardCommentWrite() {
    const router = useRouter();
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [contents, setContents] = useState("");
    const [star, setStar] = useState(0);
  
    const [createBoardComment] = useMutation (CREATE_BOARD_COMMENT);
  
  
    const onChangeWriter = (event) => {
      setWriter(event.target.value);
    };
  
    const onChangePassword = (event) => {
      setPassword(event.target.value);
    };
  
    const onChangeContents = (event) => {
      setContents(event.target.value);
    };
  
    const onClickWrite = async () => {
    //   if (typeof router.query.boardId !== "string") return;
  
      try {
        console.log('try 진입')
        await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer,
              password,
              contents,
              rating: star,
          
            },
            boardId: router.query.boardId,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
          ],
        });
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
  
      setWriter("");
      setPassword("");
      setContents("");
    };
  


  return (
    <S.Wrapper>
      <>
        <S.PencilIcon src="/images/boardComment/write/pencil.png" />
        <span>댓글</span>
      </>
      <S.InputWrapper>
        <S.Input
          placeholder="작성자"
          onChange={onChangeWriter}
          value={writer}
        />

        <S.Input
          type="password"
          placeholder="비밀번호"
          onChange={onChangePassword}
          value={password}
        />
        <S.Star onChange={setStar} />

      </S.InputWrapper>
      <S.ContentsWrapper>
        <S.Contents
          maxLength={100}
          onChange={onChangeContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          value={contents}
        />
        <S.BottomWrapper>
          <S.ContentsLength>{contents.length}/100</S.ContentsLength>
          <S.Button onClick={onClickWrite}>등록하기</S.Button>
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
