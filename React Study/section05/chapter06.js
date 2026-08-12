// State로 상태 관리하기

// State란?
// 켜진 상태의 전구 또는 꺼진 상태의 전구
// 전구 끄기, 전구 키기 등으로 상태를 변화시킬 수 있음
// => 현재 가지고 있는 형태나 모양을 정의
// 변화할 수 있는 동적인 값

// State를 갖는 React 컴포넌트
// State의 값에 따라 렌더링 되는 UI가 결정됨
// State가 OFF -> 꺼진 상태의 전구
// State가 ON -> 켜진 상태의 전구
// State가 OFF -> ON 으로 바뀌면
// 리액트가 상태변화를 감지하여
// 컴포넌트를 다시 UI를 렌더링 = 리렌더링(Re-Rendering)

// 하나의 컴포넌트에 여러개의 컴포넌트 설정 가능
// isLightOn, isBroken, isDirty 등 전구의 여러 상태 설정

// --------------------------------------------

// useSate 훅을 사용하여 상태값 설정
// useState 훅 호출시 두개의 요소를 담은 배열 반환
// useState 훅 인수로 초기값을 넣어 호출
// 첫번째 요소 : 새롭게 생성된 state 값, 초기값
// 두번째 요소 : 상태를 변화시키는 함수 (상태변화함수)
// 반환값(배열)을 구조분해할당으로 요소를 할당

// state의 값을 변경시키는 버튼 추가하여 상태를 변경해주면
// 앱 함수를 다시 호출하고 새로 반환한 값을 화면에 다시 렌더링
// => 컴포넌트 리렌더링

```
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");

  // 클릭시 전구의 상태를 변경(ON, OFF)하는 버튼
  // 클릭시 상태값을 1씩 증가시키는 버튼
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

// 왜 let, const로 변수를 만들지 않고,
// useState를 사용하여 상태값을 저장하는지?

// 버튼을 클릭하면 변수의 값이 변경되긴 하지만
// 변수의 값이 바뀐다고 컴포넌트가 리렌더링되지않음
// 화면에 변경된 값이 렌더링(표시)되지않음
