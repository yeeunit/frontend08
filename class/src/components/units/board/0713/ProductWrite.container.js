import { useMutation } from '@apollo/client'
import { useState } from 'react'
import ProductWrite_UI from './ProductWrite.presenter'
import { CREATE_PRODUCT } from './ProductWrite.queries'


export default function ProductWrite(){

    const [seller, setSeller] = useState("")
    const [product, setProduct] = useState("")
    const [price, setPrice] = useState("")
    const [detail, setDetail] = useState("")

    const [mycolor, setMycolor] = useState(false)

    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onClickGraphqlApi = async () => {
        const result = await createProduct({
            variables: {
                $seller: seller,
                $createProductInput: createProductInput
            }
        })
        console.log(result)
        console.log(result.data.createProduct.message)
    }

    const onChangeSeller = (event) => {
        setSeller(event.target.value) 

        if(event.target.value && product && price && detail) {
            setMycolor(true)
        }
    }

    const onChangeProduct = (event) => {
        setProduct(event.target.value)

        if(seller && event.target.value && price && detail) {
            setMycolor(true)
        }
    }

    const onChangePrice = (event) => {
        setPrice(event.target.value) 

        if(seller && product && event.target.value && detail) {
            setMycolor(true)
        }
    }

    const onChangeDetail = (event) => {
        setDetail(event.target.value) 

        if(seller && product && price && event.target.value) {
            setMycolor(true)
        }
        // else {
        //     setMycolor(false)
        // }
    }

    // const onChangeWriteColor = () => {

    //     if(writer && title  && contents)
    //     {alert("입력되었음"); 
    //     setMycolor(true) 
    // }

        // if(!name)
        // {setNameError("이름을 입력하세요");}
        // if(!password){setPwError("비밀번호를 입력하세요");}
        // if(!title){setTitleError("제목을 입력하세요");}
        // if(!contents){setContentsError("내용을 입력하세요");}


    return (
        <ProductWrite_UI 
        onClickGraphqlApi={onClickGraphqlApi} //aaa대신
        
        onChangeSeller={onChangeSeller}
        onChangeProduct={onChangeProduct}
        onChangePrice={onChangePrice}
        onChangeDetail={onChangeDetail} 

        mycolor = {mycolor}
        /> 
    )
}