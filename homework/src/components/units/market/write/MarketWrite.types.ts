import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";



export interface IBoardWriteProps {
    isEdit: boolean;
    data?: Pick<IQuery, "fetchBoard">
}

export interface IUpdateBoardInput {
    title?: string;
    contents?: string
    youtubeUrl?: string;
    boardAddress?: {
      zipcode?: string;
      address?: string;
      addressDetail?: string;
    };
    images?: string[];
  }
  

export interface ISubmitButtonProps {
    isActive: boolean
}

export interface IBoardWriteProps {
    isActive: boolean
    writerError: string
    passwordError: string
    titleError: string
    contentsError: string
    onChangeInputs: (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => void;
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void

    onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
    onClickAddressSearch: () => void
    onCompleteAddressSearch: (data: any) => void;
    onChangeFileUrls: (fileUrls: string, index: number) => void;

    onClickSubmit: () => void
    onClickUpdate: () => void
    isOpen: boolean;
    isEdit: boolean
    data?: Pick<IQuery, "fetchBoard">
    zipcode: string;
    address: string;
    addressDetail: string;
    fileUrls: string[];

}