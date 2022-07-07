// 027
// str은 무작위 숫자인 문자열입니다.  
// 해당 문자열에서 가장 큰 수를 구하는 함수를 만들어야 합니다.
// 만약 str에 "12345"가 들어온다면 "5"를 나타내야 합니다.

// 방법1
function bigNum(str){
    let biggest = 1;

    for (let i=0; i<str.length; i++){
        if( Number(str[i]) > biggest ){
            biggest = Number(str[i])
        }
    }
    return biggest
}

// 방법2
function bigNum(str){
    let biggest = Number(str[0])

    for (let i=1; i<str.length; i++){
        if( Number(str[i]) > biggest ){
            biggest = Number(str[i])
        }
    }
    return biggest
}

// 방법3
function bigNum(str){
    console.log(Math.max(...[1,2,4,5,3,9]))

}