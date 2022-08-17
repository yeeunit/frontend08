import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { checkValidationFile } from "../../../src/commons/libraries/validationFile";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
export default function ImagePage() {
  const [imageUrls, setImageUrls] = useState([""]);
  const [files, setFiles] = useState<File[]>([]);

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onChangeFile =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      const isValid = checkValidationFile(file);
      if (!isValid) return;

      // 1. 진짜URL 생성
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (data) => {
        if (typeof data.target?.result === "string") {
          console.log(data.target?.result);

          const tempUrls = [...imageUrls];
          tempUrls[index] = data.target?.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        }
      };
      console.log(files);
    };

  const onClickSave = async (data) => {
    const results = await Promise.all(
      files.map((el) => el && uploadFile({ variables: { file: el } }))
    );

    const resultUrls = results.map((el) => (el ? el.data.uploadFile.url : ""));

    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
          images: resultUrls,
        },
      },
    });
    console.log(result);
    alert("저장완료");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onClickSave)}>
        작성자: <input type="text" {...register("writer")} />
        비밀번호: <input type="password" {...register("password")} />
        제목: <input type="text" {...register("title")} />
        내용: <input type="text" {...register("contents")} />
        이미지 등록: <input type="file" onChange={onChangeFile(0)} />
        <img src={imageUrls[0]} />
        <button>저장하기</button>
      </form>
    </>
  );
}
