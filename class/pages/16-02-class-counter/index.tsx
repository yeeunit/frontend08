import { Component } from "react";

// class Aaa{
//     onChangeWriter(){}
// }

// 컴포넌트에서 setState 기능 제공
export default class ClassCounterPage extends Component{
// 클래스 함수 물려받기: 상속 (훅이아닌 컴포넌트로)

    state = {
        count: 5,
    }

    counterUp = () => {
        // counterUp(){ 화살표 함수로 변경하면 눈에 보이는 디스를 가져오게됨
        this.setState({
            count: 1,
            // count: {count} + 1,
            // console.log(this.state.count)
            // this.setState((prev: number) => ({count: prev + 1,}))

        })
    }

    // this. 자기 자신을 가르키는  (누가 실행시켰느냐에 따라 주체가 바뀜.)
    render() { 
        return (
        <> 
            <div>{this.state.count}</div>

            <div style={{fontSize:"10px"}}>
            <br />
            클래스가 자기 자신이 가진 스테이트를 디스로 찍는게 가능했지만
            버튼은 클릭이벤트가 실행주체 /윈도우/가 되어 클래스는 실행주체가 아님
            해결방법은 바인드 / 너무 복잡해.. 그냥 눈에 보이는 디스를 쓰쟈/ 화살표함수
            <br />
            </div>

            <button onClick={this.counterUp}>카운트 올리기!!!</button>

            {/* <button onClick={this.counterUp.bind(this)}>카운트 올리기!!!</button> */}

        </>
        )
    }
}


// 클래스안에넌 리턴 없음. 함수 function 안에서는 리턴이 있음. 