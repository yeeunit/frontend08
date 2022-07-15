import { IntrospectionQuery } from 'graphql'
import { ChangeEvent } from 'react'

export interface IBoardWriteProps {
    isEdit : boolean
    data?: Pick<IntrospectionQuery,"fetchBoard"> // 물음표를 붙이면 데이터 줘도되고 없으면 안줘도됨 
}

export interface IMyVariables {
    number: number
    writer?: string 
    title?: string
    contents?: string
}

export interface IBoardWriteUIProps {
    // 온클릭함수, 리턴이 있으면 그타입, 없을때는 void

    onClickCreate: () => void
    onClickUpdate: () => void
    onChangeWriter:(event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
    mycolor: boolean
    isEdit: boolean

    data: <Pick<IQuery,"fetchBoard">,IQ
     //any 코드제너레이트에ㅓ서 추후 데이터타입 확인 가능
}

export interface IRedButtonProps{
    qqq: boolean
}
