// 나누어 떨어지는 숫자 배열

// 내답
function solution(arr, divisor) {
    let answer = [];
    
    for(let i=0; i<arr.length; i++){
        if( Number(arr[i]) % Number(divisor) === 0){
           answer.push(arr[i])
        }   
      else if ( Number(arr[i]) % Number(divisor) !== 0 ) {
         return answer.push(-1) 
    	}
    }
  return answer
}


// 수업 !!! 리턴 뒤 확인

function solution(arr, divisor) {
  const answer = [];
  for(let i=0; i<arr.length; i++)
      // console.log(arr[i], arr[i]%divisor)
    {
    if(arr[i]%divisor === 0){
      answer.push(arr[i])
    }
  }
  return answer.length === 0? [-1] : answer.sort((a,b)=>a-b)

}

// 
function solution(arr, divisor) {
  const answer = arr.filter(num => {
    return num%divisor === 0
  })
  // console.log(answer)
  return answer.length === 0 [-1] : answer.sort((a,b)=> a-b)
}