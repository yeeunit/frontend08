//023 

// 입력되는 수에 따라 0부터 해당 수까지의 합을 구하려고 합니다.
// num은 1이상의 자연수가 들어옵니다.
// 만약 num이 5라면 1 + 2 + 3 + 4 + 5를 모두 더한 값을 출력시켜주세요.

function sum(num) {
	let count = 0; 
  
	for (let i=0; i<=num; i++){
  	count += i;
	}
  return count 
}

//결과 확인
  console.log(sum(10))