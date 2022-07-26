// 하샤드수

function solution(x) {
    let answer = 0
    x = String(x)
    for(let i=0; i<x.length; i++){
        answer += Number(x[i])
    } 
    return x % answer === 0 ? true : false    
  // ( true : false) 뒤에 삼항연산자 뺴도 됨 어차피 트루 펄스로 받기떄문에
}


/// 메소드

function solution(x) {
    const answer = String(x).split('').reduce((acc, cur) => {
        // console.log( typeof acc, typeof cur)
        return acc + Number(cur)
    }, 0)
    return x % answer === 0
}

// acc의 경우 초기값이 0이므로 숫자타입이니 Number 생략가능