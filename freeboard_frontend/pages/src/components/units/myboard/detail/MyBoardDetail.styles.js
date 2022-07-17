import styled from "@emotion/styled";

export const Body = styled.div`
    width: 100%;
    height: 100%;
    padding:50px;
    background: #CCCCFF;
    `

export const Wrapper = styled.div`
    margin: 50px auto;
    width: 1000px; 
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    padding: 100px;
    background: white;
`

export const ProfilePhoto = styled.div`
    width: 50px;
    height: 50px;
    float: left;

`
export const Writer = styled.div`
    font-size: 25px;
    font-weight: 500;
    color: #50514F;
    width: 400px;
    height: 50px;
    padding-top: 10px;
    float: left;
`
export const Date = styled.div`
    padding-bottom: 20px;
    font-size: 16px;
    font-weight: 400;
    color: #828282;

`
export const LinkLocation = styled.div`
    float: right;
`

export const Title = styled.div`
    padding-top: 50px ;
    font-size: 36px;
    font-weight: 700;
    color: #FF1654;
`

export const Bodywrap = styled.div`

    border-top: 1px solid grey;

`

export const Images = styled.div`

    margin-top: 40px;
    width: 800px;
    height: 400px;
    background: #f9f9f9;
    color: #FF1654;
`

// export const ImagesMove = styled.div`
//     font-size: 100px;
//     font-weight: 500;
//     color: #FF1654;
//     text-align: center;
//     height : 50px;  
//     line-height: 0px;
//     cursor: pointer; `


export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
  background: #f9f9f9;

`;

export const Youtube = styled.div`
    width: 400px;
    height: 250px;
    filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.2));
    margin-left: 25%;
    background: grey;

`

    export const Video = styled.video`
    width: 480px;
    height: 220px;

    `
export const Grade = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    font-size: 18px;
    margin-top: 30px;
`

export const Like = styled.div`
    width: 70px;
    height: 70px;
    font-size: 20px;
    color: orange;
    margin: 10px;
    line-height: 30px;
`

export const Dislike = styled.div`
    width: 70px;
    height: 70px;
    font-size: 20px;
    color: grey;
    margin: 10px;
    line-height: 30px;
`

// export const CardWrapper = styled.div`
//   border: 1px solid black;
//   padding-top: 80px;
//   padding-bottom: 100px;
//   padding-left: 102px;
//   padding-right: 102px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border: none;
//   box-shadow: 0px 0px 10px gray;
// `;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

// 하단 버튼
export const Footer = styled.div`
    display: flex;
    flex-direction : column;
    align-items: center;

`

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 1000px; 
  height: 100px;
  border-bottom : 1px solid grey;

`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: #2B3856;
  color: white;
  font-size: 18px;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;
  
  `

export const CommentWrap = styled.div`
    width: 1000px; 
    display: flex;
    flex-direction : column;            

`
export const CommentTitle = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: #FF1654;
    padding-top: 10px;
    float: left;
`
export const CommentBox = styled.input`
    width: 1000px; 
    border: 1px solid #BDBDBD;
    background: #f9f9f9;
    height: 100px;
    padding-left: 20px;
    margin-bottom: 20px;

`

export const CommentBtn = styled.button`
    width: 120px;
    height: 40px;
    background: #2B3856;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: white;
    cursor: pointer;
    margin-bottom: 20px;

`

export const CommentList = styled.div`
    font-size: 20px;
    font-weight: 400;
    color: #FF1654;
    padding-top: 10px;
    float: left;
    width: 1000px; 
    border: 1px solid #BDBDBD;
    background: #f9f9f9;
    height: 100px;
    padding-left: 20px;
    margin-bottom: 20px;


`

// export const AvatarWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

// export const Avatar = styled.img`
//   margin-right: 10px;
// `;

// export const Info = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

// export const CreatedAt = styled.div``;


//   :hover {
//     background-color: gold;
//     border-color: white;
//   }
// `;


// 댓글 