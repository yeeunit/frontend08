import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import * as S from '../list/style'

export const FETCH_BOARD_COMMENTS = gql`
query fetchBoardComments($boardId: ID!, $page: Int) {
  fetchBoardComments(boardId: $boardId, page: $page) {
    _id
    writer
    contents
    createdAt
    rating
  }
}
`;

export const DELETE_BOARD_COMMENT = gql`
mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
  deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
}
`;


export default function BoardCommentListUIItem() {
    const router = useRouter();
    const [isEdit, setIsEdit] = useState(false);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const [myPassword, setMyPassword] = useState("");
  
    const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  
    const onClickUpdate = () => {
      setIsEdit(true);
    };
  
    const onClickDelete = async () => {
      try {
        await deleteBoardComment({
          variables: {
            password: myPassword,
            boardCommentId: el?._id,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
          ],
        });
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    };
  
    const onClickOpenDeleteModal = () => {
      setIsOpenDeleteModal(true);
    };
  
    const onChangeDeletePassword = (event) => {
      setMyPassword(event.target.value);
    };
  

export default function BoardCommentList() {
    const router = useRouter();
  
    const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
      variables: { boardId: String(router.query.boardId) },
    });
  
    const onLoadMore = () => {
      if (!data) return;
  
      fetchMore({
        variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult?.fetchBoardComments)
            return { fetchBoardComments: [...prev.fetchBoardComments] };
          return {
            fetchBoardComments: [
              ...prev.fetchBoardComments,
              ...fetchMoreResult.fetchBoardComments,
            ],
          };
        },
      });


  return (
    <>
      {isOpenDeleteModal && (
        <Modal visible={true} onOk={onClickDelete}>
          <div>비밀번호 입력: </div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {!isEdit && (
        <S.ItemWrapper>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{el?.writer}</S.Writer>
                <S.Star value={el?.rating} disabled />
              </S.WriterWrapper>
              <S.Contents>{el?.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.UpdateIcon
                src="/images/boardComment/list/option_update_icon.png/"
                onClick={onClickUpdate}
              />
              <S.DeleteIcon
                src="/images/boardComment/list/option_delete_icon.png/"
                onClick={onClickOpenDeleteModal}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{el?.createdAt}</S.DateString>
        </S.ItemWrapper>
      )}
      
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
      {data?.fetchBoardComments.map((el) => (
        <div key={el._id} el={el} />
      ))}
    </InfiniteScroll>

    </>
  );
}
}