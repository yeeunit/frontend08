//024
//문자열에서 "a"가 몇 번 등장하는지 횟수를 구하는 함수를 만들려고 합니다.
//반복문을 이용해 "a"의 등장 횟수를 변수 "count"에 할당하세요.


function countLetter(str) {
	let count = 0;
  
    for (let i =0; i < str.length; i++){
        let finda = str[i];
        if (finda === 'a'){
            count = count + 1;
        }
    } return count;
}

console.log(countLetter("apple"))
console.log(countLetter("I am from Korea"))


//function countLetter(str) {
// str = str.toLowerCase() 
// 전체를 소문자로 변환해서 원래 값에 할당하기 이를통해 아래 대문자 or 넣지 않아도됨
// let answer = 0
// for (let i=0; i<str.length; i++){
// if(str[i]==='a' || str[i]==='A') answer++
// }   
// return answer
// }
  
//   countLetter("I am from Korea")