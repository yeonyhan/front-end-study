// useRef로 컴포넌트의 변수 생성하기

// useRef 란?
// 새로운 Reference 객체를 생성하는 기능
// 컴포넌트 내부의 변수로써 일반적인 값 저장

const refObject = useRef();

// useRef : Reference 객체를 생성
// -> 컴포넌트 내부 변수로 활용 가능
// -> 어떤 경우에도 리렌더링을 유발하지 않음

// useState : State를 생성
// -> 컴포넌트 내부 변수로 활용 가능
// -> 값이 변경되면 컴포넌트 리렌더링

// 따라서 useRef는
// 렌더링에 영향을 미치고 싶지 않은 변수를 생성할 때 사용

// useRef를 이용하면 컴포넌트가 렌더링하는 특정 DOM 요소에 접근 가능
// 해당 요소를 조작하는 것까지 가능
// 예를 들어 특정 요소에 포커스를 준다거나
// 해당 요소의 스타일을 변경시키는 동작을 구현할 수 있음

// --------------------------------------------

// refObjcet는 객체 내 current 프로퍼티가 들어있음
// current의 값은 undefined (기본값)
// 레퍼런스 객체란 current 프로퍼티에 현재 보관할 값을 담아두기만 하는
// 단순한 자바스크립트 객체

// useRef에 초기값 = current 프로퍼티 값
// 또는 refObject.current 로 값을 할당

// 버튼을 이용하여 refObj 객체의 current 값을 업데이트하여도
// 컴포넌트 전체를 리렌더링 하지않음

```
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
```;

// --------------------------------------------

// 레퍼런스 객체 활용 사례 1

// 4개의 폼에 사용자가 얼마나 많은 횟수의 변경을 일으켰는지
// 수정 횟수를 카운트하는 기능을 구현
// 수정이 발생할 때마다 countRef의 값을 1씩 증가

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
// 회원가입을 제출하는 기능을 구현

// 인풋에 이름을 정확히 입력했는지 확인
// 입력을 안한 경우 이름을 입력하는 DOM 요소에 포커스(선택된 상태)
// input 태그에 ref 속성을 넣고 레퍼런스 객체 연결
// input 태그라는 DOM 요소가 레퍼런스 객체에 저장됨
// 레퍼런스의 current 값에 focus 메서드를 사용

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
// 이벤트핸들러가 실행되면서 state 값을 변경하여
// 컴포넌트 전체가 리렌더링됨
// 리렌더링된다는 것은 함수가 다시 호출되는 것이기 때문에
// 함수 내부 모든 코드가 다시 실행됨

// 따라서 변수 할당도 다시 실행되므로 0으로 계속 리셋
// 출력되는 값이 1로 고정되는 현상 발생

// useRef 또는 useState 등을 이용하여 만든
// 리액트의 특수한 변수들은 컴포넌트가
// 리렌더링 된다고 해도 리셋되지 않는 특성

// 변수를 컴포넌트 외부에서 선언한다면?
// 변수가 리셋되지않고 수정횟수가 카운팅이 됨
// 그러나 이 방법은 효율적이지 않음
// 만약 부모 컴포넌트에서 해당 컴포넌트를 여러번 렌더링하게 되면
// 여러개의 컴포넌트가 하나의 변수를 공유하기 때문에
// 수정횟수가 의도하지 않게 증가함

// 이러한 현상이 발생하는 이유
// 부모 컴포넌트에서 해당 컴포넌트를 여러번 렌더링했다는 것은
// 함수만 여러번 호출한 것이므로
// 해당 컴포넌트의 외부 변수는 한번만 선언되기때문에
// 하나의 변수를 공유하게 됨

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
