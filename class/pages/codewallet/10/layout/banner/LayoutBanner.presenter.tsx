import { SliderItem, Wrapper } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
      >
        <div>
          <SliderItem src="/images/layout/banner01.png" />
        </div>
        <div>
          <SliderItem src="/images/layout/banner01.png" />
        </div>
        <div>
          <SliderItem src="/images/layout/banner01.png" />
        </div>
      </Slider>
    </Wrapper>
  );
}
