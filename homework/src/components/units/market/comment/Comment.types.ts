import { MouseEvent } from "react"
import { FieldValues, UseFormHandleSubmit, UseFormRegister } from "react-hook-form"

export interface ICommentProps {
    el: any
    useditemId: string
    userInfoId: string
}

export interface ICommentUIProps {
    isEdit: boolean
    el: any
    userInfoId: string
    onClickDelete: (event: MouseEvent<HTMLElement>) => void
    onClickUpdate: (data: any, event: any) => void
    onClickChange: () => void
    onClickUpdateCancel: () => void
    handleSubmit: UseFormHandleSubmit<FieldValues>
    register: UseFormRegister<FieldValues>
}