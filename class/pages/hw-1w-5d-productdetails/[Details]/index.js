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
    console.log(router)
    console.log(router.query)
    console.log(router.query.Details)
    
    const { data } = useQuery(FETCH_PRODUCT, {
        variables: {
            productId: router.query.Details }
    } )
    
    console.log(data)

    return(
    <>
        {/* <div> ID: {router.query.ID}</div> */}
        <div> 판매자 : {data? data.fetchProduct.seller : "받아오는 중입니다."}</div>
        <div> 상품이름 : {data? data.fetchProduct.name : "받아오는 중입니다."}</div>
        <div> 상품설명 : {data? data.fetchProduct.detail : "받아오는 중입니다."}</div>
        <div> 가격 : {data? data.fetchProduct.price : "받아오는 중입니다."}</div>
    </>
    )    
}
