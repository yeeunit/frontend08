import React from "react";
import LazyLoad from "react-lazy-load";

export default function LazyLoadPage() {
  return (
    <div>
      Scroll to load images.
      <div className="filler" />
      <LazyLoad width={500} height={500} offsetVertical={300}>
        <img src="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500} offsetTop={200}>
        <img src="http://apod.nasa.gov/apod/image/1502/2015_02_20_conj_bourque1024.jpg" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500} offsetHorizontal={50}>
        <img src="http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad
        width={500}
        height={500}
        onContentVisible={() => console.log("look ma I have been lazyloaded!")}
      >
        <img src="http://apod.nasa.gov/apod/image/1502/ToadSky_Lane_1080_annotated.jpg" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500} offsetVertical={300}>
        <img src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500} offsetVertical={300}>
        <img src="https://imagescdn.gettyimagesbank.com/500/21/021/255/0/1353964327.jpg" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500} offsetVertical={300}>
        <img src="https://mblogthumb-phinf.pstatic.net/MjAyMDA3MjhfMzcg/MDAxNTk1OTE5OTQ3ODA2.ecxiJRgcYqOwDAodSPyzGb_RluVzfnf7AIF6o97m2XQg.4_8LadIMzCW1yj_ZpavPYxb635t-3aJevVhcIkQXtGQg.JPEG.hyousang/1.jpg?type=w800" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500} offsetVertical={300}>
        <img src="https://thumbnail8.coupangcdn.com/thumbnails/remote/700x700ex/image/vendor_inventory/9afa/3295ba81aa4c9b2e32987d4ae052ac271311a53f08fece10f1d943a5d334.jpg" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500} offsetVertical={300}>
        <img src="https://mblogthumb-phinf.pstatic.net/20160426_255/prodigy_kr_1461677726804gqjqI_JPEG/enhanced-buzz-16341-1387781949-9.jpg?type=w800" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500} offsetVertical={300}>
        <img src="https://t1.daumcdn.net/cfile/blog/18790139502844EB0B" />
      </LazyLoad>
    </div>
  );
}
