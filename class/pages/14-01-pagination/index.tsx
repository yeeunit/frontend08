import { useQuery, gql } from '@apollo/client'
import styled from "@emotion/styled"
import { IQueryFetchBoardsArgs } from '../../src/commons/types/generated/types'
import { IQuery } from '../../src/commons/types/generated/types'

const FETCH_BOARDS = gql`
    query fetchBoard($page:Int){
        fetchBoards(page: $page){
            _id
            writer
            title
            contents
        }
    }
`

const Row = styled.div`
`

const Column = styled.div`
    font-size : 15px;
    color: blue;
    width: 25%;
`

export default function StaticRoutedPage(){
    const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
        FETCH_BOARDS
        );


        const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
            if(!(event.target instanceof HTMLSpanElement)) return;
            refetch({ page: event.target.id});
        }

    return (
        <>
            {data?.fetchBoards.map((el) => (
                <Row key={el._id}>
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                </Row>
            ))}

            {new Array(7).fill(1).map((_, index) => (
                <span key={index + 1} id={String(index + 1)} onClick={onClickPage}> {index + 1} </span>
            ))}

            {/*             
            {[1,2,3,1,5,6,4,8,2,1].map((_, index) => (
                <span key={index + 1} id={String(index + 1)} onClick={onClickPage}> {index + 1} </span>
            ))} */}

            {/* 
            {[1,2,3,4,5,6,7,8,9,10].map(el => (
                <span key={el} id={String(el)} onClick={onClickPage}> {el} </span>
            ))} */}


            {/* <span id="1" onClick={onClickPage}>1</span>            
            <span id="2" onClick={onClickPage}>2</span>
            <span id="3"  onClick={onClickPage}>3</span>
            <span onClick={onClickPage}>4</span> */}
  

        </>
    )
}