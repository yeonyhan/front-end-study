// Prop로 데이터 전달하기

// Props란?
// 동일한 형태의 UI를 가지는 컴포넌트를
// 이미지, 텍스트 등만 바꿀 수 있게 렌더링하도록 설정

// <Button text={"메일"} img={"mail.png"}/>
// <Button text={"카페"} img={"cafe.png"}/>

// 컴포넌트에 전달된 값들(text, img)이 props
// 전달하는 값에 따라 각각 다른 UI를 렌더링

// --------------------------------------------

// 부모 컴포넌트로 전달받은 props를 사용
// props의 값들이 객체의 프로퍼티(text, color)로 들어있음
// props에 구조분해할당 문법을 사용하여 프로퍼티 사용

// 전달되지않은 props에는 undefined 할당
// undefined 오류를 해결하기 위해 기본값을 설정
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
// 스프레드 연산자를 통해 한번에 전달

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

// props에는 문자열, 숫자, html 요소, react 컴포넌트도 전달 가능
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
