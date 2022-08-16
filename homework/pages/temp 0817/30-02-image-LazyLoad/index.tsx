import React from "react";
import LazyLoad from "react-lazy-load";

export default function LazyLoadPage() {
  return (
    <div>
      Scroll to load images.
      <div className="filler" />
      <LazyLoad width={500} height={500} offsetVertical={300}>
        <img src="https://www.techradar.com/best/free-stock-photos" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500} offsetTop={200}>
        <img src="https://www.techradar.com/best/free-stock-photos" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500} offsetHorizontal={50}>
        <img src="https://www.techradar.com/best/free-stock-photos" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad
        width={500}
        height={500}
        onContentVisible={() => console.log("look ma I have been lazyloaded!")}
      >
        <img src="https://www.techradar.com/best/free-stock-photos" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500} offsetVertical={300}>
        <img src="https://www.techradar.com/best/free-stock-photos" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500} offsetVertical={300}>
        <img src="https://www.techradar.com/best/free-stock-photos" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500} offsetVertical={300}>
        <img src="https://www.techradar.com/best/free-stock-photos" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500} offsetVertical={300}>
        <img src="https://www.techradar.com/best/free-stock-photos" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500} offsetVertical={300}>
        <img src="https://www.techradar.com/best/free-stock-photos" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad width={500} height={500} offsetVertical={300}>
        <img src="https://www.techradar.com/best/free-stock-photos" />
      </LazyLoad>
    </div>
  );
}
