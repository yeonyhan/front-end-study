// useReducer 소개

// 컴포넌트 내부에 새로운 state를 생성하는 훅
// 모든 useState는 useReducer로 대체 가능

// useState와의 차이점
// 상태 관리 코드를 컴포넌트 외부로 분리 가능

// --------------------------------------------

// useState를 사용하면?
// state, setState 값은 컴포넌트 내부에서만 접근 가능하므로
// 이를 관리하는 코드(상태 관리 함수)도 컴포넌트 내부에 작성해야함

// 상태 관리 함수가 많아지면 (onCreate, onUpdate, onDelete 등)
// 코드가 길어지고 복잡해져 유지보수가 어려워지는 문제점

// --------------------------------------------

// useReducer를 사용하면?
// 컴포넌트 외부에 별도의 함수로서 상태 관리 코드를 분리할 수 있음
// 컴포넌트 내부에 state를 생성
// 이를 관리하는 reducer 함수는 컴포넌트 외부에 작성

```
const [state, dispatch] = useReducer();
```
// state를 생성해서 배열의 첫번째 요소를 반환
// dispath(발송하다)는 상태 변화를 요청하는 함수
// = 상태 변화가 있어야 한다는 사실을 발송하는 함수

// dispatch 함수 호출 -> 상태변화 요청 발송
// useReducer가 상태 변화를 처리할 함수 호출

// useReducer 첫번째 인수로 reducer(변환기) 함수
// reducer 함수는 상태를 실제로 변환시키는 변환기 역할
// useReducer에 두번째 인수로 state 초기값 설정

```
const [state, dispatch] = useReducer(reducer, 0);
```
// 컴포넌트 내부에서 버튼 클릭시 (onClickPlus 이벤트핸들러)
// dispatch 함수를 호출하여 상태 변화 요청을 발송
// 인수로는 객체 형태로 상태가 어떻게 변화되길 원하는지 전달

// type 프로퍼티 : INCREASE 전달하여 증가 (어떻게)
// data 프로퍼티 : 1만큼 증가 (얼만큼)

// action 객체
// 인수로 전달된 요청의 내용(type, data)을 담고 있는 객체

```
const onClickPlus = () => {
  dispatch({
    type: "INCREASE",
    data: 1,
  });
};
```
// reducer 함수
// 첫번째 매개변수로 state 값 전달,
// 두번째 매개변수로 action 객체 전달

```
function reducer(state, action) {
  console.log(state, action);
}
```
// state의 값을 변경시키는 코드를 작성
// reducer 함수에서 새로운 state의 값을 반환
// useReducer가 실제로 state의 값을 변경시킴

```
function reducer(state, action) {
  console.log(state, action);

  if (action.type === "INCREASE") {
    return state + action.data;
  }
}
```
// 동작 순서 정리
// 버튼 클릭 -> onClickPlus 이벤트핸들러 실행
// -> dispatch 함수 호출 -> reducer 함수 실행
// -> 첫번째 매개변수에 state 초기값 할당, 두번째 매개변수에 action 객체 할당
// -> reducer 함수 코드에 따라 반환된 값 -> useReducer의 reducer에 전달
// -> 새로운 state의 값으로 반영됨

```
import React, { useReducer } from "react";

function reducer(state, action) {
  console.log(state, action);

  if (action.type === "INCREASE") {
    return state + action.data;
  }

  if (action.type === "DECREASE") {
    return state - action.data;
  }
}

function Exam() {
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
}

export default Exam;
```;

// --------------------------------------------

// action 타입이 많아지는 경우 switch문으로 작성

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "INCREASE":
      state + action.data;
    case "DECREASE":
      state - action.data;
    default:
      return state;
  }
}
