import { StepBackwardOutlined } from "@ant-design/icons";
import styled from "@emotion/styled"

const MyIcon = styled(StepBackwardOutlined)`

    font-size : 500px;
    color : red;
    background: pink;
`


export default function LibraryIconPage(){
    return <MyIcon />
    // return <StepBackwardOutlined />
    // 클릭하는 부분은 콘솔창에 svg 안에 있음 따라서 아이디를 설정해서 하기엔 어려움
}