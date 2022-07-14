
import * as P from './ProductWrite.styles'

export default function ProductWrite_UI(props){

    return (
        <>
        <P.Wrapper>
            판매자 : <P.RedInput type="text" onChange={props.onChangeSeller} /><br />
            상품: <P.RedInput type="text" onChange={props.onChangeProduct} /><br />
            가격: <P.RedInput type="text" onChange={props.onChangePrice} /><br />
            내용: <P.RedInput type="text" onChange={props.onChangeDetail} /><br />


            <P.GreenButton 
            myname={props.mycolor} 
            onClick={props.onClickGraphqlApi}>

            GRAPHQL-API 요청하기!

            </P.GreenButton>
        </P.Wrapper>

{/* 
             <S.RedButton onClick={onClickGraphqlApi}>
                GRAPHQL-API 요청하기!!!
            </S.RedButton> */}
        </>
    )
}