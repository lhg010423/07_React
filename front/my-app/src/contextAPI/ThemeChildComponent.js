// ThemeChildComponent.js

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

// 3레벨 자식컴포넌트 만들기
const ThemeChildComponent = () => {

    const { theme } = useContext(ThemeContext);

    const modeName = theme == 'light' ? '라이트' : '다크';

    return <h1>{modeName} 테마 적용중이에요~</h1>

}


export default ThemeChildComponent;
