import { MouseEvent, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import MarketWriteUI from "./MarketWrite.presenter";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
} from "../../../../commons/types/generated/types";

import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./MarketWrite.queries";

import { FETCH_USEDITEMS } from "../list/MarketList.queries";
import { useForm } from "react-hook-form";

declare const window: typeof globalThis & {
  kakao: any;
};

// const initialInputs = { name: "", remarks: "", price: "", };
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MarketWrite(props) {
  const router = useRouter();

  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    trigger,
    reset,
    formState,
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    if (props.data !== undefined) {
      reset({
        name: props.data.fetchUseditem.name,
        price: props.data.fetchUseditem.price,
        remarks: props.data.fetchUseditem.remarks,
        contents: props.data.fetchUseditem.contents,
        tags: props.data.fetchUseditem.tags?.join(),
        useditemAddress: {
          zipcode: props.data.fetchUseditem.useditemAddress?.zipcode,
          address: props.data.fetchUseditem.useditemAddress?.address,
          addressDetail:
            props.data.fetchUseditem.useditemAddress?.addressDetail,
        },
      });
      if (props.data.fetchUseditem.images?.length) {
        setFileUrls([...props.data.fetchUseditem.images]);
      }
    }
  }, [props.data]);

  // const [isActive, setIsActive] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  // const [inputs, setInputs] = useState(initialInputs);
  // const [inputsError, setInputsError] = useState(initialInputs);

  // const [fileUrls, setFileUrls] = useState(["", "", ""]);

  // const [price, setPrice] = useState("");
  // const [contents, setContents] = useState("")

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickAddressModal = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget instanceof HTMLButtonElement) {
      switch (event.currentTarget.id) {
        case "modalClose":
          setIsAddressOpen(false);
          break;
        case "modalOpen":
          setIsAddressOpen(true);
          break;
      }
    }
  };

  const onCompleteAddressSearch = (data: any) => {
    setValue("useditemAddress.zipcode", data.zonecode);
    setValue("useditemAddress.address", data.address);

    trigger("useditemAddress.zipcode");
    trigger("useditemAddress.address");
    setIsAddressOpen(false);
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickCreate = async (data: any) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags?.split(","),
            images: [...fileUrls],
            useditemAddress: {
              zipcode: data.useditemAddress.zipcode,
              address: data.useditemAddress.address,
              addressDetail: data.useditemAddress.addressDetail,
            },
          },
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
          },
        ],
      });
      router.push(`/boards/market/${result.data?.createUseditem._id}`);
      alert("등록에 성공하였습니다!");
    } catch (error) {}
  };

  const onClickUpdate = async (data: any) => {
    try {
      const result = await updateUseditem({
        variables: {
          useditemId: router.query._id as string,
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags.split(","),
            useditemAddress: {
              zipcode: data.useditemAddress.zipcode,
              address: data.useditemAddress.address,
              addressDetail: data.useditemAddress.addressDetail,
            },
            images: [...fileUrls],
          },
        },
      });
      router.push(`/boards/market/${result.data?.updateUseditem._id}`);
      alert("수정 성공!");
    } catch (error) {}
  };

  const onClickCancel = () => {
    router.push("/");
  };

  return (
    <MarketWriteUI
      data={props.data}
      address={getValues("useditemAddress.address")}
      isEdit={props.isEdit}
      isAddressOpen={isAddressOpen}
      register={register}
      handleSubmit={handleSubmit}
      onClickCreate={onClickCreate}
      onClickUpdate={onClickUpdate}
      onChangeContents={onChangeContents}
      onClickAddressModal={onClickAddressModal}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickCancel={onClickCancel}
      formState={formState}
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
    />
  );
}
