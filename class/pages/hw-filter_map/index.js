// 7/12(화)
// 보너스 문제 1

// 1. 토끼초등학교만 골라낸 후 candy: 10개씩 각각 추가하기
// 2. 다람쥐초등학교만 골라낸 후, name 뒤에 "어린이" 붙이기

export default function ClassmatesPage(){

    const classmates = [
        { name: "철수", age: 10, school : "토끼초등학교" }, 
        { name: "영희", age: 13, school : "다람쥐초등학교" },
        { name: "훈이", age: 11, school : "토끼초등학교" }
      ];
    

// const bbb = ["1 레드향", "2 샤인머스캣", "3 산청딸기"].map(el => <div>{el}</div>)
// const ccc = FRUITS.map(el => <div>{el.number} {el.title}</div>)
// {FRUITS.map(el =>  (<div> {el.number} {el.title} </div>))}

    return (
        <>

classmates= classmates.map(el => {el.school: "토끼초등학교"}.push {candy: 10} )

classmates.map(el => {{el.school: "다람쥐초등학교"}.name} + "어린이")

        </>
    )
}
    
