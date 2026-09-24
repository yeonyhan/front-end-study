// State로 사용자 입력 관리하기 1

// 1. 이름

// useState로 데이터 보관/업데이트
// 초기값 설정
const [name, setName] = useState("이름");

// 이벤트핸들러 함수 선언
// e.target.value로 input에 입력한 값에 접근 가능
const onChangeName = (e) => {
  console.log(e);
  setName(e.target.value);
};

// input의 onChage 속성으로 이벤트핸들러 함수 연결
// input에 입력할때마다 입력된 값이 state로 바로바로 보관
<input value={name} onChange={onChangeName} placeholder={"이름"} />;

// --------------------------------------------

// 2. 생년월일(날짜)

// useState로 데이터 보관/업데이트
const [birth, setBirth] = useState("");

// 이벤트핸들러 함수 선언
const onChangeBirth = (e) => {
  setBirth(e.target.value);
};

// input 태그의 type 속성을 "date"로 설정
// input 창 클릭시 date picker(달력)가 표시됨
<input value={birth} onChange={onChangeBirth} type="date" />;

// --------------------------------------------

// 3. 국적

// useState로 데이터 보관/업데이트
const [country, setCountry] = useState("");

// 이벤트핸들러 함수 선언
const onChangeCountry = (e) => {
  setCountry(e.target.value);
};

// 선택지가 제한적인 경우 selete 태그를 사용하여 선택지 설정
// select 태그 안에 option 태그로 선택지를 하나씩 생성
<select value={country} onChange={onChangeCountry}>
  <option value=""></option>
  <option value="kr">한국</option>
  <option value="us">미국</option>
  <option value="uk">영국</option>
</select>;

// select 태그는 옵션들 중 가장 위 옵션을 초기값을 자동 사용
// 아무것도 선택되지않은 초기값을 설정하고 싶다면
// 빈 option 태그를 사용

// option value 속성에 value 값을 다르게 설정하여
// state(country)에 입력한 value 값으로 저장할 수 있음

// --------------------------------------------

// 4. 자기소개

// useState로 데이터 보관/업데이트
const [bio, setBio] = useState("");

// 이벤트핸들러 함수 선언
const onChangeBio = (e) => {
  setBio(e.target.value);
};

// textarea 태그는 input 태그와 달리 여러 줄의 입력을 처리
<textarea value={bio} onChange={onChangeBio} />;

// --------------------------------------------

// 간단한 회원가입 폼
import { useState } from "react";

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
