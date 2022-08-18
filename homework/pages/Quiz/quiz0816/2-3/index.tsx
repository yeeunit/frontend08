// # 2-3. 이미지 확장자를 webp로 변경해 주세요.
// 변경된 webp확장자의 이미지를 <img />태그를 사용해서 화면에 나타내 보세요.


import { useState } from "react";

export default function ImagePreloadPage() {

  const [isLoaded, setIsLoaded] = useState(false)
  const onClickLoad = () => {setIsLoaded(true)}

return (
  <>
    { isLoaded && ( <img src ="/images/t.webp" /> ) }
      <button onClick={onClickLoad}>이미지올려!</button>
  </>
  );
}



// import { useEffect, useRef, useState } from "react";

// export default function ImagePreloadPage() {

  // const [imgTag, setImgTag] = useState<HTMLImageElement>();
  // const divRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const img = new Image();
  //   img.src = "/t.webp";
  //   img.onload = () => {
  //     setImgTag(img);
  //   };
  // }, []);

  // const onClickPreload = () => {
  //   if (imgTag) divRef.current?.appendChild(imgTag);
  // };

  // return (
  //   <>
      {/* <div ref={divRef}></div> */}
      {/* <img src="/images/t.webp" /> */}
      {/* <button onClick={onClickPreload}>프리로드</button> */}
//     </>
//   );
// }



