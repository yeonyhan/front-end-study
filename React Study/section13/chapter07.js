// 공통 컴포넌트 구현하기

// 페이지 라우팅, 글로벌 에이아웃 설정 등 밑작업 먼저 완료
// -> 공통 컴포넌트 구현
// -> 개별 페이지 및 복잡한 기능 구현으로 개발 진행

// 버튼 컴포넌트 구현
// src > components 폴더 > Button.jsx
// 부모에게 받는 props에 따라 다르게 동작하도록 설정
// text : 버튼에 표시할 텍스트
// type : 버튼의 타입 (긍정, 일반, 부정)
// onClick : 클릭시 실행될 이벤트핸들러 함수

// 컴포넌트의 props 값에 따라 각각 다른 스타일을 적용시키려면
// props의 값에 따라 className을 동적으로 변경하도록 설정
// props로 전달받은 type에 따라 Button_NEGATIVE, Button_POSITIVE 등으로 설정
// 해당 클레스네임으로 css를 다르게 부여하여 다른 스타일 적용
// 설정하지 않는 type의 css는 기본 스타일이 적용됨

// Button.jsx
function Button({ text, type, onClick }) {
  return (
    <button onClick={onClick} className={`Button Button_${type}`}>
      {text}
    </button>
  );
}

export default Button;

// 부모에서 버튼 컴포넌트를 불러와 props 전달
// 타입이 default인 경우 생략 가능 (type이 undefined로 전달)
```
// App.jsx

retrun(
          <Button
        text={"123"}
        onClick={() => {
          console.log("버튼클릭");
        }}
      />
      <Button
        text={"123"}
        type={"POSITIVE"}
        onClick={() => {
          console.log("버튼클릭");
        }}
      />
      <Button
        text={"123"}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("버튼클릭");
        }}
      />
)
```;

// --------------------------------------------

// 헤더 컴포넌트 구현
// src > components 폴더 > Header.jsx
// props 요소 1. title (center에 들어갈 타이틀 내용),
// props 요소 2. leftChild (left에 들어갈 버튼, html 요소 등),
// props 요소 3. rightChild (right에 들어갈 버튼, html 요소 등)

```
// Header.jsx
function Header({ title, leftChild, rightChild }) {
  return (
    <header className="Header">
      <div className="header_left">{leftChild}</div>
      <div className="header_center">{title}</div>
      <div className="header_right">{rightChild}</div>
    </header>
  );
}
```
// 부모 컴포넌트에서 props 전달
```
// App.jsx
return (
          <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />
)
```;
