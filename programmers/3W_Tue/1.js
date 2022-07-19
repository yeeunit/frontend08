// 자연수 뒤집어 배열로 만들기
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 내정답

function solution(n) {
    let answer = [];
    
    for(let i=0; i<String(n).length; i++){
        answer.push(String(n).length-i)
    }
    return answer;
}

// 수업 코드

function solution(n) {
    const answer = []
    n = n.toString()
    // console.log(type)

    for(let i=n.length-1; i>=0; i--){
        // console.log(n[i], i)
        answer.push(Number(n[i]))
    }
    return answer
}

// 메서드로 풀기

function solution(n) {
    const answer = n.toString().split('').reverse().map(num =>{
            // console.log(answer)
            return Number(Number)
    })
    return answer
}

// 
// for(let ) 포문 그대로
// answer.push(Numver(n[i]))
// answer.reverse()
// return answer