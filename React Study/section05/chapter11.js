// React Hooks

// 클래스 컴포넌트의 기능을 함수 컴포넌트에서도
// 이용할 수 있도록 도와주는 메서드들

// 2017년도 이전 리액트
// 클래스 컴포넌트는 모든 기능을 이용할 수 있음 (State, Ref 등)
// 함수 컴포넌트는 UI 렌더링만 할 수 있음

// 그러나 클래스 컴포넌트는 문법이 복잡
// 함수 컴포넌트에서도 클래스 컴포넌트의 기능을
// 낚아채듯이 (hook) 가져와서 이용할 수 있게됨

// useState, useRef 모두 React Hooks
// 이름 앞에 동일한 접두사 use가 붙음
// 각각의 메서드는 Hook 이라고 부름

// 리액트 훅들을 함수 컴포넌트 내부에서만 호출할 수 있음
// 조건문, 반복문 내부에서는 호출 불가
// use 접두사를 이용하여 나만의 Hook 제작 가능 (Custom Hook)

// --------------------------------------------

// Hook 관련 팁 3가지

// 1.
// 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 리액트 훅을 컴포넌트 밖에서 호출시 오류 발생

// 2.
// 조건부로 호출될 수 없음
// 조건문 또는 반복문 내부에서 호출 불가능
// 서로 다른 훅들의 호출 순서가 혼란스러워지기 때문

// 3.
// 나만의 훅(Custom Hook)을 직접 만들 수 있음

```
import { useState } from "react";

export default function HookExam() {
  const [input, setInput] = useState();

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input value={input} onChange={onChange} />
    </div>
  );
}
```
// 간단한 인풋 함수이지만 여러개의 인풋이 있을 경우
// 비슷한 코드들이 반복되어 비효율적

```
  const [input, setInput] = useState();

  const onChange = (e) => {
    setInput(e.target.value);
  };
```
// 반복적으로 작성되는 코드부분만 따로 빼내기
// 일반적인 함수에서 리액트 훅을 호출시 오류가 발생하므로
// 커스텀 훅으로 바꿔야 함
// 함수 이름 앞에 use 키워드를 추가 => 해당 함수를 커스텀 훅으로 판단

```
import { useState } from "react";

function useInput() {
  const [input, setInput] = useState();

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default function HookExam() {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
    </div>
  );
}
```;

// 반복적인 코드가 있고 해당 코드에 리액트 훅이 있다면
// 커스텀 훅으로 만들어 분리할 수 있으며
// 커스텀 훅을 재활용하여 여러번 반복 사용도 가능

// 커스텀 훅은 src 디렉토리 아래 hooks 폴더를 별도로 만들어서 관리
// src/hooks/useInput.jsx
