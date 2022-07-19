// 나누어 떨어지는 숫자 배열


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