// # 5-1. 지도 연동하기(카카오지도)

// 1. 카카오개발자 사이트에 회원가입하고 앱을 만들어 주세요.(이미 앱이 있다면, 새로 만들어 주세요.)
// 2. 사이트를 등록(http://localhost:3000)하고, 발급 받은 javascript 키를 복사해 주세요.
// 3. /pages/quiz06/map1/index.tsx 페이지를 만들고, 카카오 지도를 그려주세요.
// 4. /pages/quiz06/map2/index.tsx 페이지를 만들고, [이동하기] 버튼을 하나 만들어 주세요.
// ⇒ [ 이동하기 ] 버튼을 클릭하면 /pages/quiz06/map1/index.tsx로 router.push 하여 이동해 주세요.
// ⇒ 이 때, 에러가 발생한다면, 발생하지 않도록 수정해 주세요.
// 5. 카카오 지도에 마커를 표시해 주세요.
// ⇒ 마커의 위치는 자신이 좋아하는 장소를 표시하면 됩니다.
// 6. 클릭한 위치에따라 마커가 이동되도록 만들어 주세요.
// 7. 마커의 이미지를 자신이 좋아하는 이미지로 변경해 주세요.


import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=b4231ee4e877b1e937e9152e088001de&autoload=false";
    document.head.appendChild(script);



    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.485628, 126.896398), // 지도의 중심좌표.
          level: 2, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        console.log(map);

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
            37.485628, 126.896398
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      

        window.kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
    
        // 클릭한 위도, 경도 정보를 가져옵니다 
        const latlng = mouseEvent.latLng; 
        

        // 마커 위치를 클릭한 위치로 옮깁니다
        marker.setPosition(latlng);
        
        // var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
        // message += '경도는 ' + latlng.getLng() + ' 입니다';
        
        // var resultDiv = document.getElementById('clickLatlng'); 
        // resultDiv.innerHTML = message;
      
      });

    })
  }

  }, []);


  return (
    <>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=cfdf1830a138b5b636a4b8216d821441"
        ></script>
      </Head> */}
      <div id="map" style={{ width: "800px", height: "600px", border: "2px solid black"}}></div>
    </>
  );
}
