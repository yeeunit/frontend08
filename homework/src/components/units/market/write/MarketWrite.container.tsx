import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { IMutation, IMutationCreateUseditemArgs, IMutationUpdateUseditemArgs } from "../../../../commons/types/generated/types";
import MarketWriteUI from "./MarketWrite.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./MarketWrite.queries";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";



const initialInputs = { name: "", remarks: "", contents:"", price: "", };
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });


export default function MarketWrite(){

  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  const [inputs, setInputs] = useState(initialInputs);
  const [inputsError, setInputsError] = useState(initialInputs);

  // const [name, setName] = useState("");
  // const [remarks, setRemarks] = useState("");
  // const [contents, setContents] = useState("");
  const [price, setPrice] = useState("");

  const [createUseditem] = useMutation<Pick<IMutation, "createUseditem">,IMutationCreateUseditemArgs>(CREATE_USED_ITEM)

  // const[updateUseditem] = useMutation<Pick<IMutation,"updateUseditem">,IMutationUpdateUseditemArgs>(UPDATE_USED_ITEM)

  const onChangeInputs = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const _inputs = {
      ...inputs,
      [event.target.id]: event.target.value,
    };
    setInputs(_inputs);
    if (event.target.value !== "") {
      setInputsError({
        ...inputsError,
        [event.target.id]: "",
      });
    }


    if (Object.values(_inputs).every((el) => el)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
  //   setName(event.target.value);
  // };
  // const onChangeRemarks = (event: ChangeEvent<HTMLInputElement>) => {
  //   setRemarks(event.target.value);
  // };

  // const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
  //   setContents(event.target.value);
  // };

  // const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPrice(event.target.value);
  // };


  const onClickSubmit = async () => {
    const errors = {
      name: "상품명을 입력해주세요.",
      remarks: "한줄 요약을 입력해주세요.",
      contents: "내용을 입력해주세요",
      price: "가격을 입력해주세요"
    };
    (Object.keys(inputs) as Array<keyof typeof inputs>).forEach((el) => {
      if (!inputs[el]) {
        setInputsError({
          ...inputsError,
          [el]: errors[el],
        });
      }
    });
    if (Object.values(inputs).every((el) => el)) {
      try {
        const result = await createUseditem({
          variables: {
            createUseditemInput: {
              ...inputs,
              price: Number(price) 
            },
          },
        });
        console.log(result.data?.createUseditem._id);
        alert("등록성공")
        // router.push(`/boards/market/${result.data?.createUseditem._id}`);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }
  };

  // // 수정하기
  // const onClickUpdate = async () => {
  //   const currentFiles = JSON.stringify(fileUrls);
  //   const defaultFiles = JSON.stringify(props.data?.fetchBoard.images);
  //   const isChangedFiles = currentFiles !== defaultFiles;

  //   if (
  //     !inputs.name &&
  //     !inputs.price &&
  //     !isChangedFiles
  //   ) {
  //     alert("수정한 내용이 없습니다.");
  //     return;
  //   }
   
  //   const updateUseditemInput = {};
  //   if (inputs.name) updateUseditemInput.name = inputs.name;
  //   if (inputs.contents) updateUseditemInput.contents = inputs.contents;
  //   if (price) updateUseditemInput.price = price;
   
  //   // if (isChangedFiles) updateBoardInput.images = fileUrls;

  //   try {
  //     if (typeof router.query.boardId !== "string") return;
  //     const result = await updateUseditem({
  //       variables: {
  //         name: inputs.name,
  //         useditemId,
  //       },
  //     });
  //     router.push(`/boards/${result.data?.updateUseditem._id}`);
  //   } catch (error) {
  //     if (error instanceof Error) alert(error.message);
  //   }
  // };

  return(
  <MarketWriteUI
    // onChangeName = {onChangeName}
    // onChangeRemarks = {onChangeRemarks}
    // onChangeContents = {onChangeContents}
    // onChangePrice = {onChangePrice}

    onChangeInputs = {onChangeInputs}
    onClickSubmit = {onClickSubmit}
    />
  )

}