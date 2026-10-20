// Read - 투두리스트 렌더링하기

// todos state에 담긴 todo 데이터를
// 리스트 형태로 렌더링하는 기능

// 해당 기능은 List 컴포넌트에서 담당
// List 컴포넌트에 todos 데이터를 props로 넘겨줌

```
// App.jsx

 <List todos={todos} />
```
// 배열형태인 todos를 리스트 형태로 반복적으로 렌더링하기위해
// 배열메서드 map 메서드를 사용

// map 메서드
// : 배열의 각 요소에 콜백 함수를 수행 후 반환한 값을 모아 새로운 배열로 반환
// jsx에서는 콜백함수가 html 요소나 컴포넌트도 반환 가능
// 콜백 함수의 반환 값들이 리스트 형태로 화면에 렌더링

// TodoItem 컴포넌트에 props로 모든 todo 요소를 전달

```
import "./List.css";
import TodoItem from "./TodoItem";

export default function List({ todos }) {
  return (
    <div className="List">
      <h3>Todo List 👍</h3>
      <input placeholder="검색어를 입력하세요" />

      <div className="todos_wrapper">
        {todos.map((todo) => {
          return <TodoItem {...todo} />;
        })}
      </div>
    </div>
  );
}
```;

// 각각의 TodoItem 컴포넌트가 전달받은 props(todo 요소)에 따라 서로다른 렌더링

```
import "./TodoItem.css";

export default function TodoItem({ id, isDone, content, date }) {
  return (
    <div className="TodoItem">
      <input checked={isDone} type="chekbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
}
```;

// --------------------------------------------

// 오류 해결 1.
// onChange 핸들러가 없으면 체크박스를 수정할 방법이 없는데
// 폼필드에 checked 을 설정하면 오류 발생

// 당장의 오류를 제거하려면
// 수정이 불가능하다는 의미로 readOnly 속성을 임시 추가

```
    <input readOnly checked={isDone} type="chekbox" />
```;

// 오류 해결 2.
// 리액트에서는 내부적으로 리스트 형태로 렌더링된
// 컴포넌트 또는 요소들을 서로 구분할때 key prop으로 구분하므로
// 각 컴포넌트에 고유한 key prop을 추가 (value 값은 주로 id 데이터)

```
      <div className="todos_wrapper">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
```;

// --------------------------------------------

// 검색 기능 구현

// 검색어 변경시 List 컴포넌트가 리렌더링되도록 설정하기
// 현재 검색어를 search state로 보관하고 값이 바뀔 때마다
// List 컴포넌트가 리렌더링이 이뤄짐

// 현재의 검색결과에 해당하는 값들을 필터링하기
// 조건문을 사용하여
// -> 검색어가 없는 경우 전체 todos 반환
// -> 검색어가 있는 경우 filter, includes를 사용하여 필터링하여 반환

// 검색어가 todo 목록(todo.content)에 있다면 true를 반환 (includes)
// todos 요소들을 순환하다가 true 값들만 필터링하여 배열을 반환(filter)

// 최종 반환값(filteredTodos)를 순환하면서 TodoItem를 반환

```
import { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

export default function List({ todos }) {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredDate = () => {
    if (search === "") {
      return todos;
    }

    return todos.filter((todo) => todo.content.includes(search));
  };

  const filteredTodos = getFilteredDate();

  return (
    <div className="List">
      <h3>Todo List 👍</h3>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />

      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
}
```;

// 대소문자를 구별하지 않도록 개선
// 검색어(search state)와 현재 검색 대상(todo.content)을
// 모두 소문자로 변환하여 필터링(toLowerCase)

```
  const getFilteredDate = () => {
    if (search === "") {
      return todos;
    }

    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase()),
    );
  };
```;
