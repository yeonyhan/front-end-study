// 이벤트 처리하기

// Event
// 웹 내부에서 발생하는 사용자의 행동
// ex) 버튼 클릭, 메세지 입력, 스크롤 등

// Event Handling
// 이벤트가 발생했을 때 그것을 처리하는 것
// ex) 버튼 클릭시 경고창 노출

// --------------------------------------------

// onClick
// 버튼을 클릭 했을 때 동작하는 함수를 설정하는 이벤트 핸들러 함수
// 함수 자체(익명함수)를 전달하거나 함수의 이름을 전달

// 함수 전달시 주의할 점
// 함수의 호출 결과를 전달하면 안됨
// 즉시 함수가 실행되어 그 결과값만 전달하기 때문

```
// 1. 함수 자체(익명함수)를 전달

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
// 2. 미리 정의한 함수의 이름을 전달

const Button = ({ text }) => {
  // 함수 정의
  const onClickButton = () => {
    console.log(text);
  };

  return <button onClick={onClickButton}>{text}</button>;
};

export default Button;
```;

// --------------------------------------------

// 이벤트 객체
// 이벤트가 발생했을 때,
// 그 이벤트에 대한 모든 정보를 담고 있는 객체

// 이벤트 함수에 매개변수 e를 전달하여 출력하면
// SyntheticBaseEvent(합성 이벤트 객체)가 출력됨
// 모든 브라우저에서의 이벤트 객체를 하나로 통일한 형태

// 브라우저마다 Event 객체가 서로 달라서
// 크로스 브라우징 이슈가 발생하는데
// 합성 이벤트 객체가 이를 통일된 형태로 해결

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
