//같은 숫자는 싫어


function solution(arr)
{
    const answer = [];
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] !== arr[i-1]) answer.push(arr[i])
    }
    //현재값과 내앞에 있는 값 비교

    //if(arr[i]) !== answer.[answer.length-1].answer.push(arr[i])
    // 현재값과 답의 마지막 데이터 비교

    return answer;
}

//패드스타트 활용!
function solution(phone_number){
  
    let answer = '';
    
    answer += answer.padStart(phone_number.length-4, '*')
    answer += phone_number.slice(phone_number.length-4, phone_number.length)
    
    return answer
  }  

// phone_number = "01033334444"
// solution("01033334444")
// console.log (solution("65443422"))




function solution(arr)
{
    let answer = [];
    
    for ( let i=0; i < arr.length; i++ ){
        if (arr[i] !== arr[i-1])
         answer.push(arr[i])
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return answer;
}