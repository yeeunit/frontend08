import { useEffect } from "react"
import * as M from "./kakaoMap.styles"


declare const window: typeof globalThis & {
    kakao: any
}


export default function KakaoMap() {

    useEffect(() => {

        const script = document.createElement("script") // <script></script>
        script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=b4231ee4e877b1e937e9152e088001de&autoload=false"
        document.head.appendChild(script) // 쿼리스트링(이주소에 데이터를 두개보냄 &로 묶음)

        script.onload = () => {

            window.kakao.maps.load(function (){
            const container = document.getElementById('map'); 
            const options = { 
            center: new window.kakao.maps.LatLng(37.485502, 126.8999582), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };
        
            const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
            console.log(map)

            // 마커가 표시될 위치입니다 
            const markerPosition  = new window.kakao.maps.LatLng(37.485502, 126.8999582); 

            // 마커를 생성합니다
            const marker = new window.kakao.maps.Marker({
            position: markerPosition
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);

            window.kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
    
                // 클릭한 위도, 경도 정보를 가져옵니다 
                const latlng = mouseEvent.latLng; 
                
                // 마커 위치를 클릭한 위치로 옮깁니다
                marker.setPosition(latlng);

              
              });

        })
        }
    }, [])

    return(
    <>

        <M.Wrapper>
        <h2> 위치보기 </h2>

        <div id="map" style={{ width: "500px", height: "400px" }}></div>
        </M.Wrapper>
    </>
    )
}