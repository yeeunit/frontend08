// 정수 제곱근 판별

function solution(n) {
    let answer = 0;
    for (let x=1; x<=n; x++)
    if ( Math.sqrt(n) === x ){
        answer = (x+1)**
        }
    else{ answer = -1 }
        
    return answer;
}


//

function solution(n) {
    let answer = -1
    for(let i=1; i*i <=n; i++){
        // console.log(i, i*i, n)
        // 제곱근을 찾은경우
        if(i*i===n){
            answer = i+1
            return answer * answer
        }
    } // 제곱근을 못찾은경우
    return answer
}

// return (i+1)**2

// 메서드 


function solution(n) {
    let sqrt = Math.sqrt(n)
    // console.log(Number.isInteger(sqrt)

    if(Number.isInteger(sqrt)){
        return (sqrt+1) **2 // 또는 Math.pow(sqrt+1, 2)
    } else {
        return -1
    }
}

