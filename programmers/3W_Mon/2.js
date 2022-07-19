// 이상한 문자 만들기

// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.


function solution(s) {
    let answer = '';
    let idx = 0
    for (let i=0; i<s.length; i++){
        //console.log(s[i],i)
        if(s[i]===''){
            answer += ''
            idx = 0 
        } else {
            answer += idx % 2 === 0? s[i].toUpperCase() : s[i].toLowerCase()
            idx++ 
        }
        //console.log(s[i], idx)
    }
    return answer
}

// 
function solution(s){
    const answer = s.split(' ').map(word)=>{
        return word.split('').map((letter, i)=>{
            return i % 2 === 0 
                ? letter.toUpperCase()
                : letter.toLowercase()
        }).join('')
    }).join(' ')
    return answer
}
