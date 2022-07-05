//<객체>

//008. 주어진 student 객체에 'name'이라는 키를 만들고, "철수"를 할당하세요.


const student = {}

student.name = "철수"


//009. student와 school 두 개의 객체가 있습니다.
// student 객체에 school이라는 객체를 할당해야 합니다.

const student = {
	name: "철수",
	age: 8,
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}

student.school = school

//010. 주어진  student는 "철수"에 대한 정보를 모아둔 객체입니다.그런데 철수와 관련이 없는 drink라는 키가 있네요. 
// student에서 { drink: "사이다" }를 삭제해주세요.

let student = {
	name: "철수",
	drink: "사이다"
};

delete student.drink


//011. 주어진 classmates는 "다람쥐초등학교" 학생들의 정보를 모아둔 배열입니다.그런데 자세히 보니 "영희" 학생의 정보가 잘못 입력되어 있습니다.
// "영희"의 school 값을 "다람쥐초등학교"로 바꿔주세요.

const classmates = [
	{
		name: "철수",
		age: 8,
		school: "다람쥐초등학교"
	},
	{
		name: "영희",
		age: 8,
		school: "토끼초등학교"
	},
	{
		name: "짱구",
		age: 8,
		school: "다람쥐초등학교"
	}
];


classmates [1].school="다람쥐초등학교"


