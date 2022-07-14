// 상세보기 [number]


import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'


const FETCH_PRODUCT = gql`
    query fetchProduct($productId: Id){
        fetchProduct(productId: $productId){
            _id
            seller
            name
            detail
            price
            createAt
        }
    }
`

export default function StaticRoutedPage(){
    const router = useRouter()

    const { data } = useQuery(FETCH_PRODUCT, { 
        variables: { productId: router.query._id } 
    })

    console.log(data)

    const onClickMoveToEdit = () => {
        router.push(`/0713-hw-product/${router.query._id}/edit`)
    }

    return (
        <>  
            <div> <h4>0713 Homework</h4>
                <br /> id: {router.query._id}</div>
            <div>판매자: {data ? data.fetchProduct.seller : "받아오는 중 입니다"}</div>
            <div>상품: {data && data.fetchProduct.product}</div>
            <div>가격: {data?.fetchProduct.price}</div>
            <div>설명: {data?.fetchProduct.detail}</div>
            <br />
            <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>
        </>
    )
}