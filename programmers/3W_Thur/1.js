//두 개 뽑아서 더하기
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.


function solution(numbers) {
    let answer = [];
    
    for(let i=0; i<numbers.length; i++)
        for(let j = i + 1 ; j < numbers.length; j++){
           const sum = numbers[i] + numbers[j];
        
           if(answer.includes(sum) === false) {
            answer.push(sum);
           }
        }

    return answer.sort( (a,b) => a-b);
}

//

function solution(numbers) {
    let answer = [];
    
    for(let i=0; i<numbers.length; i++)
        for(let j = i + 1 ; j < numbers.length; j++){
           const sum = numbers[i] + numbers[j];
        
        //    if(answer.has(sum) === false) {
            answer.add(sum);
        //  add는 어차피 고유한 값만 저장해줌}
        }

    return Array.from(answer).sort( (a,b) => a-b);
}

// 메서드로 풀기

function solution(numbers){

    const answer =[];

    numbers.forEach( (num1, i) => {
        numbers.slice( i + 1 ).forEach( num2 => {
            const sum = num1 + num2; 

            if(answer.includes(sum)=== false){
            answer.push (sum);
            }
    })
})
    return answer.sort((a, b) => a-b );
}


// 메서드 셋 적용

function solution(numbers){

    const answer = new Set();

    numbers.forEach( (num1, i) => {
        numbers.slice( i + 1 ).forEach( num2 => {
            const sum = num1 + num2; 

            // if( answer.has(sum) === false ){
                answer.add(sum);
            // }‹
    })
})
    return [...answer].sort((a, b) => a-b );
}

// array : length
// set : size

// set
// 1. 배열처럼 사용할 수 있는 객체
// 2. 고유한 데이터만 저장

const arr1 = new Set();
const arr2 = [];
typeof arr1 // object
typeof arr2 // object

Array.isArray( arr2 ) // true

arr1.add("a") // 셋에 넣기
arr1.add("a") // 중복 자동 제거. 한번만 넣어짐
arr2.push("a") // 배열에 추가하려면 push
arr2.push("a") // ['a','a']

// 데이터 조회
arr2.has("a") // true
arr2.includes("a") // true

//데이터 반복
arr1.fopEach( el => {
    console.log(el)
})
arr2.forEach( el => console.log(el) )

// 데이터 삭제
arr1.delete("d") //제거하고 싶은 데이터 입력  
arr2.pop();

// 초기화(비우기. 배열에는 없음)
arr1.clear();


Array.isArray(Array.from( arr1 )) // 배열로 변환시켜줌
[...arr1] 

