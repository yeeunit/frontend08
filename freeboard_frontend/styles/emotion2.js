import styled from '@emotion/styled'

export const Wrapper = styled.div`
    width: 1200px; 
    margin: 100px auto;
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`
export const Header = styled.div`
    width: 100%;

`

export const ProfilePhoto = styled.div`
    width: 50px;
    height: 50px;
    float: left;
    margin-right: 10px;
`
export const Writer = styled.div`
    font-size: 24px;
    font-weight: 500;
    color: #50514F;
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
    width: 996px;
    height: 480px;
    background: #f9f9f9;
    color: #FF1654;
`

export const ImagesMove = styled.div`
    font-size: 100px;
    font-weight: 500;
    color: #FF1654;
    text-align: center;
    height : 50px;  
    line-height: 0px;
    cursor: pointer;

`

export const Contents = styled.div`
    margin: 30px 0 70px 0;
    padding: 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    background: #f9f9f9;
    color: #FF1654;

`

export const Youtube = styled.div`
    width: 500px;
    height: 260px;
    filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.2));
    margin-left: 25%;

`

export const Video = styled.video`
width: 480px;
height: 220px;


`
export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    font-size: 18px;
    margin-top: 30px;
`


export const Like = styled.div`
    width: 60px;
    height: 60px;
    font-size: 18px;
    color: orange;
    margin: 10px;
    line-height: 30px;

`


export const Dislike = styled.div`
    width: 60px;
    height: 60px;
    font-size: 18px;
    color: grey;
    margin: 10px;
    line-height: 30px;


`