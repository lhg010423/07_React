// ThemeContext.js
// 내가 만들고자 하는 Context를 정의한 파일

import { children, createContext, useState } from "react";


// Context API는 React에서 컴포넌트 트리 전체에 걸쳐 전역적인 데이터를 공유하고 전달하기 위한 방법
// -> 깊이 중첩된 컴포넌트들 간에도 데이터를 간편하게 전달할 수 있음
// -> 보통 props drilling을 피하기 위해 사용


// 사용방법
// createContext() 함수를 사용하여 Context 객체를 생성할 수 있음
// -> Provider와 Consumer를 포함

// 1. Provider : 컨텍스트를 사용하는 컴포넌트들에게 값을 제공하는 역할로,
//  값을 전달할 (자식)컴포넌트들을 감싸고, 'value'라는 prop을 통해 전달할 값을 지정
// 2. Consumer : 컨텍스트의 값을 사용하는 컴포넌트.
//  최근에는 React에서는 useContext 훅을 사용하여 컨텍스트 값을 가져와 사용함



// ThemeContext 라는 이름의 새 Context 생성
const ThemeContext = createContext();


// ThemeProvider 컴포넌트 생성
const ThemeProvider = ({ children }) => {
    // Children은 App.js <ThemeProvider>안에 있는 값들을 가져온다


    // 테마 상태 정의, 초기값은 light
    const [theme, setTheme] = useState('light');

    // 테마를 토글하는 함수 정의
    const toggleTheme = () => {
        setTheme(theme == 'light' ? 'dark' : 'light');
    }

    // ThemeContext.Provider를 통해 '상태 theme' 과 'toggleTheme 함수'를 제공
    return (
        // 전달해야 하는 값이 2개 이상이여서 {}를 2개를 씀
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}


export { ThemeContext, ThemeProvider };