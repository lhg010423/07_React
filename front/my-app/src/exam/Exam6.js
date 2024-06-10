// JSX(Javascript Xml) 사용하기

import { useState } from "react"

// 조건문
function Exam6_1(props) {
    const isLogin = props.isLogin; // 부모에게 전달받은 props중 isLogin 값을 변수에 담음

    // if(isLogin) {
    //     return <h1>Welcome back!</h1>
    // } else {
    //     return <h1>Please sign up~!</h1>
    // }

    return (
        // 렌더링 시 조건문
        // if / else 지양, 거의 안씀
        // -> 삼항연산자
        // 조건문(boolean) ? true일때 값 : false 일때 값
        isLogin ? <h1>Welcome back!</h1> : <h1>Please sign up~!</h1>

    );
    
}


// map 사용법, js 내부 함수, 많이씀
export function Exam6_2() {
    // map : 배열에서 사용하는 js 내장 함수
    // -> 배열의 모든 요소에 대해 주어진 함수를 호출하고
    //    결과를 새로운 배열로 반환
    const numbers = [1, 2, 3, 4, 5];

    // => 다음에 return 구문이 한줄로 끝나면 {} 안써도 됨
    const listItems = numbers.map((number) => <li>{number}</li>);
    // [ <li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>, <li>5</li> ]
    // <li> 태그안에 각각 1~5까지 값이 들어가있다.

    return <ul>{listItems}</ul>
    // 위에서 만든 listItems 배열을
    // ul 태그에서 jsx 표현식을 사용하여 렌더링함

}


// 이벤트 만들기(처리하기)
export function Exam6_3(props) {

    const handleClick = () => {
        alert('버튼 클릭되었음~');
    }


    return (
        <button onClick={handleClick}>{props.label}</button>
    )


}




// export default : 이거는 컴포넌트 한개만 내보낼 수 있다
export default Exam6_1; // 기본적으로 내보내는 컴포넌트가 Exam6_1 이다