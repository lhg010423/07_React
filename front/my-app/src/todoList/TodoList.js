// TodoList.js

import { useState } from "react";

/*
    불변성(immutability)을 유지해야함
    : 데이터 구조(ex. 배열, 객체 등)의 원본값을 변경할 수 없는 성질을 의미함
    -> 불변성을 유지한다는 것은 한 번 설정된 초기값을 가진 데이터 구조를 직접 변경하지 않고,
    항상 새로운 데이털 구조를 생성해서 업데이트하는 것을 뜻함

    왜? React는 상태변화가 일어날 때 효율적으로 컴포넌트를 리렌더링하기 위해
    상태의 불변성을 가정한다.
    불변성을 유지하면 이전 상태와 새로운 상태가 다르다는 것을 쉽게 알 수 있으며,
    이를 통해서 변경된 부분만 업데이트 할 수 있는 것.


*/


function TodoList() {

    // 상태
    // todoList는 계속 값이 변하니 변수가 아닌 상태에다가 쓴다
    // js 객체로 만들거여서 {}를 씀
    const [todos, setTodos] = useState([{title: "React 복습하기", isDone: false},
                                        {title: "일기쓰기", isDone: true}]); // useState() 리엑트에서쓰는 Hook
    
    const [inputValue, setInputValue] = useState('');


    // 함수
    // 할일 추가 함수
    const handleAddTodo = () => {
        // [] 배열형태
        // 기존의 todos 배열과 새로운 할 일 객체를 이어붙여서 새로운 배열을 만든 후,
        // 이를 setTodos 함수를 상용하여 업데이트함
        // ...todos : 얕은 복사, todos랑 똑같은 배열을 만들어서 사용하는 거다
        setTodos([...todos,  {title: inputValue, isDone: false}]);
        setInputValue(""); // 입력 필드에 있는 값 비워주기
    }

    // 할일 삭제 함수
    const handleDeleteTodo = (index) => {
        // 상태에 있는 배열같은 거는 원본값을 건드리면 안되니 이번에도 얕은 복사를 씀
        // 얕은 복사 방법 1 번째 : slice() 이용 - 원본 배열을 변경하지 않고, 새로운 배열을 반환
        const newTodos = todos.slice(); // 기존의 todos 배열을 복사하여 새로운 배열을 생성

        newTodos.splice(index, 1);
        // splice() : 배열의 기존 요소를 삭제 [추가 또는 교체] 가능함
        // splice(start, deleteCount, [item1, item2..])
        // start : 배열에서 변경을 시작할 인덱스
        // deleteCount : 배열에서 제거할 요소의 수
        // [item1, item2..] : 옵션 배열에 추가할 요소들
        setTodos(newTodos);

    }

    // 할일 토글 함수
    const handleToggleTodo = (index) => {
        // 얕은 복사 방법 2 번째 : 전개(spread) 연산자 이용
        // - 배열이나 객체의 모든 요소를 개별적으로 펼처서 새로운 배열이나 객체를 생성할 때 사용
        const newTodos = [...todos];

        // 해당 인덱스의 todo 항목의 isDone 값을 반전
        newTodos[index].isDone = !newTodos[index].isDone;

        // 새로운 배열로 상태를 업데이트
        setTodos(newTodos);

    }




    // return () : 화면에 렌더링할 jsx 작성 구문
    return (
        <div>
            <h1>Todo List</h1>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleAddTodo}>추가하기</button>

            <ul>
                {// js문법을 쓸거여서 {}를 씀
                    todos.map((todo, index) => ( // <- 이 () 말하는 거
                        // 익명함수는 {}안에 어떠한 값을 출력할 때 return이 필요함
                        // () 를 쓰면 바로 js문법을 써도 됨, { return () } 생략한 방법
                        // 이거는 { return () } 생략한 방법인 () 임
                        <li>
                            {/* js문법인 삼항연사자 쓸거라 안에 {} 씀 */}
                            <span style={{ textDecoration : todo.isDone ? 'line-through' : 'none'}}>
                                {todo.title}
                            </span>

                            <button onClick={() => handleToggleTodo(index)}>
                                {todo.isDone ? '미완료' : '완료'}
                            </button>

                            {/* 그냥 onClick={handelDeleteTodo} 를 쓰면 어떤거를 삭제하는 지를 모름 */}
                            <button onClick={() => handleDeleteTodo(index)}>삭제</button>
                        </li>
                        

                        
                    ))
                        
                }
            </ul>
        </div>
    )


}





export default TodoList;