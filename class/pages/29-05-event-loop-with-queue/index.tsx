export default function Event(){

    const onClickTimer =() =>{

        console.log("시작")
         // 비동기작업(매크로큐에 들어감)
        setTimeout(() =>{
            console.log("저는 셋타임아웃 매크로큐 실행")
        }, 0)

        // 비동기작업(마이크로큐에 들어감)
        new Promise((resolve, reject) => {
            resolve("철수")
        }).then((res) => {
            console.log("저는 프로미스 마이크로큐 -1")
        })

        // 비동기작업(매크로큐에 들어감)
        setInterval(() =>{
            console.log("저는 setInvervel 매크로큐 실행")
        }, 0)

        let sum =0
        for (let i = 0; i <= 90000; i += 1){
            sum = sum + 1
        }

        // 비동기작업(마이크로큐에 들어감)
        new Promise((resolve, reject) => {
            resolve("철수")
        }).then((res) => {
            console.log("저는 프로미스 마이크로큐-2")
        })

        console.log("종료")
    }

    return <button onClick={onClickTimer}> setTime</button>

}
