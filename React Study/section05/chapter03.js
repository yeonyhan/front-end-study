// JSX로 UI 표현하기

// JSX 란?
// JSX : JavaScript Extensions
// 확장된 자바스크립트의 문법으로 자바스크립트와 html 혼용 가능

// 컴포넌트 내부에 변수를 선언하고,
// 리턴문 내에서 해당 변수를 렌더링할 수 있음

// --------------------------------------------

// JSX 문법 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 삼항연산자, 값, 변수 이름 처럼 한줄의 코드가 특정한 값으로 표현
// 조건문, 반복문은 오류 발생

// 2. 숫자, 문자열, 배열 값만 렌더링된다.
// boolean, null, undefined 값은 렌더링되지 않음
// 객체 값을 그대로 렌더링시 오류 발생 ->  점 표기법 이용

// 3. 모든 태그는 닫혀있어야 한다.
// 닫는 태그 생략시 오류 발생

// 4. 최상위 태그는 반드시 하나여야만 한다.
// 최상위 태그 : 리턴문 내 가장 높은 위치에 있는 태그
// 빈 태그도 사용 가능 <></>
```
const Main = () => {
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

// 인라인 스타일로 DOM 요소에 스타일 부여하는 방법
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
// 컴포넌트에서 css 파일을 import
// className으로 클래스 이름 부여

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
