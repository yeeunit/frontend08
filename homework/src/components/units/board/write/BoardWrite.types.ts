import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";



export interface IBoardWriteProps {
    isEdit: boolean;
    data?: Pick<IQuery, "fetchBoard">
}

export interface IUpdateBoardInput {
    title?: string;
    contents?: string
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
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void
    onChangeYoutube: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
    onClickAddressSearch: () => void
    onClickSubmit: () => void
    onClickUpdate: () => void
    onClickDelete: () => void 

    isEdit: boolean
    data?: Pick<IQuery, "fetchBoard">


}