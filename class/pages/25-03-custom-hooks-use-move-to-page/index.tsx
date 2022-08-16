import { useMovetoPage } from "../../src/components/commons/hooks/useMovetoPage"

export default function CustomHooksMoveTOPage(){
    
    const {onClickMovetoPage} = useMovetoPage()

    return(
    <>

        <button onClick={onClickMovetoPage("/boards")}>게시판으로 이동
        </button>

        <button onClick={onClickMovetoPage("/markets")}>마켓으로 이동
        </button>

        <button onClick={onClickMovetoPage("/mypages")}>마이페이지로 이동
        </button>
    
    </>
    )
}