// 041 조건문 실전 적용 - 점수에 따른 등급

function grade(score) {
	if (score <= 100 && score >= 90){
  	return 'A';
    }
  	else if (score <= 89 && score >= 80){
  	return "B";
    }
    else if (score <= 79 && score >= 70){
  	return "C";
    }
    else if (score <= 69 && score >= 60){
  	return "D";
    }
    else if (score <= 59 && score >= 80){
  	return "F";
    } 
	else {
    return "잘못된  점수입니다.";
    }
}


// 정답코드

function grade(score){
  
  if(score > 100 || score < 0) 
  return "잘못된 점수입니다."
  
  let answer = ''
  
  if(score >= 90){
    answer = 'A'
  } else if (score >= 80){
    answer = 'B'
  } else if (score >= 70){
    answer = 'C'
  } else if (score >= 60){
    answer = 'D'
  } else {
    answer = 'F'
  }
  return answer
  
}

