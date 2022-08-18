// # 4-1. 결제 연동하기(아임포트)

// 3. 이동된 페이지에서 가격을 선택할 수 있는 선택상자와 [ 충전하기 ] 버튼을 만들어 주세요.
// ⇒ 가격은 500원, 1000원, 2000원, 5000원을 선택 가능합니다.
// 4. 가격을 선택하고 [ 충전하기 ] 버튼을 누르면, 해당 금액으로 아임포트 결제화면을 띄워주세요.
// 5. 실제 결제가 완료되면, /pages/quiz06/payment/complete/index.tsx 페이지로 이동해 주세요.


import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

declare const window: typeof globalThis & {
    IMP: any
}

 
// const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
//     mutation  createPointTransactionOfLoading ()???

export default function PaymentPage(){

    const router = useRouter()
    const [price, setPrice] = useState(100)
    
    const onChangePrice = (event) =>{
        setPrice(event.target.value)
    }

    const onClickPayment = () => {
   
        const IMP = window.IMP; 
        IMP.init("imp18058468"); 

        IMP.request_pay(
            { 
                // param
            pg: "nice",
            pay_method: "card",
            // merchant_uid: "ORD20180131-0000011", // 주문번호, 중복 안됨. 없애면 자동 생성
            name: "코드캠프 퀴즈",
            amount: price, 
            
            buyer_email: "000@000.com",
            buyer_name: "정예은",
            buyer_tel: "010-0000-0000",
            buyer_addr: "서울특별시 강남구 신사동",
            buyer_postcode: "01181",
            m_redirect_url: "http://localhost:3000/quiz0811/payment/complete",
            // 모바일
          }, 
          (rsp: any) => { 
            // callback
            if (rsp.success) {
              // 결제 성공 시 로직,
              console.log(rsp)

              // 백엔드에 결제관련 데이터 넘겨주기 => 즉, 뮤테이션 실행하기 
              const paymentDate = new Date()
              // ex, createPointTransactionOfLoading
              router.push( "/quiz0811/payment/complete") 
            } else {
                console.log(rsp)
              // 결제 실패 시 로직,
              alert("결제에 실패했습니다. 다시 시도해주세여!")
            }
          }
        );
    }


    return(
        <div>
            <Head>

                <script 
                type="text/javascript" 
                src="https://code.jquery.com/jquery-1.12.4.min.js" 
                ></script>

                <script 
                type="text/javascript" 
                src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
                ></script>

            </Head>

            <h3>결제하기</h3><br />
            <select onChange={onChangePrice} >

            {/* <select name = 'price' value={optionsState}> */}
                <option value={100}> 100원 </option>
                <option value={500}> 500원 </option>
                <option value={1000}> 1000원 </option>
                <option value={2000}> 2000원 </option>
            </select>
            <br />

            <button onClick={onClickPayment}>충전하기</button>
        </div>
    )
}