import { IQuery } from '../../../../commons/types/generated/types'
import { ChangeEvent } from 'react'

export interface IBoardWriteProps {
    isEdit : boolean
    isActive: boolean
    data?: Pick<IQuery,"fetchBoard"> // 물음표를 붙이면 데이터 줘도되고 없으면 안줘도됨 
}

export interface IVariables {
    writer?: string 
    password? :string
    title?: string
    contents?: string
}

export interface IMyVariables {
    boardId:string {
    password?: string
    updateBoardInput?: string 
    }
}

export interface IBoardWriteUIProps {
    // 온클릭함수, 리턴이 있으면 그타입, 없을때는 void

    onClickRegister: () => void
    onClickUpdate: () => void
    onChangeName:(event: ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void

    nameError: (event: ChangeEvent<HTMLInputElement>) => void
    passwordError: (event: ChangeEvent<HTMLInputElement>) => void
    titleError: (event: ChangeEvent<HTMLInputElement>) => void
    contentsError: (event: ChangeEvent<HTMLInputElement>) => void


    isEdit: boolean
    isActive: boolean

    data: Pick<IQuery,"fetchBoard">
     //any 코드제너레이트에ㅓ서 추후 데이터타입 확인 가능
}

// export interface IRedButtonProps{
//     qqq: boolean
// }

