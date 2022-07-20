// 콜라츠 추측

// 1-1. 입력된 수가 짝수라면 2로 나눕니다. 
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다. 
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다. 

function solution(num) {
    let answer = 0;
    
    for(let i=0; i<500; i++){
        if(num ===1 ) break;
        answer++

        if(num % 2 ===0){
            num = num /2
        } else {
            num = (num * 3) +1
        }
    }
    return num !==1 ? -1 : answer
   
}

// 다른정답

const result = new Array(500).fill(1).forEach(el=>{
    if(num !== 1){
        num % 2 === 0 ? num = num / 2 : num = (num*3) +1
        answer++
        // console.log(answer, num)
        }
    })   // console.log(answer)
}



// while (num != 1) {
//     if (num % 2 == 0){
//         num /= 2;
//     } else {
//         num = (num * 3) + 1;
//     }
//     answer += 1;
// }
// if (answer >= 500) {
//     return -1;
// } else {
//     return answer;
// }