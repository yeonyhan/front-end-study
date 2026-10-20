// Create - 투두 추가하기

// 새로운 todo 아이템을 객체 형태로 전달
// 전달받은 객체를 기존 todos 배열에 추가

// useState의 setTodos 함수를 이용하여 값을 업데이트
// newTodo 객체와 기존 todos (스프레드 연산자) 객체를 배열로 전달

```
//App.jsx

const onCreate = (content) => {
  const newTodo = {
    id: 0,
    isDone: false,
    content: content,
    date: new Date().getTime(),
  };

  setTodos([newTodo, ...todos]);
};
```
// App컴포의 onCreate 함수를 props 로 받아 자식 Editor컴포에서 사용
// onCreate 함수를 구조분해할당으로 받아옴
// ({ onCreate }) 구조분해할당이 아닌 (props)인 경우 props.onCreate 점 표기법을 사용해야함

// 추가 버튼에서 onClick 이벤트핸들러로 onSubmit 연결
// onSubmit 함수는 onCreate 함수를 호출
// onCreate 함수 인수로 input 값 전달

```
// Editor.jsx

import { useState } from "react";
import "./Editor.css";

export default function Editor({ onCreate }) {
  const [content, setContent] = useState("");

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    onCreate(content);
  };

  return (
    <div className="Editor">
      <input
        value={content}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}
```;

// 추가한 아이템들의 id가 모두 0로 중복되는 문제점
// => 새로운 todo 객체를 생성할때 id를 0으로 고정해두었기 때문

// id는 고유해야하므로 id를 기록하기 위한 레퍼런스 객체를 생성
// useRef의 초기값을 겹치지않는 값으로 초기화 설정
// newTodo 객체의 id 속성을 idRef.current++ 로
// 생성할때마다 1씩 증가하도록 설정.

```
// App.jsx

const idRef = useRef(3);

const newTodo = {
  id: idRef.current++,
  isDone: false,
  content: content,
  date: new Date().getTime(),
};
```;

// --------------------------------------------

// 개선 1.
// 새 todo input 값이 비어있을 때는
// 추가되지 않도록 하고 입력 폼에 포커스 추가

// onSubmit 함수에서 조건문을 사용하여
// 현재 content 상태의 값이 빈 문자열이면 함수 강제 return

// input에 ref 속성을 추가하여 접근
// onSubmit 함수 내 빈 입력이 들어왔을 때
// 레퍼런스 객체의 current를 사용하여 포커스 시킴

```
// Editor.jsx

import { useState } from "react";
import "./Editor.css";

export default function Editor({ onCreate }) {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}
```;

// --------------------------------------------

// 개선 2.
// 새로운 투두 추가 후 인풋 폼의 텍스트가 비워지도록 개선
// onSubmit 함수에서 onCreate 호출 후 setContent로 빈 문자열 설정

```
// Editor.jsx

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
```;

// --------------------------------------------

// 개선 3.
// 인풋 폼에서 엔터키를 입력했을 때 새로운 투두가 추가되도록 개선
// input 속성에 onKeyDown을 추가하고 onKeyDown 이벤트 핸들러 연결
// onKeyDown 이벤트는 사용자가 키보드를 누를 때
// 어떤 키를 눌렀는지 이벤트 객체(e)의 keyCode 프로퍼티에 저장하는 역할

```
// Editor.jsx

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
```;
