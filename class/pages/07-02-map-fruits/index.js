const FRUITS = [
    { number: 1, title: "레드향" }, // <div>1 레드향</div>
    { number: 2, title: "샤인머스켓" }, // <div>2 샤인머스켓</div>
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
  ];

// 상수값, 변하지 않는, 하드코딩 값들은 export 밖에두어 리렌더링 되지 않도록함 (메모리 절약)


export default function MapFruitsPage(){

const aaa = [<div>1 레드향</div>,
            <div>2 샤인머스캣</div>,
            <div>3 산청딸기</div>,]

const bbb 
= ["1 레드향", "2 샤인머스캣", "3 산청딸기"].map(el => <div>{el}</div>)
// aaa와 동일함

const ccc = FRUITS.map(el => <div>{el.number} {el.title}</div>)


    return (
    
        <>
        <div>
            {aaa} 
            {/* // {bbb} {ccc} 와 동일 / for문보다 map을 사용하게 될것*/}
        </div>   
    
            {FRUITS.map(el =>  (
                <div> {el.number} {el.title} </div>
            ))}
            
         </>
    )
}
    
