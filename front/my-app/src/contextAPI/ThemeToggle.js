// ThemeToggle.js

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

// 테마를 토글하는 버튼 컴포넌트
const ThemeToggle = () => {

    // useContext Hook을 사용하여 ThemeContext의 값 중 toggleTheme 함수를 가져오기
    const { toggleTheme } = useContext(ThemeContext);

    // 버튼 클릭 시 toggleTheme 함수 호출
    return <button onClick={toggleTheme}>테마 토글</button>

}

export default ThemeToggle;
