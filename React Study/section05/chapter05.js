// 이벤트 핸들링
// Event Handling

// Event
// 웹 내부에서 발생하는 사용자의 행동
// ex) 버튼 클릭, 메세지 입력, 스크롤 등등

// Handling
// 다루다, 취급하다, 처리하다

// Event Handling
// 이벤트가 발생했을 때 그것을 처리하는 것
// ex) 버튼 클릭시 경고창 노출

// --------------------------------------------

// onClick
// 버튼을 클릭 했을 때 동작하는 함수를 전달
// 익명함수를 전달하거나 함수의 이름을 전달

// 함수 전달시 주의할 점
// 함수의 호출 결과를 전달하면 안됨
// 콜백함수를 전달하듯 함수의 이름만 전달

```
// onClick에 익명함수를 전달

const Button = ({ text }) => {
  return (
    <button
      onClick={() => {
        console.log(text);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
```;

```
// onClick에 미리 작성한 함수를 함수 이름만 전달

const Button = ({ text }) => {
  const onClickButton = () => {
    console.log(text);
  };
  return <button onClick={onClickButton}>{text}</button>;
};

export default Button;
```;

// --------------------------------------------

// 이벤트 객체
// 이벤트 핸들러 함수를 호출하면서
// 매개변수로 이벤트 객체를 제공

// SyntheticBaseEvent가 출력됨
// 합성 이벤트 객체?
// 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태

// 다양하고 많은 브라우저, 회사도 다르기 때문에 동작도 조금씩 다름
// Event 객체도 브라우저마다 서로 다르기 때문에
// 브라우저 별 스펙이 다른 문제 (Cross Browsing Issue)가 발생

// 크로스브라우징이슈를 해결해주는 객체가
// 리액트이 합성 이벤트 객체
// 모든 브라우저에서의 이벤트 객체를 하나로 통일한 형태
// 발생한 이벤트와 관련된 모든 정보가 있음
// target : 이벤트가 발생한 발원지

```
// 이벤트 객체 확인

const Button = ({ text }) => {
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };
  return <button onClick={onClickButton}>{text}</button>;
};

export default Button;
```;
