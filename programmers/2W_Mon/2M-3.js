//핸드폰 번호 가리기


function solution(phone_number) {
  let answer = '';
      
  for(i=0; i<phone_number.length; i++){
    //console.log(i, phone_number[i])
    if(i<phone_number.length-4){
      answer += "*"
    } else{
      answer += phone_number[i] 
      // answer + phone_number[i]
    }
  }
   return answer
}

// 패드스타트 활용

function solution(phone_number){
  let answer = '';
  answer = answer.padStart(phone_number.length-4,'*')
  answer = answer.slice(phone_number.length-4,phone_number.length)
  console.log(answer)

}


let str = ''