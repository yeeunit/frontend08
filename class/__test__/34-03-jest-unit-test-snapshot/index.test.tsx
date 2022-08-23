import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import JestUnitTestPage from "../../pages/34-02-jset-unit-test"

it("기존 사진이랑 바뀐게 없는지 비교해 보자 - 스냅샷 테스트그", () => {

    const result = render(<JestUnitTestPage />)
    expect(result.container).toMatchSnapshot()
})


// 얼마만큼 디테일할 것인가?
// 1. 핵심만 만들기
// 2. 나중에 사용하면서 문제됐던 코드 -> 문제 재발생 방지