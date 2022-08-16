import * as B from "./LayoutBanner.styles"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import styled from "@emotion/styled";

export default function LayoutBannerUI() {

    const settings = {
        
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    }

    return(
    <>
      <B.Wrapper>
        
        <Slider 
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
      
      >
        <div>
          <B.SliderItem src="/images/la1.JPG" />
        </div>
        
        <div>
          <B.SliderItem src="/images/la2.JPG" />
        </div>

        <div>
          <B.SliderItem src="/images/la3.JPG" />
        </div>

        <div>
          <B.SliderItem src="/images/la5.JPG" />
        </div>
        </Slider>

      </B.Wrapper>

    </>
    )
}

