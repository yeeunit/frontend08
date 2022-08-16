import { useQuery, gql } from '@apollo/client'
import styled from "@emotion/styled"
import { ChangeEvent, MouseEvent, useState } from 'react'
import { IQuery, IQueryFetchBoardsArgs } from '../../src/commons/types/generated/types'
import _ from 'lodash'

const FETCH_BOARDS = gql`
    query fetchBoards($search: String, $page: Int){
        fetchBoards(search: $search, page: $page){
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

    // const [search, setSearch] = useState("")

    const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS)



    const getDebounce = _.debounce((value) => {
        refetch({ search: value, page: 1})

    }, 1000)

const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    // setSearch(event.target.value)
    getDebounce(event.target.value)

    // 체인지 할때마다 리패치하는 것이 아니라 디바운스
    // refetch({ search: event.target.value, page: 1})
}

// const onClickSearch = () => {
//     refetch({ search: search, page: 1 })
// }

const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof HTMLSpanElement)) return;
    refetch({ search, page: Number(event.target.id) });
  };


  // 검색어를 입력하는 즉시 리페치되어 결과가 나타나지만, 
  // 검색할때마다 요청이 들어가 좋지 않음 서버에 부하
  // 디바운스: 따라서 마지막 입력이 일어난후 특정 시간 내에 다음 입력이 일어나지 않을때 기능 실행 #디바운싱
  // 쓰로틀링(쓰로틀): 마지막 입력이 일어난 후, 한번 실행하고, 특정시간 동안 재실행 방지 

    return (
        <>

        검색어 입력: <input type='text' onChange={onChangeSearch} />
        {/* <button onClick={onClickSearch}> 검색하기 </button> */}

            {data?.fetchBoards.map(el => (
                <Row key={el._id}>
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                </Row>
            ))}

    <div style={{cursor: "pointer"}}>
    {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}

    </div>

        </>
    )
}
