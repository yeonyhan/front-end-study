// useRef로 컴포넌트의 변수 생성하기

```
const refObject = useRef();
```
// useRef : Reference 객체 생성
// -> 컴포넌트 내부 변수로 활용 가능
// -> 어떤 경우에도 리렌더링을 유발하지 않음

// useState : State를 생성
// -> 컴포넌트 내부 변수로 활용 가능
// -> 값이 변경되면 컴포넌트 리렌더링

// => useRef는 렌더링에 영향을 미치고 싶지 않은 변수에 사용

// useRef로 컴포넌트가 렌더링하는 특정 DOM 요소에 접근 및 조작 가능
// ex) 특정 DOM 요소에 포커스, 스타일을 변경 등

// 레퍼런스 객체 내 current 프로퍼티에 값을 담아둠
// current의 값의 기본값은 undefined
// useRef 초기값 설정으로 기본값 변경
// 점표기법으로 current 값 할당 가능

```
// 버튼을 이용하여 refObj 객체의 current 값을 업데이트해도
// 컴포넌트 전체를 리렌더링 하지않음
const refObj = useRef(0);

return (
    <button
    onClick={() => {
        refObj.current++;
        console.log("Register 렌더링");
    }}
    >
        ref + 1
    </button>
)
;
```
// --------------------------------------------

// 레퍼런스 객체 활용 사례 1

// 사용자의 수정 횟수를 카운트하는 기능
// 수정이 발생할 때마다 countRef의 값 1씩 증가

```
  const countRef = useRef(0);

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
```;

// --------------------------------------------

// 레퍼런스 객체 활용 사례 2
// 컴포넌트가 렌더링하고 있는 DOM 요소를 직접 조작

// 인풋에 이름을 입력 안한 경우
// 이름을 입력하는 DOM 요소에 포커스

```
const inputRef = useRef();

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      console.log(inputRef.current);
      inputRef.current.focus();
    }
  };

    return (
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
    )
```;

// --------------------------------------------

// 심화 내용
// 컴포넌트 내부에서 리렌더링을 유발하지 않는 변수로
// useRef 대신 let 변수를 사용해서는 안될까?

// 수정이 일어나도 변수의 값은 1로 고정됨
```
  let count = 0;

  const onChange = (e) => {
    count++;
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
```
// 이러한 현상이 발생하는 이유
// 이벤트핸들러가 실행되면서 state 값을 변경하여 컴포넌트 전체가 리렌더링
// 리렌더링된다는 것은 함수가 다시 호출되는 것이기 때문에
// 함수 내부 모든 코드가 다시 실행됨

// 따라서 변수 할당도 다시 실행되므로 0으로 계속 리셋
// 출력되는 값이 1로 고정되는 현상 발생

// => useRef 또는 useState 등을 이용하여 만든 변수들은
// 컴포넌트가 리렌더링 되어도 리셋되지 않음

// 변수를 컴포넌트 외부에서 선언한다면?
// 변수가 리셋되지않고 수정횟수가 카운팅이 되긴하나
// 만약 부모 컴포넌트에서 해당 컴포넌트를 여러번 렌더링한다면
// 여러개의 컴포넌트가 하나의 변수를 공유하기 때문에
// 수정횟수가 의도하지 않게 증가함

// 이러한 현상이 발생하는 이유
// 함수만 여러번 호출한 것이고 외부 변수는 한번만 선언되므로
// 하나의 변수를 공유하기 때문

// --------------------------------------------

```
import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

export default function Register() {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const refObj = useRef(0);
  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      console.log(inputRef.current);
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          refObj.current++;
          console.log("Register 렌더링");
        }}
      >
        ref + 1
      </button>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
}
```;
