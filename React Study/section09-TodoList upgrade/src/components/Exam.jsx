import React, { useReducer } from "react";

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
