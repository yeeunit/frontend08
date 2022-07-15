import { ChangeEvent } from 'react'
import styled from '@emotion/styled'

export const RedInput = styled.input`
    border-color: red;
`

export const RedButton = styled.button`
    border-color: red;

    background-color: ${(props) => props.qqq ? "yellow" : "default"};
`
// qqq를 뭐로 받을 건지Ipropps
// export default function QQQ(){

// }