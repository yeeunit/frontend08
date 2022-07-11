// 043 마이페이지
// 오른쪽 myShooping은 내가 구매한 목록을 보여주고 있습니다.
// 해당 목록에서 "의류"를 구매한 횟수와 총 금액을 나타내고, 
// "의류"를 구매한 횟수에 따라 등급을 나타내세요.

const myShopping = [
    { category: "과일", price: 12000　},
    { category: "의류", price:10000　 },
    { category: "의류", price: 20000　},
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000　 },
    { category: "의류", price: 10000  },
    { category: "과일", price: 8000　　},
    { category: "의류", price: 7000　　},
    { category: "장난감", price: 5000  },
    { category: "의류", price: 10000　 },
]


console.log(myShopping[3].price)

// 정답코드


function myPage(){

    let count = 0
    let amount = 0
    let grade = " "
}


for (let i=0; i < myShopping.lengh; i++;){
    if (myShopping[i].category === category ){
       count++
    amount += myShopping[i].price
    }
 }
//    if(count>=0 && count <=2){
//      grade = 'Bronze'
//    } else if (count >-3 && count <=4){
//      grade = 'Silver'
//    } else if (count >=5){
//      grade = 'Gold'
//    }
//    console.log(count, amount, grade)
//  }

if(count>=5){
 grade = 'Gold'
} else if(count>=3){
 grade = "Silver"
} else {
 grade = "Bronze"
}
// return '의류를 구매한 횟수는 총 '+ count + '회 금액은 ' + grade+ '입니다.'
// }

    return `${category}를 구매한 횟수는 총 ${count}회 금액은 ${amount}원이며 등급은 ${grade}입니다.`
  