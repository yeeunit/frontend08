
//<배열>
//003. 주어진 변수 fruits에 "사과", "바나나", "파인애플"을 담아주세요.

const fruits = []
fruits = ["사과", "바나나", "파인애플"]

// (정답코드) 
// const fruits = [] 

// // frutis.push("사과")
// // frutis.push("바나나")
// // frutis.push("파인애플")

// fruits[0] = "사과"
// fruits[1] = "바나나"
// fruits[2] = "파인애플"

// // index 보다 push를 많이 사용함 
// console.log(fruits)


//004. 주어진 fruits 배열에서 마지막 요소를 꺼내 newFruits에 넣어주세요.


// fruits = ["사과", "바나나", "파인애플"]

newFruits = fruits.pop(fruits.length)

// (정답코드)
// const fruits = ["사과", "바나나", "파인애플"]
// const newFruits = []
// newFruits.push(fruits[fruits.length-1])
// console.log(newFruits)



//005. 학생들의 이름이 담긴 students 배열이 있습니다.
// 배열에서 2번 째 요소까지의 데이터들을 뽑아 새로운 배열을 만드세요.


let students = ["철수", "영희", "훈이", "짱구", "유리"]

let newStudents = students.slice(0,2)


//006. 주어진 fruits 배열의 모든 요소에 "맛있는" 이라는 문자열을 추가하세요.

let fruits2 = ["사과", "바나나"] 

fruits2[0] = "맛있는 " + fruits2[0]
fruits2[1] = "맛있는 " + fruits2[1]


// 007. 상수 number는 핸드폰 번호가 담긴 문자열입니다. 
// 해당 문자열을 "010", "1234", "5678"로 나눈 배열을 만드세요.

const number = "01012345678"

let newNumber = [number.slice(0,3), number.slice(3,7), number.slice(7,11)]

 
