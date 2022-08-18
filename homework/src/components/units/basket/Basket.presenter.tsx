import { getDate } from "../../../commons/libraries/utils"
import * as B from "./Basket.styles"

export default function BasketUI(props){

    return(
        <>
        <B.Wrapper>
        <h1>나의 장바구니</h1>


        <div style={{padding: "40px"}}>
        
        <B.TableTop>
        <div style={{width:"40%"}}>작성일</div>
        <div style={{width:"30%"}}>작성자</div>
        <div style={{width:"30%"}}>제목</div>

        </B.TableTop>

{/* 
        {baskets.map((el) => (
          <B.Row key={el._id}>
            <B.Column onClick={props.onClickBasket(el)} style={{width:"40%"}}>
                {el._id}
            </B.Column>
            <B.Column onClick={props.onClickBasket(el)} style={{width:"30%"}}>
                {el.writer}
            </B.Column>
            <B.Column onClick={props.onClickBasket(el)} style={{width:"30%"}}>
                {el.title}
            </B.Column>
           

          </B.Row>
        ))} */}

        <br /><br />
        <h3>Today</h3>

        {/* <button onClick={onClickLoadLocal}>로컬 조회</button> */}
        
        <div>
        {/* {baskets.map((el) => (
          <B.Row key={el._id}>
            <B.Column>{getDate(date)}</B.Column>
            <B.Column>{el.writer}</B.Column>
            <B.Column>{el.title}</B.Column>
          </B.Row>
        ))} */}
      </div>



        </div>

        </B.Wrapper>
        </>
    )
}