import Head from 'next/head'

declare const window: typeof globalThis & {
    IMP: any
}

export default function PaymentPage(){

    const onClickPayment = () => {
        const IMP = window.IMP; // 생략 가능
        IMP.init("imp18058468"); // Example: imp00000000

        IMP.request_pay(
            { 
                // param
            pg: "nice",
            pay_method: "card",
            // merchant_uid: "ORD20180131-0000011", // 주문번호, 중복 안됨. 없애면 자동 생성
            name: "노르웨이 회전 의자",
            amount: 100, // 최소금액 100원
            buyer_email: "gildong@gmail.com",
            buyer_name: "홍길동",
            buyer_tel: "010-0000-0000",
            buyer_addr: "서울특별시 강남구 신사동",
            buyer_postcode: "01181",
            m_redirect_url: "http://localhost:3000/28-01-payment",
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

            {/* <!-- jQuery --> */}
            <script type="text/javascript" 
            src="https://code.jquery.com/jquery-1.12.4.min.js" 
            ></script>

            {/* <!-- iamport.payment.js --> */}
            <script type="text/javascript" 
            src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
            ></script>

            </Head>
            <button onClick={onClickPayment}>결제하기</button>
        </div>
    )
}