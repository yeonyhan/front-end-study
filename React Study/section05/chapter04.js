// Prop로 데이터 전달하기
// Props란?

// Button 컴포넌트와 같이
// 동일한 형태의 UI는 하나의 컴포넌트만 생성하여
// 이미지 또는 텍스트 등만 바꿔가면서 반복해서 렌더링 설정

// 각각 버튼 컴포넌트들의 어떤 버튼을 렌더링할 것인지
// 결정하는 값을 전달해줘야 함
// 함수를 호출하면서 인수를 전달하는 개념과 비슷

// <Button text={"메일"} img={"mail.png"}/>
// <Button text={"카페"} img={"cafe.png"}/>
// 메일버튼, 카페버튼을 렌더링

// 이처럼 컴포넌트에 전달된 값들을 props라 부름
// 전달하는 값에 따라 각각 다른 UI를 렌더링
// 리액트의 핵심 개념 중 하나

// --------------------------------------------

// 부모 컴포넌트로 전달받은 props를 사용
// props 매개변수에는 객체가 들어있음

// 전달되지않은 props는 표시되지 않음 (undefined 할당됨)
// 무조건 들어올거라 예상하고 코드를 작성하면 치명적 오류 발생
// 자동으로 기본값을 설정하여 오류 해결
// props를 객체로 받지않고 구조분해할당 문법을 사용

```
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Button text={"메일"} color={"red"} />
      <Button text={"카페"} />
      <Button text={"블로그"} />
    </>
  );
}

export default App;
``````
const Button = ({ text, color = "black" }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
    </button>
  );
};

export default Button;
```;

// --------------------------------------------

// 전달받은 props가 여러개인 경우
// 하나의 객체로 묶어 스프레드 연산자를 통해 한번에 전달

```
import "./App.css";
import Button from "./components/Button";

function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
      <Button {...buttonProps} />
    </>
  );
}

export default App;
```;

// --------------------------------------------

// props에는 문자열, 숫자 같은 값 뿐만 아니라
// html 요소나 react 컴포넌트도 전달 가능
// 컴포넌트 태그 내부의 자식 요소가
// children 이라는 프로퍼티로 자동으로 저장됨

```
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Button text={"블로그"}>
        <div>자식 요소</div>
      </Button>
    </>
  );
}

export default App;
``````
const Button = ({ children }) => {
  return (
    <button>
      {children}
    </button>
  );
};

export default Button;
```;
