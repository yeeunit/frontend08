// # 1-1. 게시글 검색하기
// 1. 검색어 입력창을 하나 만들어 주세요.
// 2. 검색어 입력창에 검색어를 입력할 때, 실시간으로 입력된 검색어로 게시물을 조회해 보세요.
// 3. 조회된 게시물에서 페이지를 선택하여 검색된 페이지를 조회해 보세요.
// 4. 디바운싱을 활용하여 효율적인 검색을 구현해 보세요.
// 5. 검색어와 매칭되는 단어 색을 빨간색으로 변경해 보세요.

import { gql, useQuery } from "@apollo/client"
import styled from "@emotion/styled";
import _ from "lodash";
import { ChangeEvent, MouseEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IQuery, IQueryFetchBoardsArgs } from "../../src/commons/types/generated/types";



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

const Body = styled.div`
    padding: 30px;
`

const Search = styled.div`
    color: white;
    font-size: 20px;
    margin-bottom : 20px;
`

const Row = styled.div`
    width: 800px;
    height: 40px;
    display: flex;
    background-color: white;
    border: 1px solid black;
    line-height: 40px;
`
const Column = styled.div`
    width: 25%;

`

const Pagination = styled.span`
    color: white;
    font-size: 20px;
`


export default function HomeworkPage(){

    const [keyword, setKeyword] = useState("")

    const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS)


    const getDebounce = _.debounce((value) => {
        refetch({ search: value, page: 1 })
        setKeyword(value)
    }, 1000)


    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        getDebounce(event.target.value)
    }

    const onClickPage = (event: MouseEvent<HTMLScriptElement>) => {
        if(!(event.target instanceof HTMLSpanElement)) return;

        refetch({ page: Number(event.target.id )})
    }


    return(
    <Body>

        <Search>
        검색어 입력:  <input type="text" onChange={onChangeSearch}/>
        </Search>

        

        <div style={{cursor: "pointer"}}>
        {data?.fetchBoards.map(el => (
            <Row key={el._id}>
                <Column>{el.writer}</Column>
            
                <Column>{el.title.replaceAll(keyword, `###${keyword}###`).split("###").map(el => (
                    <span key={uuidv4()} style={{ color: keyword === el ? "tomato" : "navy"}}>{el}</span>
                ))}
                </Column>
            </Row>
        ))}
        </div>
    
        <div style={{cursor: "pointer", width: "300px", height:"50px", display:"flex", flexDirection: "row", lineHeight: "50px"}}>
        
            {new Array(10).fill(1).map((_, index) => (
                <Pagination key={index + 1} id={String(index + 1)} onClick={onClickPage}>
                    {index + 1}
                </Pagination>
            ))}


        </div>
        
    </Body>
    )
}