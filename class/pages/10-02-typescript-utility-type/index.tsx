
export default function TypescriptPage(){
    interface IProfile {
        name: String
        age: number
        school : string
        hobby?: string
    }

    // 위의 IProfil에서 가져오기
    //1. Pick 타입
    type IProfile2 = Pick<IProfile, "name" | "age">

    //2. Omit 타입
    type IProfile3 = Omit<IProfile, "school">

    //3. Partial 타입 모두 물음표
    type IProfile4 = Partial<IProfile>

    //4. Required 타입 모두 물음표
    type IProfile5 = Required<IProfile>

    //5. Record 타입 
    type ZZZ = "aaa" | "qqq" | "sss" //Union 타입
    let apple : ZZZ
    apple = "qqq" // 위의 세개중 설정

    type IProfile6 = Record<ZZZ, IProfile>

    // =========== 타입과 인터페이스 차이 : 선언병합의 차이 ==========
    interface IProfile { 
        candy: number
    }

    let profile : Partial<IProfile> = {}
    profile.hobby 
    profile.age
    profile.candy = 10
    profile.name
    profile.school


    return (
        <div>타입스크립트 연습하기</div>
    )
}