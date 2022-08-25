import { useMutation } from "@apollo/client";
import { MouseEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import CommentUI from "./Comment.presenter";

import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./Comment.queries";
import { ICommentProps } from "./Comment.types";

export default function Comment(props: ICommentProps) {
  const [isEdit, setIsEdit] = useState(false);

  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    if (props.el !== undefined) {
      reset({
        contents: props.el.contents,
      });
    }
  }, [props.el]);

  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION);

  const onClickDelete = async (event: MouseEvent<HTMLElement>) => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION,
            variables: {
              useditemId: props.useditemId,
            },
          },
        ],
      });
    } catch (error) {}
  };

  const onClickChange = () => {
    setIsEdit(true);
  };

  const onClickUpdateCancel = () => {
    setIsEdit(false);
  };

  const onClickUpdate = async (data: any, event: any) => {
    try {
      await updateUseditemQuestion({
        variables: {
          useditemQuestionId: event.target.id,
          updateUseditemQuestionInput: {
            contents: data.contents,
          },
        },
      });
      setIsEdit(false);
    } catch (error) {}
  };

  return (
    <CommentUI
      isEdit={isEdit}
      el={props.el}
      userInfoId={props.userInfoId}
      onClickDelete={onClickDelete}
      onClickUpdate={onClickUpdate}
      onClickChange={onClickChange}
      onClickUpdateCancel={onClickUpdateCancel}
      handleSubmit={handleSubmit}
      register={register}
    />
  );
}
