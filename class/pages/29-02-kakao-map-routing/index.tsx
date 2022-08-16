import { useRouter } from "next/router"
import Link from 'next/link'


export default function KakaoMapPage(){

    const router = useRouter()
    const onClickMoveToMap = () => {
        router.push("/29-03-kakao-map-routed")
    }
    // 엔터를 다시 치면 가능/ CSR보다 느림

    return(
    <>
{/* 
       <button onClick={onClickMoveToMap}>맵으로 이동하기 </button> */}

       {/* <button> 
            <a href="/29-03-kakao-map-routed"> 맵으로 이동하기 </a>
       </button> */}

       <Link href="/29-03-kakao-map-routed">
       <a> 맵으로 이동하기 </a></Link>
{/* 
       페이지 이동은 가급적 링크태그 쓰기! 
       검색엔진도 최적화되고 빠름 */}

    </>
    )
}

// 검색엔진 측면에서 라우터 푸시(CSR기능은 빠르지만)는 안조음
// (앵커태그도 느림) 따라서 두개 합친것은 link! 
// 등록하기 버튼은 함수 사용 후 라우터푸쉬로 할수밖에 없음 