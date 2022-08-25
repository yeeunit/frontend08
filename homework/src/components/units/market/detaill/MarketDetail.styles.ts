import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1000px;
  /* margin-top: 100px auto; */
  background-color: white;
  border: 1px solid #ddd;
`;

export const CardWrapper = styled.div`
  padding: 80px 100px 50px 100px;
  display: flex;
  flex-direction: column;

  /* border: 7px solid #2B3856; */
  /* box-shadow: 0px 0px 10px gray; */
`;

export const Heart = styled.div`
  /* border: 1px solid red; */
  cursor: pointer;
`;
export const Header = styled.div`
  width: 800px;
  border: 1px solid #bdbdbd;
  /* display: flex;
  flex-direction: row; */
  justify-content: space-between;
  padding: 20px;
  /* border: 1px solid blue; */
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  display: inline-block;
  /* background-color: pink; */
`;

export const Info = styled.div`
  display: flex;
  /* border: 1px solid red; */
  display: inline-block;
  float: right;

  /* flex-direction: column; */
  /* justify-content: center; */
`;

export const Writer = styled.div`
  color: #2b3856;
  font-size: 22px;
  display: inline-block;
`;

export const CreatedAt = styled.div`
  color: #2b3856;
  float: right;
`;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
  border: 1px solid #ddd;
`;

export const Title = styled.div`
  width: 100%;
  padding: 30px;
  /* border: 1px solid red; */
`;

export const Price = styled.span`
  font-weight: 500;
  font-size: 33px;
`;

export const Contents = styled.div`
  padding-top: 40px;
  padding: 30px;
  margin: 20px;
  border: 1px solid #ccc;
  font-size: 22px;
`;
export const Tags = styled.span`
  height: 30px;
  padding: 5px 20px;
  background: #ffe004;
  border-radius: 10px;
  text-align: center;
  line-height: 30px;
  margin: 0 10px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 30px;
  /* border: 1px solid navy; */
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  margin: 30px;
`;

export const MapWrap = styled.div`
  width: 792px;
  height: 360px;
  /* background-color: #ddd; */
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

  color: #2b3856;
  font-family: "Jua";
  font-size: 18px;
  border: none;
  text-align: center;
  line-height: 40px;

  /* border-radius: 35px; */

  cursor: pointer;

  :hover {
    color: #f5f2fc;
    background-color: #2b3856;
    /* border-bottom: 2px solid #2B3856;; */

    font-weight: 700;
  }
`;
