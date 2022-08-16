// 타입스크립트 Generic

import { useState } from "react"

// 1. 문자 타입

export const getString = (arg: string): number => {
    return 123
    // return arg : 이렇게 할시 오류남(아규먼트는 넘버로 내보내기로 했는데 아규먼트는 스트링 타입 이기 떄문)
}
// result 실행도 전에 타입을 알 수 있음 (결과값을 number로 정해줬기 때문에)
const result1 = getString("철수")
console.log(result1)


// 
// 2. 숫자 타입

const getNumber = (arg: number): number => {
    return 123
}
const result2 = getNumber(123)


// 
// 3. any 타입 (그냥 자바스크립트와 같음)

const getAny = (arg: any): any => {
    return arg
}
const result3 = getAny(123)
const result3 = getAny("철수")
const result3 = getAny(true)


// 
// 4. unknown 타입

const getUnknown = (arg: unknown): any => {
    
    if (typeof arg === "number"){
        return arg + 2
    } else {
        return "숫자를 넣어주세요"
    }
}
const result4 = getUnknown(123)

// any와 같이 모든 것을 받을 수 있지만 사용하려면 타입을 명시해줘야함.


//
// 5. Generic 타입
// 인자에 들어오는 타입을 그대로 사용할 수 있음

function getGeneric<MyType> (arg: MyType): MyType {
    
    // 처음 인자 받은 타입과 동일하게 리턴 타입도 같아야함. 
   return arg
}

let aaa : number = 123 
let bbb: string = "철수"
const result5 = getGeneric(aaa)
const result6 = getGeneric(bbb)
const result7 = getGeneric(true)


//
// 6. any vs generic 비교

function getAny2(arg1: any, arg2: any, arg3: any): [any, any, any] {
    return [arg1, arg2, arg3]
}
const result = getAny2(123, "철수", true)


// 
// prettier-ignore
function getGeneric2<MyType1, MyType2, MyType3> (arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
    return [arg3, arg2, arg1]

    // 들어갈때 아무타입 가능하지만 나올때 any와 다르게 제네릭은 나올때도 동일하므로 타입 예측 가능
}
const result = getGeneric2(123, "철수", true)


// 
// 7. generic - 실무적 네이밍
// prettier-ignore

function getGeneric3<T1, T2, T3> (arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
    return [arg3, arg2, arg1]
}
const result = getGeneric3(123, "철수", true)


// generic
function getGeneric4<T, U, V> (arg1: T, arg2: U, arg3: V): [V, U, T] {
    return [arg3, arg2, arg1]
}
const result = getGeneric4<number, string, boolean>(123, "철수", true)
// <number, string, boolean> 와 같이 타입을 명시할수 있음
// 명시 안할시 들어간 타입 그대로 반영 


//
// 8. generic - useState
function useMyState<T>(arg: T): [T, () => void] {

    const state = arg

    const setState = () => {
    // 1. 스테이트 변경
    // 2. 컴포넌트 리렌더링 하는 기능

    }
    return [ state, setState ]
}

const [count, setCount] = useMyState<number>(0)
// const [count, setCount] = useMyState<string>("철수")

