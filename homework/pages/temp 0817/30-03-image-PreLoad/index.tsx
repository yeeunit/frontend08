import { useEffect, useRef, useState } from "react";

export default function ImagePreloadPage() {
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://photo.coolenjoy.co.kr/data/editor/1701/Bimg_20170117170029_eifhrhpl.jpg";
    img.onload = () => {
      setImgTag(img);
    };
  }, []);

  const onClickPreload = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
  };

  return (
    <>
      <div ref={divRef}></div>
      <button onClick={onClickPreload}>PreLoad</button>
    </>
  );
}
