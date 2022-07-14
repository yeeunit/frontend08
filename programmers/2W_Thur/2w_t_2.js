//x만큼 간격이 있는 n개의 숫자

// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 내답 정답
function solution(x, n) {
    
    let answer = [];
    
    for(let i=0; i<n; i++){
     answer.push (Number(x + x*i))
    }    
    return answer;
}

// 정답 코드

function solution(x, n) {
    const answer =[]
    for(let i=1; i<=n; i++){
        answer.push(i*x)
        //console.log(i*x)
    }
    return answer
}

// 모든 결과를 배열에 넣어보기 (map)

function solution(x, n) {     // n개만큼 배열값 생성, 1로 채워보기
    const answer = new Array(n).fill(1).map((num, i)=>
    (num+i)*x)
    return answer
}


