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
  IMutationDeleteUseditemArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USEDITEMS } from "../list/MarketList.queries";
import MarketDetailUI from "./MarketDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USEDITEM,
  TOGGLE_USED_ITEM_PICK,
} from "./MarketDetail.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function Detail() {
  const [isActive, setIsActive] = useRecoilState(isBucketActiveState);

  const router = useRouter();

  const [pickCount, setPickCount] = useState(0);
  const [userInfo, setUserInfo] = useState();
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

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: {
      useditemId: String(router.query._id),
    },
  });

  console.log(data);

  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("userInfo") as string));
  }, []);

  const onClickUpdate = () => {
    router.push(`/boards/market/${router.query._id}/edit`);
  };

  const onClickDelete = async () => {
    try {
      await deleteUsedItem({
        variables: {
          useditemId: router.query._id as string,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
          },
        ],
      });
      router.push("/boards/market");
      alert("삭제 완료!");
    } catch (error) {
      alert("삭제 실패!");
    }
  };

  const onClickPick = async () => {
    try {
      await toggleUsedItemPick({
        variables: {
          useditemId: router.query._id as string,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM,
            variables: {
              useditemId: router.query._id as string,
            },
          },
        ],
      });
    } catch (error) {
      alert("찜실패");
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

  return (
    <MarketDetailUI
      data={data}
      useditemId={router.query._id as string}
      pickCount={pickCount}
      userInfo={userInfo}
      onClickBucket={onClickBucket}
      onClickPick={onClickPick}
      onClickUpdate={onClickUpdate}
      onClickDelete={onClickDelete}
      onClickBuy={onClickBuy}
      handleSubmit={handleSubmit}
      register={register}
    />
  );
}
