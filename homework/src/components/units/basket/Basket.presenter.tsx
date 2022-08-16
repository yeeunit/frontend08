import * as B from "./Basket.styles"

export default function BasketUI(){

    return(
        <>
        <B.Wrapper>
        <h1>장바구니</h1>


        <div style={{padding: "40px"}}>
        <h1 style={{marginBottom:"20px", textAlign:"center", color:"#2B3856", }}>  비회원 장바구니 담기 </h1>


        <TableTop>
        <div style={{width:"40%"}}>작성일</div>
        <div style={{width:"30%"}}>작성자</div>
        <div style={{width:"30%"}}>제목</div>

        </TableTop>


        {basketItems.map((el) => (
          <Row key={el._id}>
            <Column onClick={onClickSaveLocal(el)} style={{width:"40%"}}>
                {el._id}
            </Column>
            <Column onClick={onClickSaveLocal(el)} style={{width:"30%"}}>
                {el.writer}
            </Column>
            <Column onClick={onClickSaveLocal(el)} style={{width:"30%"}}>
                {el.title}
            </Column>
           

          </Row>
        ))}

        <br /><br />
        <h3>Today</h3>

        {/* <button onClick={onClickLoadLocal}>로컬 조회</button> */}
        
        <div>
        {baskets.map((el) => (
          <Row key={el._id}>
            <Column>{getDate(date)}</Column>
            <Column>{el.writer}</Column>
            <Column>{el.title}</Column>
          </Row>
        ))}
      </div>



        </div>

        </B.Wrapper>
        </>
    )
}