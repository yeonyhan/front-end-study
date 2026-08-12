// State로 사용자 입력 관리하기 1

// 1. 이름

// input 태그에 입력된 내용을 state로 보관/업데이트 (name, setName)
// input 값이 변경되었을 때를 의미하는 onChange 이벤트핸들러 설정
// 이벤트핸들러 함수를 작성하여 입력 (onChangeName)

// onChangeName 함수에서는 현재 input에 입력된 값을 받아와서
// setName 함수를 호출하여 state에 보관
// 이벤트 객체를 e를 인수로 받아와서 출력

// 이벤트 객체 내 target 프로퍼티에 value 값에
// 현재 input에 입력한 값이 보관되어있음
// e.target.value 로 input에 입력한 값에 접근할 수 있음

// setName 함수를 호출하여 e.target.value 값을 전달
// 이제 input 태그에 값을 입력하면
// 이벤트 핸들러인 onChangeName 함수에 setName 함수가 호출되고
// 입력된 값이 name state로 바로바로 보관됨

// input에 초기값을 설정해주고 싶다면
// useState("이름")로 입력하고
// input 태그 value 속성으로 state인 name을 설정

// 리액트에서 상태를 이용해서 사용자의 입력을 저장하고 처리할 때
// 초기값을 설정하는 경우도 많기 때문에
// onChange와 value 속성 함께 처리

// --------------------------------------------

// 2. 생년월일(날짜)

// input 태그의 type 속성을 "date"로 설정
// input 창 클릭시 date picker 가 표시됨
// useState 사용하여 state 보관/업데이트
// onChangeBirth 이벤트핸들러 함수 작성
// setBirth 호출하고 e.target.value 전달
// input onChange 속성에 onChangeBirth 이벤트핸들러 전달
// input value 속성에 birth state를 전달

// --------------------------------------------

// 3. 국적

// 국적처럼 선택의 범위가 제한된 경우
// 제한된 선택지를 미리 제공하는 Select Box를 제작
// select 태그 안에 option 태그로 선택지를 하나씩 생성

// select 태그는 옵션들 중 가장 위 옵션을 초기값을 자동 사용
// 아무것도 선택되지않은 초기값을 설정하고 싶다면
// 빈 option 태그를 사용

// useState 사용하여 state 보관/업데이트
// onChangeCountry 이벤트핸들러 함수 작성
// setCountry 호출하고 e.target.value 전달
// select onChange 속성에 onChangeCountry 이벤트핸들러 전달
// select value 속성에 country state를 전달

// Select Box의 경우 화면에 표시되는 선택지와
// 실제 코드 상에 사용할 value 값을 다르게 선택할 수 있음
// option value 속성에 value 값을 다르게 설정하여
// state(country)에 입력한 value 값으로 저장됨

// --------------------------------------------

// 4. 자기소개

// textarea 태그는 input 태그와 달리 여러 줄의 입력을 받을 수 있음
// 내부 동작은 input 태그와 동일함
// useState 사용하여 state 보관/업데이트
// onChangeBio 이벤트핸들러 함수 작성
// setBio 호출하고 e.target.value 전달
// select onChange 속성에 onChangeBio 이벤트핸들러 전달
// select value 속성에 bio state를 전달

// --------------------------------------------

```
// Register.jsx
import { useState } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

export default function Register() {
  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  const onChangeName = (e) => {
    console.log(e);
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder={"이름"} />
      </div>
      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
      </div>

      <div>
        <select value={country} onChange={onChangeCountry}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea value={bio} onChange={onChangeBio} />
      </div>
    </div>
  );
}
```;
