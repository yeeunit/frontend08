import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100px;
  /* border-bottom: 1px solid #fff;
  border-top: 1px solid #fff; */
  background-color: #2B3856;
  /* background-color: #C24641; */

`;

export const MenuWrap = styled.div`
  width: 500px;
  height: 100px;
  display: flex;
  flex-direction: row ;
  align-items: center;
  `

export const MenuItem = styled.div`
  /* background-color: #fff; */
  color:  white;
  border-radius: 50px;
  width: 150px;
  height: 40px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 40px;
  font-family: "Jua";

  cursor: pointer;

  :hover {
    /* background-color: #f5f2fc; */
    color: wheat;
  }
`;

// #2B3856;