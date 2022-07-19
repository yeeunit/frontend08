// 문자열 내 p와 y의 개수

// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.


function solution(s) {
    let answer = true;
    let p = 0
    let y = 0
    
    for (let i=0; i<s.length; i++){
        if(s[i]==='p' || s[i]==='P'){
            p++
        } else if(s[i]==='y' || s[i]==='Y'){
            y++
        }
    }
    return p===y
}

// 
function solution(s) {
    s = s.toLowerCase() //문자열 전체 소문자로 변환

    const obj = {p: 0, y: 0}
    
    for (let i=0; i<s.length; i++){
        if(obj[s[i]]===undefined) continue
        if(s[i]==='p'){
            obj[s[i]]++
            } else if(s[i]==='y'){
                obj[s[i]]++
            }
        }
    return obj.p===obj.y
}

// 

function solution(s) {

    const check = {}
    const answer = s.toLowerCase().split('').forEach(str=>{
        check[str] === undefined ? check[str] = 1 : check[str] += 1
    })
    return check.p === check.y
}