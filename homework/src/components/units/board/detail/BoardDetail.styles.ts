import styled from "@emotion/styled";
import ReactPlayer from 'react-player'

export const Wrapper = styled.div`
  width: 1000px;
  margin: 100px auto;
  background-color: white;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border: 7px solid #2B3856;

  /* box-shadow: 0px 0px 10px gray; */
`;

export const Header = styled.div`
  width: 100%;
  float: left;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  margin-right: 10px;
  width: 50px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div``;

export const CreatedAt = styled.div``;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
`;

export const Title = styled.h1`
  padding-top: 80px;
`;

export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 50px;
`;


export const Youtube = styled.div`
  width: 800px;
  height: 500px;
  background: #ddd;
`;

export const YoutubePlayer = styled(ReactPlayer)`
  margin: auto;
`;

export const LikeDislike = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  padding: 30px;
`

export const Dislike = styled.div`
  color: red;
`

export const LikeIcon = styled.div`
  color: red;
`

export const DislikeIcon = styled.div`
  color: red;
`

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: gold;
    border-color: white;
  }
`;
