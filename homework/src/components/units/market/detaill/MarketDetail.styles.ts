import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1000px;
  margin-top: 100px auto;
  background-color: white;
  border: 1px solid #ddd;

`;

export const CardWrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 50px;
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  
  /* border: 7px solid #2B3856; */
  /* box-shadow: 0px 0px 10px gray; */
`;

export const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  /* justify-content: center;
  align-items:stretch;
  border: 1px solid blue; */
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;


export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div`
  color:  #2B3856;
  font-family: "Jua";
  font-size: 18px;
`;

export const CreatedAt = styled.div`
/* color: rebeccapurple; */
`;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
  border: 1px solid #ddd;
`;

export const Title = styled.h1`
  padding-top: 80px;
  border: 1px solid #ddd;

`;

export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 50px;
  border: 1px solid #ccc;
`;


export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* border: 1px solid navy; */

`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  margin: 30px;
`;
export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
`;

export const Button = styled.button`
  width: 120px;
  height: 45px;
  margin: 20px;
  background-color: white;

  color:  #2B3856;
  font-family: "Jua";
  font-size: 18px;
  border: none;
  text-align: center;
  line-height: 40px;

    /* border-radius: 35px; */

  cursor: pointer;

  :hover {
  color : #f5f2fc;
    background-color: #2B3856;
    /* border-bottom: 2px solid #2B3856;; */

    font-weight: 700;
  }
`;
