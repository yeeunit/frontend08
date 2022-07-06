// 020
// 입력되는 온도에 따라 문구를 띄워주는 온도계 함수를 만들려고 합니다.
// 입력된 값에 따라 알맞은 문구를 띄워주세요
// 18이하면 "조금 춥네요"
// 19~23이면 "날씨가 좋네요"
// 24이상이면 "조금 덥습니다"

function temperature(num){
	if(num <= 30 && num > 24) {
      return "조금 덥네요"
	}
    else if (num <= 24 && num > 18){
      return "날씨가 좋네요"
    }
    else if (num <= 18 && num > 10){
      return "조금 춥네요 "
    } 
    else {
      return "날씨가 이상해요"
	}
}

// 정답코드

// function temperature(num){
// 	if(num >= 24){
//     return '조금 덥습니다'
//   } else if(num >= 19 && num <= 23){
//     return '날씨가 좋네요'
//   } else if(num <=18){
//     return '조금 춥네요'
//   }
// }