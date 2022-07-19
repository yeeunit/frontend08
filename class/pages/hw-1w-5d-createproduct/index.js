// 5일차 숙제 ## 다이나믹 라우팅 & 데이터 조회

// 4. 상세보기 화면으로 동적 라우팅하여 이동해 주세요**(응답으로 받은 상품ID 활용)**
// 5. 동적라우팅된 화면에서 주소에 있는 상품ID를 가져오고**(router.query 활용)**, 가져온 상품ID로 fetchProduct를 활용하여 상품 정보를 조회해 주세요.
// 6. 조회한 상품 정보를 화면에 보여주세요.
// 7. 비동기 방식으로 컴포넌트가 렌더링되기 때문에, 아직 받아오지 못한 상품 data가 없어서 에러가 발생하나요? 그렇다면, 조건부 렌더링의 **&& 연산자**를 사용해 보세요.
// 8. 위 7번의 &&연산자를 **옵셔널 체이닝**을 사용해서 변경해 보세요.
// 9. data가 없을 때, 초기 상태를 loading... 으로 표기해 주세요.(**삼항 연산자**를 사용하면 되겠죠?)


import { Fragment, useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'


const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, 
    $createProductInput: CreateProductInput!){
        createProduct(seller: $seller,
            createProductInput: $createProductInput){
                _id
                number
                message
            }
        }  
`

export default function HomeworkPracticePage(){

    const router = useRouter()

    const [seller, setSeller] = useState("")    
    const [product, setProduct] = useState("")    
    const [productContents, setProductContents] = useState("")  
    const [price, setPrice] = useState("")  

    const [sellerError, setSellerError] = useState("")
    const [productError, setProductError] = useState("")
    const [productContentsError, setProductContentsError] = useState("")
    const [priceError, setPriceError] = useState("")
    const [priceError2, setPriceError2] = useState("")
    const [complete, setCompleteMessage] = useState("")
        
    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onClickCreateProduct = async () => {

        if(!seller){
            setSellerError("상품명을 입력하세요")
            setCompleteMessage("")
        } 
        if(!product){
            setProductError("상품명을 입력하세요.")
            setCompleteMessage("")
        } 
        if(!productContents){
            setProductContentsError("상품 내용을 입력하세요.")
            setCompleteMessage("")
        } 
        if(!price){
            setPriceError("가격을 입력하세요.")
            setCompleteMessage("")
        } 
        if(isNaN(price)){
            setPriceError2("숫자만 입력하세요.")
            setCompleteMessage("")
            // parseInt("price")??? 
        } 
        if( seller!=="" && product!=="" && 
        productContents!=="" && price!=="" && !isNaN(price)) {
            setCompleteMessage("상품등록 완료 🎉")
            alert("상품 등록이 완료됐습니다!")

            try {
                const result = await createProduct({
                    variables: {
                        seller: seller,
                        createProductInput: {
                            name: product,
                            detail: productContents,
                            price: Number(price)}
                        }
                })

            console.log("아이디는 " + result.data.createProduct._id)

            router.push(`/hw-1w-5d-productdetails/${result.data.createProduct._id}`)

            ///// 질문 왜 productId아니고 _id???

            
            } catch (error){
                 console.log(error.message)
                 alert("실패했습니다.")
             } // 이메시지는? 
        }  
    }   

    const onChangeSeller = (event) => {
        setSeller(event.target.value);
        if(event.target.value !== ""){
            setSellerError("")}
    }

    const onChangeProduct = (event) => {
        setProduct(event.target.value);
        if(event.target.value !== ""){
            setProductError("")}
    }

    const onChangeProductContents = (event) => {
        setProductContents(event.target.value);
        if(event.target.value !== ""){
            setProductContentsError("")}
    }

    const onChangePrice = (event) => {
        setPrice(event.target.value);
        if(event.target.value !== ""){
            setPriceError("")
            setPriceError2("")}
    }


    return (

        <Fragment>

            <div style={{padding: "0 20px 0 20px", margin:"20px", width: "500px", border: "1px solid grey"}}>
            <h2 style={{textAlign: "center"}}> Homework / 2022.07.08.(금) </h2><hr/>
            <h3> 다이나믹 라우팅 &#38; 데이터 조회 (상품등록화면 만들기)</h3> 

            <h4>상품등록을 해봅시다.</h4> 
            
                <div>
                판매자 : <input type="text" placeholder="판매자"
                onChange={onChangeSeller} /><br/>
                    <div style={{ color: "red" }}>
                    {sellerError}</div>
                </div>
                <br/>

                <div>
                상품명 : <input type="text" placeholder="상품명"
                onChange={onChangeProduct} /><br/>
                    <div style={{ color: "red" }}>
                    {productError}</div>
                </div>
                <br/>

                <div>
                상품내용 : <input type="text" placeholder="상품내용"
                onChange={onChangeProductContents} />
                    <div style={{ color: "red" }}>
                    {productContentsError}</div>
                </div><br/>

                <div>
                상품가격 : <input type="text" placeholder="상품가격"
                onChange={onChangePrice} />
                    <div style={{ color: "red" }}>
                    {priceError}
                    {priceError2}</div>
                </div><br/><br/>

                <div>
                    <button onClick={onClickCreateProduct}>
                    상품등록</button> &nbsp;
                    <span style={{ color: "blue" }}>
                        {complete}</span>
                </div><br/>    
        
            </div>
        </Fragment>
    )

}