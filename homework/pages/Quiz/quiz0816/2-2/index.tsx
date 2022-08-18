// # 2-2. LazyLoad 와 PreLoad적용하기
// 1. 사이즈(가로: 500px, 세로: 500px)인 이미지 10개를 세로로 렌더링 하고, LazyLoad를 적용해 주세요.
// ⇒ 스크롤을 내릴 때 마다 이미지를 조금씩 다운로드 받아와야 합니다.(네트워크 탭을 켜고 확인해 주세요.)
// 2. 아래처럼 [ 이미지 보여주기 ] 버튼을 만들고, 이 버튼을 눌렀을 때 PreLoad 된 이미지를 보여주세요
// ⇒ 이미지가 나타날 때, 네트워크 탭에서 새롭게 이미지를 다운로드 받지 않아야 합니다.


import React from "react";

import { useEffect, useRef, useState } from "react"
import LazyLoad from 'react-lazy-load';

export default function ImageUploadPage(){

    const [imgTag, setImgTag] = useState<HTMLImageElement>()
    const divRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        const img = new Image()
        img.src = "https://hips.hearstapps.com/hmg-prod/images/kristen-stewart-attends-the-screening-of-crimes-of-the-news-photo-1653396785.jpg?resize=480:*"

        img.onload = () => {
            setImgTag(img)
        }
    }, [])


    const onClickPreload = () => {
        if(imgTag) divRef.current?.appendChild(imgTag)
    }


    return(
        <>
        <div ref={divRef}> </div>
        <button onClick={onClickPreload}>이미지 프리로드</button>

        ======================================================


        <h3>이미지 레이지 로드!</h3>

    <div>
      Scroll to load images.
      <div className="filler" />

      <LazyLoad width={500} height={500}>
        <img src="https://histimes.com/wp-content/uploads/2022/08/Kristen-Stewart-2-780x470.jpg" />
      </LazyLoad>

      <div className="filler" />
      <LazyLoad width={500} height={500} >
      <img src="https://histimes.com/wp-content/uploads/2022/08/Kristen-Stewart-2-780x470.jpg" />
      </LazyLoad>
      
      <div className="filler" />
      <LazyLoad width={500} height={500}>
      <img src="https://histimes.com/wp-content/uploads/2022/08/Kristen-Stewart-2-780x470.jpg" />
      </LazyLoad>

      <div className="filler" />
      <LazyLoad
        width={500} height={500} >
      <img src="https://histimes.com/wp-content/uploads/2022/08/Kristen-Stewart-2-780x470.jpg" />
      </LazyLoad>
      
      <div className="filler" />
      <LazyLoad width={500} height={500} >
      <img src="https://histimes.com/wp-content/uploads/2022/08/Kristen-Stewart-2-780x470.jpg" />
      </LazyLoad>

      <div className="filler" />
      <LazyLoad width={500} height={500} >
      <img src="https://histimes.com/wp-content/uploads/2022/08/Kristen-Stewart-2-780x470.jpg" />
      </LazyLoad>

      <div className="filler" />
      <LazyLoad width={500} height={500}>
      <img src="https://histimes.com/wp-content/uploads/2022/08/Kristen-Stewart-2-780x470.jpg" />
      </LazyLoad>

      <div className="filler" />
      <LazyLoad width={500} height={500} >
      <img src="https://histimes.com/wp-content/uploads/2022/08/Kristen-Stewart-2-780x470.jpg" />
      </LazyLoad>

      <div className="filler" />
      <LazyLoad width={500} height={500} >
      <img src="https://histimes.com/wp-content/uploads/2022/08/Kristen-Stewart-2-780x470.jpg" />
      </LazyLoad>

      <div className="filler" />
      <LazyLoad width={500} height={500} >
      <img src="https://histimes.com/wp-content/uploads/2022/08/Kristen-Stewart-2-780x470.jpg" />
      </LazyLoad>

    </div>
        
        </>
    )
}