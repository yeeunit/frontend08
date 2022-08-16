import { useQuery, gql } from '@apollo/client'
import styled from "@emotion/styled"
import { IBoard, IQuery } from '../../src/commons/types/generated/types'

const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            _id
            writer
            title
            contents
        }
    }
`

const Row = styled.div`
    display: flex;
`

const Column = styled.div`
    width: 25%;
`

export default function StaticRoutedPage(){
    const { data } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARDS)

    const onClickBasket =(basket: IBoard) = () =>{
        console.log(basket)

        // 1. 기존 장바구니 가져오기
        // const baskets = JSON.parse(localStorage.getItem("bastkets") || "[]")
        const baskets : Pick<IBoard, "contents" | "title" | "_id" | "writer">[] = JSON.parse(localStorage.getItem("bastkets") || "[]")


        // 2. 이미 담겼는지 확인하기
        // 임시 저장할때 temp라는 변수 사용 
        const temp = baskets.filter((el) => el._id === basket._id )
        if(temp.length === 1){
            alert('이미 담으신 물품입니다.')
            return
        }

        // 타입네임 제거하기 (딜리트는 원본 건드릴수 있어. 구조분해할당)
        const { __typename, ...newBasket } = basket 


        // 3. 해당 장바구니에 담기 

        baskets.push(newBasket)
        localStorage.setItem("baskets", JSON.stringify(baskets) )
        // 객체나 배열은 들어갈 수 없어서 문자열로 바꿔줌 

    }

    return (
        <>
            {data?.fetchBoards.map((el) => (
                <Row key={el._id}>
                    <Column>{el._id}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                    <button onClick={onClickBasket(el)}>장바구니 담기</button>
                </Row>
            ))}
        </>
    )
}
