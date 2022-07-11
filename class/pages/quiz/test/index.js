import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'


const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID){
        fetchProduct(productId: $productId){
            _id
            seller
            name
            detail
            price
        }
    }
`

export default function StaticRoutedPage(){

    const router = useRouter()

    const { data } = useQuery(FETCH_PRODUCT, {
        variables: { _id: Number(router.query.Details) }
    } )
    
    console.log(data)

    return(
    <>
        <div> {router.query.Details}번 게시글 이동이 완료되었습니다.</div>
        <div> 판매자 : {data ? data.fetchProduct.seller : "받아오는 중입니다."}</div>
        <div> 상품이름 : {data ? data.fetchProduct.name : "받아오는 중입니다."}</div>
        <div> 상품설명 : {data ? data.fetchProduct.detail : "받아오는 중입니다."}</div>
        <div> 가격 : {data? data.fetchProduct.price : "받아오는 중입니다."}</div>

    </>
    )    
}
