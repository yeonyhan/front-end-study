// State로 상태 관리하기

// State란?
// 현재 가지고 있는 형태나 모양을 정의
// 변화할 수 있는 동적인 값

// State는 컴포넌트의 현재 상태를 보관하는 변수
// State의 값에 따라 렌더링 되는 UI가 결정됨

// 전구의 상태로 켜진 상태, 꺼진 상태가 있음
// State가 OFF(꺼짐) -> ON(켜짐) 으로 바뀌면
// 리액트가 상태변화를 감지하여
// 컴포넌트를 다시 UI를 렌더링 = 리렌더링
// isLightOn, isBroken, isDirty 등 전구의 여러 상태 설정 가능

// --------------------------------------------

// useSate 훅을 사용하여 상태값 설정
// useState 인수 : 초기값(처음 state 값) 설정

// useState 훅은 두개의 요소를 담은 배열을 반환
// useState 반환값의 첫번째 요소 : 현재 상태 값
// useState 반환값의 두번째 요소 : 상태를 변화시키는 함수

// 반환값(배열)을 구조분해할당으로 요소를 할당
// state의 값이 변경되면 새로 반환된 값을 화면에 리렌더링

```
import { useState } from "react";
import "./App.css";

function App() {
  // count 값의 상태를 변경 및 저장
  const [count, setCount] = useState(0);
  // 전구의 켜짐/꺼짐의 상태를 변경 및 저장
  const [light, setLight] = useState("OFF");

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
```;

// --------------------------------------------

// useState를 사용하지않고
// let, const 만으로 변수를 관리한다면?

// 버튼을 클릭하면 변수의 값이 변경되긴 하지만
// 변수의 값이 바뀐다고 컴포넌트가 리렌더링되지않음
// 즉, 화면에 변경된 값이 렌더링(표시)되지않음

// useState를 사용하면
// 상태값이 변경되면 화면이 리렌더링됨
