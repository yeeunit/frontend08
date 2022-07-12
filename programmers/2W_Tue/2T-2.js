//평균 구하기

function solution(arr) {
    
    let answer = 0;

    for (i=0; i < arr.length; i++)
    arr = arr.push(arr[i])
    answer = arr /arr.length   
    
    return answer;
}


// 평균값 구하기

function solution(arr){
let sum = 0
for (let i=0; i<arr.length; i++){
    sum += arr[i]
}
    return sum / arr.length
     
}

//
function solution(arr){

    const sum = arr.reduce((cu, el)=>{
        console.log(cu, el)
        return cu + el
    }, 0)
return sum / arr.length
}