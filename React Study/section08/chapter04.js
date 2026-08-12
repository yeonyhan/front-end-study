// Create - 투두 추가하기

// 새로운 todo 아이템을 객체 형태로 전달
// 전달받은 객체를 기존 todos 배열에 추가

// todos와 같은 state값은 push를 이용해서 값을 추가해서는 안되고
// 반드시 useState의 setTodos 함수를 이용하여 값을 업데이트
// setTodos로 배열을 전달
// 배열 내에는 기존 todos를 스프레드 연산자로 펼치고
// 배열 앞에 새 todo 아이템인 newTodo를 함께 작성

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
// Editor 컴포넌트에서 추가 버튼을 클릭했을때
// onCreate 함수를 호출하면서
// 인수로 Editot 컴포에 input에 작성된 값을 전달

// App 컴포에서 작성한 onCreate 함수를 Editor컴포에 prop으로 전달
// Editor 컴포에서 함수를 구조분해할당으로 받아옴

// Eidtor 컴포의 클릭버튼에서 onClick 이벤트핸들러로 onSubmit 작성
// onSubmit 함수는 onCreate 함수를 호출하고,
// onCreate 함수에 인수로 input 의 값을 전달

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

// 추가한 아이템들의 id가 모두 0로 중복되는 문제점 발생
// 이는 새로운 todo 객체를 생성할때 id를 0으로 고정해두었기 때문
// id는 고유해야하므로 id를 기록하기 위한 레퍼런스 객체를 생성
// useRef의 초기값을 겹치지않는 값으로 초기화하고
// newTodo 객체의 id 속성으 idRef.current++ 로
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
// 새 todo input 값이 비어있을 때는 추가되지 않도록 개선하고
// 입력 폼에 포커스를 추가

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
// 새로운 투두 추가 후 인풋 폼의 텍스트를 비워주도록 개선
// onSubmit 함수에서 onCreate 호출 후 setContent로 빈 문자열 설정.

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
// 어떤 키를 눌렀는지 이벤트 객체(e)의 keyCode 프로퍼티에 저장

```
// Editor.jsx

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
```;
