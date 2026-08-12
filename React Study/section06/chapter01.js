// 프로젝트1. 카운터 앱

// 프로젝트 소개 및 준비
// 버튼을 클릭하면 카운트가 증가하는 간단한 기능의 앱

// Viewer 컴포넌트
// 현재 카운트를 표시

// Controller 컴포넌트
// 카운트를 증가/감소시키는 버튼

// App 컴포넌트
// Viewer와 Controller를 렌더링하는 부모 컴포넌트

// --------------------------------------------

// Viewer 컴포넌트의 부모 컴포넌트인 App 컴포넌트에서
// 카운트 수를 state로 업데이트하는 함수를 작성

// Viewer 컴포와 Controller 컴포는 부모/자식 관계가 아니기 때문에
// 카운트 값을 props로 서로 공유할 수 없으므로
// 부모 컴포인 App 에서 값을 자식 컴포에게 props로 전달

// App 컴포넌트에서 count 값을 state로 업데이트하여
// Viewer 자식 컴포에게 count 값을 props로 전달

// App 컴포 내부

const [count, setCount] = useState();

(<Viewer count={count} />)
// Viewer 컴포
```
  import React from "react";
  
  export default function Viewer({ count }) {
    return (
      <div>
        <div>현재 카운트 :</div>
        <h1>{count}</h1>
      </div>
    );
  }
```;

// App 컴포넌트에서 state를 이용하여 이벤트 핸들러 작성
// Controller 자식 컴포에게 이벤트 핸들러를 props로 전달

// App 컴포 내부
const onClickButton = (value) => {
  setCount(count + value);
};

(<Controller onClickButton={onClickButton} />)
// Controller 컴포
```
import React from "react";

export default function Controller({ onClickButton }) {
  return (
    <div>
      <button
        onClick={() => {
          onClickButton(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          onClickButton(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          onClickButton(-100);
        }}
      >
        -100
      </button>
      <button
        onClick={() => {
          onClickButton(+1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          onClickButton(+10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          onClickButton(+100);
        }}
      >
        +100
      </button>
    </div>
  );
}
```;

// Controller 각 버튼에 onClick 속성에
// 화살표 함수 안에서 onClickButton 이벤트핸들러를 넣은 이유

// onClick = {onClickButton} 으로 작성할 경우
// 원하는 인수를 넣을 수 없음

// onClick = {() => {onClickButton(-1);}} 으로 작성할 경우
// 원하는 인수를 넣을 수 있음

// --------------------------------------------

// 최종 정리

// 1.
// 리액트에서 화면을 구성할 때
// 여러 개의 컴포넌트들이 부모와 자식관계를 이루며
// 계층 구조를 형성함

// 2.
// 특정 컴포넌트가 다른 컴포넌트에게
// 데이터를 전달하려면
// 반드시 두 컴포넌트 서로 부모/자식 관계여야 함

// 3.
// 하나의 state를 여러 컴포넌트에서 관리하게 될 경우 (count처럼)
// 이 state는 컴포넌트들의 공통 부모가 되는 곳에 생성/관리

// 이처럼
// state를 계층 구조상에서 위로 끌어올려서
// 그 아래의 컴포넌들이 모두 공유할 수 있도록 하는 방법을
// State Lifting (State 끌어 올리기)

// 데이터는 항상 위(부모)에서 아래(자식)으로
// 단방향 데이터 흐름
// 파악하기 쉽고 직관적 관리할 수 있음
