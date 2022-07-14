
//1
export default function TypescriptPage(){

//변수설정
    let aaa = "안녕하세요"
    //타입 추론 : 따로 지정 안해도 먼저 설정한 타입으로 생성
    // aaa = 3  타입스크립트에서는 할당 안됨

    //타입명시
    let bbb: String = "반갑습니다" // 타입 지정하기 

    // let bb: Number = "반갑습니다" :스트링을 넘버타입에 할당 불가

    // 문자타입 (선언과 할당 분리)
    let ccc : String 
    ccc = "반가워요!!!"
    ccc = 3

    // 숫자타입
    let ddd: number = 10
    ddd = "철수"

    // 불린타입
    let eee : boolean = true
    eee = false
    eee = "false" // 문자열값이 있어서 true로 작동함!!!

    // 배열타입

    let fff : number[] = [1, 2, 3, 4, 5] //숫자배열 (문자 불가)
    let ggg : string [] = ["철수", "영희", "훈이", 10]
    let hhh : (string | number) [] = ["철수", "영희", "훈이", 10]

    // 객체타입

    interface IProfile {
        name: string
        age : number | String
        school : string
    }

    const profile: IProfile = {
        name : "철수",
        age : 8, 
        school: "다람쥐초등학교"
    }

    profile.age = "8살" // 위에서 문자타입으로 추론되었음 따라서 숫자 할당 불가 ㄸㅏ라서 그위에 아이프로필로 타입 지정


    // 함수타입 - 타입 어디에 넣어야할까?
    // 함수 받는아이가 기준

    const add = (number1: number, number2: number, unit: string): string => {
        return number1 + number2 + unit
        // 숫자+숫자+문자 => 문자 리턴
    }
    const result = add(1000, 2000, "원") // 결과의 타입토 예측 가능 ! 

    // any타입 / 아무타입 가능/ 자바스크립트와 동일 / 서비스규모가 클수록 위험할 수 있음 
    let qqq: any = "철수"
    qqq = 123
    qqq = true


    return (
        <div>타입스크립트 연습하기</div>
    )
}