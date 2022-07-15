import BoardWrite from "../../../src/components/units/board/10-write/BoardWrite.container"


export default function GraphqlMutationPage(){
    return <BoardWrite isEdit={false} />
}

// IProps 는 불린타입 //따라서 콘테이너에 불린타입으로 선언하면 
// 프롭스 보드라이트안에 다른타입 입력 못함 