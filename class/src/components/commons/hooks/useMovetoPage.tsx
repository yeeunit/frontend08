import { useRouter } from "next/router"
import { MouseEvent } from "react"
import { useRecoilState } from "recoil"
import { visitedPageState } from "../../../commons/store"


export function useMovetoPage () {
    const router = useRouter()
    const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState)

    const onClickMovetoPage = 
    (path: string) => (event: MouseEvent<HTMLElement>) => {
        setVisitedPage(path)
        router.push(path)
    }

    return{
        visitedPage,
        onClickMovetoPage,
    }
}