// 짝수와 홀수

function solution(num) {
    let answer = '';

        if (num%2 ===0){
    return "Even";
        }else{
            return "Odd"
        }
}

// 수업

function solution(num){
    if(num % 2 ===0){
        return "Even";

    } else {
        return "Odd"
    }
}

// 더 간단한 방법

function solution(num){
    return num % 2 ===0 ? "Even" : "Odd" 
}