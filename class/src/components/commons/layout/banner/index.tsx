import styled from '@emotion/styled'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Wrapper = styled.div`
    height : 400px;
    background-color : pink;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
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


    return (
    <>
    <Wrapper>
            <ImgWrapper>
                <Slider style = {{ width : "300px", margin: "auto"}}  {...settings}>
                    <Image src='/images/IMG_3561.JPG' />
                    <Image src='/images/IMG_4054.jpg' />
                    <Image src='/images/IMG_8119.jpg' />
                </Slider>
            </ImgWrapper>
    </Wrapper>
    </>
    )
}