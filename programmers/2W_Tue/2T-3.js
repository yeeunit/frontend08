function solution(s) {
    let answer = '';

    const center  = Math.floor(s.length / 2)
    //console.log(center)

    answer = s[center]
    if(s.length % 2 === 0){
        answer = s[center-1] + answer
    } 
return answer;
}

// 다른방식 

function solution(s) {
    const center = Math.floor(s.length / 2)
    const answer = s.length % 2 !== 0
    ? s[center]
    : s.slice(center-1, center+1)
    return answer
}



// 내꺼
function solution(s) 
{
    let answer = '';
    for(let i=0; i<s.length; i++)
        
    if (s.length%2 === 0 ){
        answer =- s[s.length, s.length/2-1]
    }    else answer = s[Math.floor(s.length/2)]
    
    return answer;
    }
