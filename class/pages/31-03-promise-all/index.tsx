
export default function PromiseAllPage() {

    const onClickPromise = async () => {    
        console.time("시작!")

        // 성공시 리졸브 실패시 리젝트
        const result1 = await new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve('철수')
            }, 3000)
        })
        console.log(result1)


        const result2 = await new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve('영희')
            }, 1000)
        })
        console.log(result2)


        const result3 = await new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve('훈이')
            }, 2000)
        })
        console.log(result3)

        console.timeEnd("시작!")

    } // 3초후 아랫줄 실행

    
    const onClickPromiseAll = async () => {
        console.time("시작")

        const results = await Promise.all([
            new Promise((resolve, reject) => {
                setTimeout(()=>{
                resolve('철수')
                }, 3000)
            }), 
            new Promise((resolve, reject) => {
                setTimeout(()=>{
                resolve('영희')
                }, 1000)
            }), 
            new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve('훈이')
            }, 2000)
        })
    ]) // 괄호안 배열 들어가야함
    console.log(results)
    console.timeEnd("시작")
    }


    return(
        <>
        <button onClick={onClickPromise}>프로미스연습</button>
        <button onClick={onClickPromiseAll}>Promise.all 연습하기</button>
        </>
    )

}