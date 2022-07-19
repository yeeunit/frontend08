import { useState } from "react";
import { useMutation } from '@apollo/client'
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import  BoardDetailUI  from "./BoardDetail.presenter";
import { FETCH_BOARD, CREATE_BOARD_COMMENT, DELETE_BOARD, FETCH_BOARDS } from './BoardDetail.queries'


export default function BoardDetail(){
    const router = useRouter()
    console.log(router.query.boardId)

    const { data } = useQuery(FETCH_BOARD, {
      variables: { boardId: router.query.boardId },}
    );
    
    // const [deleteBoard] = useMutation(DELETE_BOARD)
                     
    // 댓글
    const [comment, setComment] = useState("");
    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)

    const onChangeComment = (event) => {
      setComment(event.target.value);
    }

    
    const onClickMoveToBoardList = () => {
      router.push("/boards");
    };
  
    const onClickMoveToBoardEdit = () => {
      router.push(`/boards/${router.query.boardId}/edit`);
    };


    // const onClickDelete = (event) => {
    //   deleteBoard({
    //       variables:{ boardId: event.target._id }
    //       ,
    //       refetchQueries: [{query: FETCH_BOARDS}]
    //   })
    // }

    const onClickCommentSubmit = async () => {
      if (writer && password && contents) {
        try {
          const result = await createBoardComment({
            variables: {
              createBoardCommentInput: {
                writer: writer,
                password: password,
                contents: contents,
                rating:0            
              },
              boardId: router.query.boardId,
            },
            refetchQueries: [
              query: FETCH_BOARDS_COMMENTS,
              variables: 
            ]
            }
          })
          console.log(result.data.createBoardComment._id)
          router.push(`/boards/${result.data.createBoardComment._id}`)
        } 
        catch(error) {
          alert(error.message)
        }
      }
    };

    return (
      <BoardDetailUI
        data={data}
        onClickMoveToBoardList={onClickMoveToBoardList}
        onClickMoveToBoardEdit={onClickMoveToBoardEdit}
        onClickCommentSubmit={onClickCommentSubmit}
        onChangeComment={onChangeComment}
        // onClickDelete={onClickDelete}
        comment={comment}
      />
    );


    }
