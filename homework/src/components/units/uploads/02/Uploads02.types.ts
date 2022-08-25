import { ChangeEvent, RefObject } from "react";

export interface IUploadProps {
  index: number;
  fileUrl: string;
  defaultFileUrl?: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}

export interface IUploadUIProps {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  defaultFileUrl?: string;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickUpload: () => void;
}
