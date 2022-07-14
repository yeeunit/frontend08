import styled from '@emotion/styled'


export const Wrapper = styled`
    border: black 1px solid;    
    margin : 20px;
`

export const RedInput = styled.input`
    border-color: red;    
`
    // background-color: ${(props) => props.qqq};

export const RedButton = styled.button`
    background : red;    
`
    // background-color: ${(props) => props.qqq? "yellow" : "defualt"};

export const GreenButton = styled.button`
    background : ${(props) => props.myname? "green" : "defualt"};

`