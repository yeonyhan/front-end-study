// React Hooks

// 클래스 컴포넌트의 기능을
// 함수 컴포넌트에서도 이용할 수 있게 하는 메서드

// 클래스 컴포넌트는 모든 기능을 이용할 수 있음 (State, Ref 등)
// 함수 컴포넌트는 UI 렌더링만 할 수 있음

// 그러나 클래스 컴포넌트는 문법이 복잡하여
// 함수 컴포넌트에서 클래스 컴포넌트의 기능을
// 낚아채듯이 (hook) 가져와서 이용하도록 함

// useState, useRef 모두 React Hooks
// 이름 앞에 동일한 접두사 use가 붙음

// --------------------------------------------

// Hook 관련 팁 3가지

// 1.
// 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 리액트 훅을 컴포넌트 밖에서 호출시 오류

// 2.
// 조건부로 호출될 수 없음
// 조건문 또는 반복문 내부에서 호출 불가능
// 서로 다른 훅들의 호출 순서가 혼란스러워지기 때문

// 3.
// 나만의 훅(Custom Hook)을 직접 만들 수 있음
// 반복적인 코드가 있고 해당 코드에 리액트 훅이 있다면
// 커스텀 훅으로 만들어서 재활용 가능

// use를 사용하지않은 일반함수를 훅처럼 사용시 오류
// 함수 이름 앞에 use 키워드를 추가하여 커스텀 훅으로 변환
// 커스텀훅은 src > hooks 폴더에서 관리

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
