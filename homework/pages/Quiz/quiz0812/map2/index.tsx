// # 5-1. 지도 연동하기(카카오지도)


import styled from "@emotion/styled"
import Link from "next/link"

const Button = styled.div`
    width: 250px;
    height: 70px;
    line-height: 70px;
    background: white;
    border: 3px solid black;
    font-size: 20px;
    text-align: center;
    font-weight: 800;
    cursor: pointer;
    :hover { background-color: gold}

`

export default function KakaoMapQuizPage(){


    return(
        <>
        <Link href="/quiz0812/map1">
            <Button><a>Move to Kakao Map</a></Button>
        </Link>
        </>
    )
}