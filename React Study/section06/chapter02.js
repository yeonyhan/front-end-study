// React 컴포넌트

// 컴포넌트(Component) 란?
// html 태그들을 리턴하는 함수
// App 함수면 -> App 컴포넌트라 부름
// 함수 선언식, 화살표 함수 등으로 선언
// 새로운 컴포넌트 생성시 함수의 이름의 첫글자를 대문자로 짓기

// --------------------------------------------

// App.jsx 처럼 모든 컴포넌트의 뿌리역할 = '루트 컴포넌트'
// 리턴문 내부에 포함된 다른 컴포넌트 = '자식 컴포넌트'

// 루트 컴포넌트는 main.jsx 파일에서
// render 메서드의 인수로써 전달되는 컴포넌트
// 관례상 루트 컴포넌트는 App 컴포넌트로 설정

// --------------------------------------------

// 컴포넌트들을 각각의 파일로 분리하여 모듈화
```
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
```;
