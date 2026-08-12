// useReducer 소개

// useReducer 란?
// 컴포넌트 내부에 새로운 state를 생성하는 리액트 훅
// 모든 useState는 useReducer로 대체 가능

// useState와의 차이점
// 상태 관리 코드를 컴포넌트 외부로 분리할 수 있음

// --------------------------------------------

// useState를 사용하면?
// 컴포넌트 내부에 상태 관리 코드를 작성해야함
// state를 관리하는 상태 관리 함수를
// 컴포넌트 내부에서만 작성할 수 있음

// useState를 사용하여 todos와 setTodos를 만들면
// 이러한 state를 컴포넌트 내부에서만 접근할 수 있었음
// 따라서 이를 관리하는 코드들도 반드시 컴포넌트 내부에 작성해야함

// state의 새로운 값을 추가하는 onCreate,
// state의 특정 값을 수정하는 onUpdate,
// state의 특정 값을 삭제하는 onDelete 와 같은
// todos state 를 관리하는 코드들을 모두
// App 컴포넌트 내부에 작성하기 때문에
// 코드가 길어져서 복잡해지고 유지보수가 어려워짐

// 이 코드들은 컴포넌트 외부의 별도의 함수로서
// 분리해줄 필요가 있음
// 이를 위해 useReducer를 사용

// --------------------------------------------

// useReducer를 사용하면?
// 컴포넌트 외부에 상태 관리 코드를 분리할 수 있음
// 컴포넌트 내부에서 state만 생성하고
// 이를 관리하는 reducer 함수는 컴포넌트 외부에서 작성 가능

const [state, dispatch] = useReducer();

// useState 처럼 state를 생성해서 배열의 첫번째 요소를 반환
// dispath(발송하다)는 상태 변화를 요청하기만 하는 함수
// 상태 변화가 있어야 한다는 사실을 알리는(발송하는) 함수

// dispatch 함수를 호출하게 되면 상태변화가 요청되고
// useReducer가 상태 변화를 실제로 처리할 함수를 호출
// 그 함수는 직접 작성해야 하며 (컴포넌트 외부)

// 이 reducer(변환기) 함수를 useReducer에 첫번째 인수로 넣음
// reuder 함수는 상태를 실제로 변환시키는 변환기 역할
// useReducer에 두번째 인수로는 state 값의 초기값 설정

const [state, dispatch] = useReducer(reducer, 0);

// 컴포넌트 내부에서 버튼이 클릭되었을 때
// dispatch 함수를 호출해서 상태 변화를 발송(요청)

// onClickPlus 이벤트핸들러 함수 작성하여 dispatch 함수를 호출
// dispatch 함수에 인수로는 상태가 어떻게 변화되길 원하는지 전달

// 보통은 객체 형태로 type 프로퍼티에 상태를 어떻게 변화시킬지 적음
// type 프로퍼티로 INCREASE 전달하여 증가시킨다고 요청 (어떻게)
// data 프로퍼티로 1만큼 증가시킨다고 요청 (얼만큼)

const onClickPlus = () => {
  dispatch({
    type: "INCREASE",
    data: 1,
  });
};

// 인수로 전달된 요청의 내용을 담고 있는 객체를
// -> Action 객체라고 부름 (type, data를 담고있는 객체)

// reducer 함수의 첫번째 매개변수로 현재의 state 값을 전달,
// 두번째 매개변수로 요청 내용이 담긴 action 객체를 전달

function reducer(state, action) {
  console.log(state, action);
}

// 전달받은 state의 값과 action 객체를 이용하여
// 실제로 state의 값을 변경
// -> reducer 함수에서 새로운 state의 값을 반환하면 됌
// 반환된 값을 useReducer가 불러와서 실제로 state의 값을 변경시킴

function reducer(state, action) {
  console.log(state, action);

  if (action.type === "INCREASE") {
    return state + action.data;
  }
}

// 동작 순서 정리
// 버튼 클릭 -> onClickPlus 이벤트핸들러 실행 -> dispatch 함수 호출
// -> reducer 함수 실행 -> 첫번째 매개변수 state에 초기값 할당,
// 두번째 매개변수 action에 action 객체 내용 할당
// -> reducer 함수 내부 조건문에 따라 반환된 값 -> useReducer의 reducer에 들어감
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

// action 타입이 많아지는 경우
// if문 대신 switch문으로 작성하는 것이 일반적

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
