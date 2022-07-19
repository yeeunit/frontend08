// 삭제하면 삭제한거 뺴고 다시 가져오기 (리패치)

import { useQuery, useMutation, gql } from '@apollo/client'
import styled from '@emotion/styled'
import { Fragment } from 'react'


const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            number
            writer
            title
            contents
        }
    }
`
const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number: $number){
            message
        }
    }
`

const Row = styled.div`
    display: flex;
`
//  flex-direction : row; // 디폴트값 안써도 무방

const Column = styled.div`
    width: 20%;
`
export default function StaticRoutedPage(){
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const { data } = useQuery(FETCH_BOARDS)

    // 버튼을눌렀을때 딜리트, 어떤것을 삭제할지 (게시글의 번호 가져오기 )
    const onClickDelete = (event) => {
        deleteBoard({
            variables:{ number: Number(event.target.id)},
            refetchQueries: [{query: FETCH_BOARDS }]
        })
    }
    
    // index는 계속 존재하므로 고유한 값으로 사용하기 
    return (
        <>
            {data?.fetchBoards.map((el, index)=> (
                // <Fragment key = {el.number}>
                <Row key = {el.number}>
                    <Column> 체크 : <input type="checkbox" /></Column>
                    <Column> 게시번호 : {el.number}</Column>
                    <Column> 작성자 :{el.writer}</Column>
                    <Column> 제목: ㄴㄴ{el.title}</Column>
                    <Column>
                        <button id={el.number} onClick={onClickDelete}>삭제</button>
                    </Column>
                </Row>
                
            ))}
        </>
    )
}

