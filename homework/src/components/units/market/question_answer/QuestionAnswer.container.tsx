// import { useMutation, useQuery } from "@apollo/client";
// import { useRouter } from "next/router";
// import { MouseEvent, useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import {
//   IMutation,
//   IMutationCreateUseditemQuestionArgs,
//   IMutationDeleteUseditemQuestionArgs,
//   IMutationUpdateUseditemQuestionArgs,
//   IQuery,
//   IQueryFetchUseditemQuestionsArgs,
// } from "../../../../commons/types/generated/types";
// import CommentUI from "./QuestionAnswer.presenter";
// import {
//   CREATE_USED_ITEM_QUESTION,
//   DELETE_USED_ITEM_QUESTION,
//   FETCH_USED_ITEM_QUESTION,
//   UPDATE_USED_ITEM_QUESTION,
// } from "./QuestionAnswer.queries";
// import { ICommentProps } from "./QuestionAnswer.types";

// export default function Comment(props: ICommentProps) {
//   const [isEdit, setIsEdit] = useState(false);

//   const router = useRouter();
//   const { register, handleSubmit, reset } = useForm({
//     mode: "onChange",
//   });

//   const [createUseditemQuestion] = useMutation<
//     Pick<IMutation, "createUseditemQuestion">,
//     IMutationCreateUseditemQuestionArgs
//   >(CREATE_USED_ITEM_QUESTION);

//   const { data: dataUsedItemQuestions } = useQuery<
//     Pick<IQuery, "fetchUseditemQuestions">,
//     IQueryFetchUseditemQuestionsArgs
//   >(FETCH_USED_ITEM_QUESTION, {
//     variables: {
//       useditemId: router.query._id as string,
//     },
//   });

//   const onClickCommentCreate = async (data: any) => {
//     try {
//       await createUseditemQuestion({
//         variables: {
//           useditemId: router.query._id as string,
//           createUseditemQuestionInput: {
//             contents: data.contents,
//           },
//         },
//         refetchQueries: [
//           {
//             query: FETCH_USED_ITEM_QUESTION,
//             variables: {
//               useditemId: router.query._id as string,
//             },
//           },
//         ],
//       });
//       reset({
//         contents: "",
//       });
//     } catch (error) {}
//   };
//   useEffect(() => {
//     if (props.el !== undefined) {
//       reset({
//         contents: props.el.contents,
//       });
//     }
//   }, [props.el]);

//   const [deleteUseditemQuestion] = useMutation<
//     Pick<IMutation, "deleteUseditemQuestion">,
//     IMutationDeleteUseditemQuestionArgs
//   >(DELETE_USED_ITEM_QUESTION);
//   const [updateUseditemQuestion] = useMutation<
//     Pick<IMutation, "updateUseditemQuestion">,
//     IMutationUpdateUseditemQuestionArgs
//   >(UPDATE_USED_ITEM_QUESTION);

//   const onClickDelete = async (event: MouseEvent<HTMLElement>) => {
//     try {
//       await deleteUseditemQuestion({
//         variables: {
//           useditemQuestionId: event.currentTarget.id,
//         },
//         refetchQueries: [
//           {
//             query: FETCH_USED_ITEM_QUESTION,
//             variables: {
//               useditemId: props.useditemId,
//             },
//           },
//         ],
//       });
//     } catch (error) {}
//   };

//   const onClickChange = () => {
//     setIsEdit(true);
//   };

//   const onClickUpdateCancel = () => {
//     setIsEdit(false);
//   };

//   const onClickUpdate = async (data: any, event: any) => {
//     try {
//       await updateUseditemQuestion({
//         variables: {
//           useditemQuestionId: event.target.id,
//           updateUseditemQuestionInput: {
//             contents: data.contents,
//           },
//         },
//       });
//       setIsEdit(false);
//     } catch (error) {}
//   };

//   return (
//     <CommentUI
//       isEdit={isEdit}
//       el={props.el}
//       userInfoId={props.userInfoId}
//       onClickDelete={onClickDelete}
//       onClickUpdate={onClickUpdate}
//       onClickChange={onClickChange}
//       onClickUpdateCancel={onClickUpdateCancel}
//       handleSubmit={handleSubmit}
//       register={register}
//     />
//   );
// }
