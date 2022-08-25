import { PreviewImg, UploadBox, UploadFileHidden } from "./Uploads02.styles";
import { IUploadUIProps } from "./Uploads02.types";

export default function Upload02UI(props: IUploadUIProps) {
  return (
    <>
      {props.fileUrl ? (
        <PreviewImg
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadBox onClick={props.onClickUpload}>
          <>+</>
        </UploadBox>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
