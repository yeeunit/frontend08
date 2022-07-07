//025
//num을 입력받아 1부터 num의 값까지 각각의 숫자 사이에 "-"이 들어간 문자열을 만들어야 합니다. 
//num이 3일 경우에는 "1-2-3"입니다.

function makeNumber(num) {
	let str = '';

	for (let i=2; i<=num; i++){

		str = str + "-" + i

	} return "1" + str;
    
}

// 정답코드
function makeNumber(num){
	let answer = ''
	for(let i=1; i<num; i++){
		answer += i
  	if(i!==num) answer += '-'
}
return answer
}

