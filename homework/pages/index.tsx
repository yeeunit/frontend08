import styled from "@emotion/styled";
import Link from "next/link";

export default function Home() {

  const Div = styled.div`
    color: #2B3856;
    font-size: 20px;
    display: inline-block;
    padding: 20px 0 0 30px; 
    cursor: pointer;
    font-family: "Jua";
  `

  const Span = styled.span`
  border-bottom: 2px solid white;
  padding-bottom: 10px;
  `
//#2B3856 #C24641

  return (
  <>
    <img src="/images/la4.JPG" width={1000} style={{float:"left"}} />
    
     <Div>
    <Span> 
      <Link href="/boards/join">
        <a > Move to JOIN </a>
      </Link>
    </Span>
    </Div><br />

    <Div>
    <Span> 
      <Link href="/boards/login">
        <a > Move to LOGIN </a>
      </Link>
    </Span>
    </Div><br />

    <Div>
    <Span> 
      <Link href="/boards/">
        <a > Move to LIST </a>
      </Link>
    </Span>
    </Div><br />

    <Div>
    <Span> 
      <Link href="/boards/new">
        <a > Move to REGISTER </a>
      </Link>
    </Span>
    </Div><br />

    <Div>
    <Span> 
      <Link href="/boards/basket">
        <a > Move to BASKET </a>
      </Link>
    </Span>
    </Div><br />


    <Div>
    <Span> 
      <Link href="/boards/payment">
        <a > Move to PAYMENT </a>
      </Link>
    </Span>
    </Div><br />



    </>
  )
}

//#2B3856 #C24641

