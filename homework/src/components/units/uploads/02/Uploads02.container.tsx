import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef } from "react";
import Upload02UI from "./Uploads02.presenter";
import { UPLOAD_FILE } from "./Uploads02.queries";
import { IUploadProps } from "./Uploads02.types";
import { checkValidationImage } from "./Uploads02.validation";

export default function Upload(props: IUploadProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({
        variables: { file },
      });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      Modal.error({ content: "실패하였습니다!!" });
    }
  };

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  return (
    <Upload02UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onChangeFile={onChangeFile}
      onClickUpload={onClickUpload}
    />
  );
}
