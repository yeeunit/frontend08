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