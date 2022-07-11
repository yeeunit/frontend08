// # 4일차 REST-API & GRAPHQL-API
// ## REST-API 요청하기
// ## GRAPHQL-API 요청하기


import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage(){
    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState(0)
    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onClickGraphqlApi = async () => {
        const result = await createProduct({
            variables: {
                seller: seller,
                createProductInput: {
                    name: name,
                    detail: detail,
                    price: Number(price)
                }
            }
        })
        console.log(result)
        console.log(result.data.createProduct.message)
    }

    const onChangeSeller = (event) => {
        setSeller(event.target.value) 
    }

    const onChangeName = (event) => {
        setName(event.target.value) 
    }

    const onChangeDetail = (event) => {
        setDetail(event.target.value) 
    }

    const onChangePrice = (event) => {
        setPrice(event.target.value) 
    }

    return (
        <div style={{padding: "0 20px 0 20px", margin:"20px", width: "300px", height: "500px", border: "1px solid grey"}}>

        <h2>7/7(목) 숙제</h2>

        <h3> GRAPHQL-API 요청하기</h3>
        <hr />

        <h4> createProduct </h4>
            판매자: <input type="text" onChange={onChangeSeller} /><br /><br />
            
            상품명: <input type="text" onChange={onChangeName} /><br /><br />
            
            상품상세설명: <input type="text" onChange={onChangeDetail} /><br /><br />
            
            상품가격: <input type="text" onChange={onChangePrice} /><br /><br />
            <button onClick={onClickGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
    
        </div>
    )

}



