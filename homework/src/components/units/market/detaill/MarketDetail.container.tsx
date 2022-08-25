import { useMutation, useQuery } from "@apollo/client";
import { message } from "antd";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { isBucketActiveState } from "../../../../commons/store";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationCreateUseditemQuestionArgs,
  IMutationDeleteUseditemArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USEDITEMS } from "../list/MarketList.queries";
import MarketDetailUI from "./MarketDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  CREATE_USED_ITEM_QUESTION,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  FETCH_USED_ITEM_QUESTION,
  TOGGLE_USED_ITEM_PICK,
} from "./MarketDetail.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function Detail() {
  const router = useRouter();

  const [pickCount, setPickCount] = useState(0);
  const [userInfo, setUserInfo] = useState();
  const [isActive, setIsActive] = useRecoilState(isBucketActiveState);

  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
  });

  const [deleteUsedItem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const [toggleUsedItemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USED_ITEM_PICK);

  const [createPointTransactionOfBuyingAndSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.detail as string,
    },
  });

  const { data: dataUsedItemQuestions } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTION, {
    variables: {
      useditemId: router.query.detail as string,
    },
  });

  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("userInfo") as string));
  }, []);

  const onClickUpdate = () => {
    router.push(`/product/${router.query.detail}/edit`);
  };

  const onClickDelete = async () => {
    try {
      await deleteUsedItem({
        variables: {
          useditemId: router.query.detail as string,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
          },
        ],
      });
      router.push("/");
      message.success("삭제가 완료되었습니다!!");
    } catch (error) {
      message.error("삭제에 실패했습니다!");
    }
  };

  const onClickPick = async () => {
    try {
      await toggleUsedItemPick({
        variables: {
          useditemId: router.query.detail as string,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: {
              useditemId: router.query.detail as string,
            },
          },
        ],
      });
    } catch (error) {
      message.success("찜 실패!!!!");
    }
  };

  const onClickBucket = (el: any) => (event: MouseEvent<HTMLButtonElement>) => {
    const bucketList = JSON.parse(localStorage.getItem("bucketList") || "[]");

    const temp = bucketList.filter(
      (data: any) => data.fetchUseditem._id === el.fetchUseditem._id
    );
    if (temp.length === 1) {
      return;
    }
    setIsActive((prev) => !prev);
    bucketList.push(el);
    localStorage.setItem("bucketList", JSON.stringify(bucketList));
  };

  const onClickBuy =
    (id: string) => async (event: MouseEvent<HTMLButtonElement>) => {
      try {
        await createPointTransactionOfBuyingAndSelling({
          variables: {
            useritemId: id,
          },
          refetchQueries: [
            {
              query: FETCH_USEDITEMS,
            },
          ],
        });
        router.push("/");
      } catch (error) {}
    };

  const onClickCommentCreate = async (data: any) => {
    try {
      await createUseditemQuestion({
        variables: {
          useditemId: router.query.detail as string,
          createUseditemQuestionInput: {
            contents: data.contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION,
            variables: {
              useditemId: router.query.detail as string,
            },
          },
        ],
      });
      reset({
        contents: "",
      });
    } catch (error) {}
  };

  return (
    <MarketDetailUI
      data={data}
      dataUsedItemQuestions={dataUsedItemQuestions}
      useditemId={router.query.detail as string}
      pickCount={pickCount}
      userInfo={userInfo}
      onClickBucket={onClickBucket}
      onClickPick={onClickPick}
      onClickUpdate={onClickUpdate}
      onClickDelete={onClickDelete}
      onClickBuy={onClickBuy}
      onClickCommentCreate={onClickCommentCreate}
      handleSubmit={handleSubmit}
      register={register}
    />
  );
}
