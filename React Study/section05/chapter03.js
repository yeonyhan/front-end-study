// JSX로 UI 표현하기
// JSX 란?

// 함수 내부 리턴문에 html 태그를 사용하는 건
// 자바스크립트에서는 문법적인 오류로 판단

// 리액트에서는 JSX 문법을 사용하므로
// 적법하다고 판단
// JSX : JavaScript Extensions
// 확장된 자바스크립트의 문법을 말함
// 자바스크립트와 html을 혼용하여 사용 가능

// 컴포넌트 내부에 변수를 선언하고,
// 리턴문 내에서 해당 변수를 렌더링할 수 있음

// --------------------------------------------

// JSX 문법 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 삼항연산자, 값, 변수 이름 처럼 한줄의 코드가 특정한 값으로 표현
// 조건문, 반복문은 오류 발생

// 2. 숫자, 문자열, 배열 값만 렌더링된다.
// boolean, null, undefined 값은 렌더링되지 않음
// 객체 값을 그대로 렌더링시 오류 발생
// 점표기법을 이용하여 문자열, 숫자값을 렌더링하도록 수정

// 3. 모든 태그는 닫혀있어야 한다.
// 닫는 태그 생략시 오류 발생

// 4. 최상위 태그는 반드시 하나여야만 한다.
// 리턴문 내 가장 높은 위치에 있는 태그
// 만약 최상위 태그로 감쌀 태그가 마땅히 없다면
// 빈 태그를 사용 <></>

```
const Main = () => {
  // 컴포넌트 내 변수 선언하고 변수를 표시하려면
  // 리턴문에서 중괄호를 사용하여 렌더링
  const number = 10;

  return (
    <main>
      <h1>main</h1>
      <h2>{number}</h2>
      <h2>{number % 2 === 0 ? "짝" : "홀"}</h2>
    </main>
  );
};

// Main 컴포넌트 내보내기
export default Main;
```;

// DOM 요소에 스타일 부여

// 인라인 스타일로 객체를 전달하는 방법
// 스타일 키값은 카멜케이스로 작성
// style={{backgroundColor: "red"}}
// 그러나 인라인 스타일은 가독성이 떨어짐

```
const Main = () => {
  const user = {
    name: "한주연",
    isLogin: true,
  };

  if (user.isLogin) {
    return (
      <div
        style={{
          backgroundColor: "red",
          borderBottom: "6px solid blue",
        }}
      >
        로그아웃
      </div>
    );
  } else {
    return <div>로그인</div>;
  }
  // return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
};

export default Main;
```;

// 별도의 css 파일을 작성하여 전달하는 방법
// Main.css 에 스타일 작성후 jsx 파일에서 import
// import "./Main.css"; 이런식으로 불러오기
// 코드에서 className으로 클래스 부여

```
// Main.css

.logout {
  background-color: red;
  border-bottom: 5px solid green;
}
```;

```
import "./Main.css";

const Main = () => {
  const user = {
    name: "한주연",
    isLogin: true,
  };

  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
  // return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
};

export default Main;
```;
