
import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { IMutation, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";



export default function BoardCommentList() {

    const router = useRouter();
    const [isEdit, setIsEdit] = useState(false);

    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
    const [myBoardCommentId, setMyBoardCommentId] = useState("")
    const [myPassword, setMyPassword] = useState ("")

    const [deleteBoardComment] = useMutation<Pick<IMutation, "deleteBoardComment">, 
    IMutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENT)

    // const onClickUpdate = () => {
    //   setIsEdit(true);
    // };
    
    const { data, refetch } = useQuery<Pick<IQuery, "fetchBoardComments">, 
    IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, 
        {variables: { boardId: String(router.query.boardId)
    }})

    // const onLoadMore = () => {
    //     if (!data) return;
    
    //     fetchMore({
    //       variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
    //       updateQuery: (prev, { fetchMoreResult }) => {
    //         if (!fetchMoreResult?.fetchBoardComments)
    //           return { fetchBoardComments: [...prev.fetchBoardComments] };
    //         return {
    //           fetchBoardComments: [
    //             ...prev.fetchBoardComments,
    //             ...fetchMoreResult.fetchBoardComments,
    //           ],
    //         };
    //       },
    //     });
    //   };


    const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    
        if(!(event.target instanceof HTMLImageElement)) return

        const myPassword = prompt("비밀번호를 입력하시오오")

        try {
            await deleteBoardComment({
                variables: {
                    password: myPassword,
                    boardCommentId: event.target.id
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: {boradId: router.query.boardId},
                    },
                ],
            })
        } catch (error) {
            if(error instanceof Error) Modal.error({ content: error.message })
        }
    }


    const onClickOpenDeleteModel = (event: MouseEvent<HTMLImageElement>) => {
        if (!(event.target instanceof HTMLImageElement)) return;
        setMyBoardCommentId(event.target.id)
        setIsOpenDeleteModal(true)
    }

    const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setMyPassword(event.target.value)
    }


    return (
    
        <>

        <BoardCommentListUI
        data={data}
        isOpenDeleteModal={isOpenDeleteModal}
        onClickDelete={onClickDelete}
        onClickOpenDeleteModel={onClickOpenDeleteModel}
        onChangeDeletePassword={onChangeDeletePassword}
        />

       
        </>
        
  );

}