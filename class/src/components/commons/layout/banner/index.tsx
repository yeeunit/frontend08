import styled from '@emotion/styled'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Wrapper = styled.div`
    height : 300px;
    background-color : pink;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const ImgWrapper = styled.div`
   width: 100%;
    height: 200px;
    display: flex;
    flex-direction: row;

`
const Image = styled.img`
    width: 100%;
    height: 100%;
`

export default function LayoutBanner(){

        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,

        };


    return <Wrapper>
            배너영역
            <ImgWrapper>
                <Slider style = {{ width : "100px", margin: "auto"}}  {...settings}>
                    <Image src='/Vector (1).png' />
                    <Image src='/Vector (2).png' />
                    <Image src='/Vector (3).png' />
                </Slider>
            </ImgWrapper>
    </Wrapper>
}