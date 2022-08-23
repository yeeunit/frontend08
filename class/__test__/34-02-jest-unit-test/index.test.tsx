import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import JestUnitTestPage from "../../pages/34-02-jset-unit-test"

it("내가 원하는대로 그려지는지 테스트하기", () => {
    render(<JestUnitTestPage />)

    const myText1 = screen.getByText('철수는 13살 입니다.')
    expect(myText1).toBeInTheDocument()

    const myText2 = screen.getByText('철수의 취미 입력하기')
    expect(myText2).toBeInTheDocument()

    const myText3 = screen.getByText('철수랑 놀러가기')
    expect(myText3).toBeInTheDocument()
})


// 얼마만큼 디테일할 것인가?
// 1. 핵심만 만들기
// 2. 나중에 사용하면서 문제됐던 코드 -> 문제 재발생 방지