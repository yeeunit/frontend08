// 자릿수 더하기
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 내코드 정답

function solution(n)
{
    let answer = 0;
    let number = String(n) // "12345"
    
    for (let i=0; i< number.length; i++){
        answer += Number(number[i])
    }

    return answer;
}


// 정답코드

function solution(n)
{   
    n = String(n)
    // "숫자는 인덱스값으로 접근 불가하기 때문에 문자로 변환"
    // num.toString()
    let answer = 0;
    
    for (let i=0; i< n.length; i++){
        answer += Number(n[i])
    }
    return answer;
}

// reduce 사용하기 (배열에서만 사용 가능한 메소드)

function solution(n){
    const answer 
    = String(n).split('').reduce((acc, cur)=>{  
        return acc + Number(cur)
    }, 0) //1일떄 오류발생.. 따라서 초기값 0 지정
    return answer
}


}