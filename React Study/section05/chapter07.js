// State와 Props

// 자식 컴포넌트는 부모로부터 받는 props의 값이 바뀌면
// 바뀔때마다 자식 컴포가 다시 호출되면서 리렌더링이 발생

// 리액트 컴포넌트는 자신이 갖고있는 state가
// 변경되지 않더라도 부모로부터 받는 props 값이
// 변경되면 다시 리렌더링됨

// --------------------------------------------

// 리렌더링 발생 상황 3가지
// 1. 자신이 관리하는 state 값이 변경되었을 때
// 2. 제공받는 props의 값이 변경될 때
// 3. 부모 컴포넌트가 리렌더링되면 자신 컴포넌트도 리렌더링

```
import { useState } from "react";
import "./App.css";

// 부모 컴포넌트로부터 props로 전구의 상태를
// props의 light 로 받아옴
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
// 부모 컴포의 리렌더링때문에 불필요하게
// 리렌더링되는 자식 컴포넌트가 많아지게 되면 성능이 저하
// 이러한 경우를 방지하기 위해
// 관련 없는 두 개의 state를 하나의 컴포넌트에 몰아놓기보다
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

// 더 정리를 하자면
// Counter, Bulb 컴포넌트를 components 폴더에 모듈화하여
// App 파일 내 import 문으로 불러와서 사용

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
