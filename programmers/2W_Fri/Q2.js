//K번째수
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
// if array = [ [1, 5, 2, 6, 3, 7, 4],  i = 2,  j = 5,  k = 3]
// commands = [ i, j, k]
function solution(array, commands) {

    let answer = [];

    for(let idx=0; idx<commands.length; idx++){
        const i = commands[idx][0]
        const j = commands[idx][1]
        const k = commands[idx][2]

        const result = array.slice(i-1, j).sort((a,b)=>{
            return a-b
        })
        answer.push(result[k-1])   
       }
    return answer;
}

// solution([[1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3], )

//
function solution(array, commands) {
    const answer = commands.map(num=>{

        const result = array.slice(num[0]-1, num[1]).sort((a,b)=>{
            return a-b
        })
        return result[num[2]-1]
    })
    return answer
}