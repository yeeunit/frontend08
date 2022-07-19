// 7/12 숙제

import { useQuery, useMutation, gql } from '@apollo/client'
import styled from '@emotion/styled'


const FETCH_PRODUCTS = gql`
    query fetchProducts{
        fetchProducts{
            _id
            seller
            name
            detail
            price
            createdAt
        }
    }
`
const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId: ID){
        deleteProduct(productId: $productId){
            _id
            number
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

    const [deleteProduct] = useMutation(DELETE_PRODUCT)
    const { data } = useQuery(FETCH_PRODUCTS)

    // 버튼을눌렀을때 딜리트, 어떤것을 삭제할지 (게시글의 번호 가져오기 )
    const onClickDelete = (event) => {
        deleteProduct({
            variables:{ productId: event.target.id },
            refetchQueries: [{query: FETCH_PRODUCTS }]
        })
    }
        return (
        <>
            {data?.fetchProducts.map((el, _id)=> (
                //  <Fragment key = {el.number}>
                <Row key = {el._id}>
                    <Column> 체크 : <input type="checkbox" /></Column>
                    <Column> 판매자 : {el.seller}</Column>
                    <Column> 이름 : {el.name}</Column>
                    <Column> 상세정보 :{el.detail}</Column>
                    <Column> 가격 :{el.price}</Column>
                    <Column>
                        <button id={el._id} onClick={onClickDelete}>삭제</button>
                    </Column>
                </Row>
                
            ))}
        </>
    )
}

