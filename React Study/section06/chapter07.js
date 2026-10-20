// State와 Props

// 리렌더링 발생 상황
// 1. 자신이 관리하는 state 값이 변경되었을 때
// 2. 제공받는 props의 값이 변경될 때
// 3. 부모 컴포넌트가 리렌더링되었을 때 자식 컴포넌트도 리렌더링

```
import { useState } from "react";
import "./App.css";

// 부모 컴포넌트로부터 전구의 상태를 props로 받아옴
const Bulb = ({ light }) => {
  console.log(light);
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");

  // 클릭시 전구의 상태를 변경(ON, OFF)하는 버튼
  // 클릭시 상태값을 1씩 증가시키는 버튼
  return (
    <>
      <div>
        <Bulb light={light} />
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
```
// 부모 컴포의 리렌더링때문에
// 자식 컴포넌트가 불필요하게 리렌더링되는 상황이
// 많이 발생하면 성능이 저하되므로

// 이를 방지하기 위해
// 관련없는 state 들을 하나의 컴포넌트에 몰아놓기보다
// 서로 다른 컴포넌트로 분리해주는 것이 좋음

```
import { useState } from "react";
import "./App.css";

const Counter = () => {
  const [count, setCount] = useState();

  return (
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
  );
};

const Bulb = () => {
  const [light, setLight] = useState("OFF");
  console.log(light);

  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}

      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
};

function App() {
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
```;

// 더 정리해보기
// Counter, Bulb 컴포넌트를 모듈화
// 부모 컴포넌트에서 자식 컴포넌트를 import 하여 사용

```
import "./App.css";
import Counter from "./components/Counter";
import Bulb from "./components/Bulb";

function App() {
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
```;
