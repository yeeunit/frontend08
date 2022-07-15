//문자열 내림차순으로 배치하기

function solution(s) {
    const arr = []
    
    for(let i=0; i<s.length; i++){
        arr.push(s[i])
    }
    arr.sort((a,b)=> {
        return a > b ? -1 : 1
    })
    let answer = ''
    for(let i=0; i<arr.length; i++){
        answer += arr[i]
    }
    return answer

}

// 다른 풀이

function solution(s){
    const answer = s.split('').sort((a,b)=>{
        return a>b ? -1 : 1
    }).join('')
}

// 오름차순
let arr = [];
arr.sort((a,b) => a-b)
arr.sort((a,b) => b-a)

const strArr = ['a', 'b', 'x','A']

String.fromCharCode()
//대문자가 소문자보다 항상 앞에 있다

// strArr.sort((a,b)=> b?a? -1 : 1)