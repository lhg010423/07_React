import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [message, setMessage] = useState([]);
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");

  // useEffet : React에서 제공하는 Hook
  useEffect(() => {

    // 요청 -> 서버로 요청
    // react(브라우저)        -> spring(서버)
    // http://localhost:3000 -> http://localhost:80


    // fetch <- http://localhost:3000 으로 보낸다는게 생략됨
    // 이걸 수정하기 위해 package.json에서 설정을 함, proxy라는 key : value형태로 저장함
    fetch("/test1") 
    .then(res => res.json())
    .then(data => {
      setMessage(data);
    })

    // React 서버랑 Spring 서버랑 별개라 두개다 서버를 열어야함
    // Spring 서버포트를 먼저 열어야함

  }, []);

  /*
  useEffet(() => {

  }, [message]);

  이렇게 쓰면 message 상태 배열이 값이 바뀔때마다 useEffect가 실행됨
  위처럼 배열에 아무것도 안쓰면 처음 페이지가 실행될 때 useEffect가 한번만 실행됨
  */

  const handleClick = () => {
    fetch("/test2", {
      method: 'post',
      headers: {'Content-Type' : 'application/json'},
      body : JSON.stringify({
        name : "홍길동",
        age : 15
      })
    })
    .then(res => res.text()) // 가져온 결과값이 하나라 text를 씀
    .then(data => setMessage2(data)); // data 결과값을 setMessage2로 집어넣는다
  }


  const axiosTest = () => {

    // 요청보낼 body만 쓰면됨
    axios.post("/test2", {
      name : "김유저",
      age : 17
    })
    .then(res => {
      // res안에 파싱된 값이 있음
      console.log(res);

      setMessage3(res.data);
    })


  }




  // axios
  // 브라우저 및 node.js 환경에서
  // 비동기 요청을 쉽게 처리할 수 있게 해주는 Javascript 라이브러리이다
  // * 터미널에서 npm / yarn 통해 설치
  // $ npm install axios
  // $ yarn add axios
  // 둘중에 아무거 써도 됨

  // 1. post 요청 시 데이터를 자동으로 JSON 데이터 형태로 처리해주므로,
  //    fetch와 달리 JSON.stringify 를 명시적으로 호출할 필요가 없음
  // 2. 응답을 JSON으로 자동 파싱해주기 때문에, fetch처럼 두 번째 then으로 응답을 파싱할 필요가 없음
  // 3. headers와 body를 명시적으로 설정하지 않아도 된다
  //    headers의 경우는 기본적으로 Content-Type : application/json으로 설정되어 있음
  //    단, header 내용 변경 시 명시적으로 작성해야 함
  //    ex) 나중에 실무에서 사용할 수도 있는 jwt인증방식은 headers : {'Authorization' : 'Bearer {token}'} 으로 쓴다


  return (
    <ul>
      {/* 한줄로 끝날거라 (el, idx) => 뒤에 return 안씀
          key={idx}는 안써도 되는데 브라우저단(f12) console창에서 각자 식별할 수 없다고 써야된다고 알림떠서 그냥씀  */}
      {message.map((el, idx) => <li key={idx}>{el}</li>)}

      <hr />

      <button onClick={handleClick}>fetch로 서버 통신</button>
      <br></br>
      <h1>{message2}</h1>

      <hr />

      <button onClick={axiosTest}>axios로 서버 통신</button>
      <br></br>
      <h1>{message3}</h1>



    </ul>
  );
}

export default App;
