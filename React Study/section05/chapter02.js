// React 컴포넌트
// 컴포넌트(Component) 란?
// 자바스크립트 함수가 html 태그들을 반환하는 함수
// 주로 함수의 이름을 따서 부름
// App 함수면 App 컴포넌트

// 자바스크립트 함수를 생성 (함수 컴포넌트)
// 함수 선언식, 화살표 함수 등으로 선언
// 클래스를 이용해서 함수를 생성할 경우 코드양이 많아짐

// 새로운 컴포넌트 생성시 주의사항
// 함수의 이름을 첫글자를 대문자로
// 대문자를 사용안하면 컴포넌트로 인정해주지 않음

// --------------------------------------------

// 리액트가 렌더링하는 컴포넌트는 App.jsx 이므로
// App 컴포넌트 내에 다른 컴포넌트 태그를 넣어 렌더링
// 리턴문 내부에 포함된 다른 컴포넌트 = '자식 컴포넌트'
// App 컴포처럼 모든 컴포넌트의 뿌리역할 = '루트 컴포넌트'

// 루트 컴포넌트는 main.jsx 파일에서
// render 메서드의 인수로써 전달되는 컴포넌트
// 관례상 루트 컴포넌트는 App 컴포넌트로 설정

// --------------------------------------------

// 컴포넌트들을 각각의 파일로 분리하는 작업
// 모듈화를 위해 파일을 나눠서 작성
// src 폴더 내 components 폴더 생성
// 폴더 내 Header.jsx 등 컴포넌트 작성
// export default 로 컴포넌트 내보내기
// 루트 컴포넌트에서 import ... from 으로 다른 컴포넌트 불러오기
// 파일의 확장자는 생략해도됨 (vite 에서 자동 설정되어 있음)

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
