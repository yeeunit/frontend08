import { Component } from "react";
import Router from "next/router";

// 클래스에서는 유즈라우터 아님
// class Aaa{
//     onChangeWriter(){}
// }

// 컴포넌트에서 setState 기능 제공
export default class ClassCounterPage extends Component{
// 클래스 함수 물려받기: 상속 (훅이아닌 컴포넌트로)

    state = {
        count: 5,
    }

    componentDidMount(){
        console.log("그려지고 나서 실행")
    }

    componentDidUpdate(){
        console.log("변경되고 나서 실행")
    }

    componentWillUnmount(){
        console.log("사라질떄 실행")
    }


    counterUp = () => {
        console.log(this.state.count)
        this.setState({
            count: 1,
        })
    }

    onClickMove(){
        Router.push("https://naver.com")
    }

    render() { 
        return (
        <> 
            <div>{this.state.count}</div>
            <button onClick={this.counterUp}>카운트 올리기!!!</button>
            <button onClick={this.onClickMove}>이동!</button>

            {/* <button onClick={this.counterUp.bind(this)}>카운트 올리기!!!</button> */}

        </>
        )
    }
}


// 클래스안에넌 리턴 없음. 함수 function 안에서는 리턴이 있음. 