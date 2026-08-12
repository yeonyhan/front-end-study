// Read - 투두리스트 렌더링하기

// todos state에 담긴 todo 데이터를
// 리스트 형태로 렌더링하는 기능

// 해당 기능은 List 컴포넌트에서 담당하므로
// List 컴포넌트에 props로 todos 데이터를 넘겨줌

```
// App.jsx

 <List todos={todos} />
```
// List 컴포넌트에서 todos 를 구조분해할당으로 전달받아
// 배열형태인 todos를 리스트 형태로 반복적으로 렌더링하려면
// 배열메서드 map 메서드를 사용

// map 메서드는 하나의 콜백 함수를 받은 다음
// 배열의 모든 요소에 대해 콜백 함수를 수행 후
// 콜백 함수가 반환한 값을 모아서 새로운 배열로 반환
// jsx에서 사용할 땐 콜백함수가 html 요소나 컴포넌트 반환 가능
// 콜백 함수의 반환 값들이 리스트 형태로 화면에 렌더링됨

// TodoItem 컴포넌트 (리스트 목록에 표시되는 각 아이템)에
// props로 모든 todo(스프레드 연산자)를 전달

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

// 각각의 TodoItem 컴포넌트가 서로 다른 UI를 렌더링하도록 설정
// todos state에 보관된 배열 형태의 데이터를 TodoItem에서 렌더링

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
// onChange 핸들러 없이 폼필드에 checked prop을 제공해서 오류 발생
// 체크박스와 같은 폼필드에 onChange 핸들러가 없어서
// 체크박스를 수정할 방법이 없는데 checked prop은 설정되어있음

// 수정하는 기능은 추후에 추가할 것이기 때문에
// 당장의 오류를 제거하려면
// 지금 당장은 수정이 불가능하다는 의미로
// input 태그에 readOnly 속성 추가

```
    <input readOnly checked={isDone} type="chekbox" />
```;

// 오류 해결 2.
// list 내의 각 자식들은 반드시 고유한 key prop을 가져야함
// 리액트에서는 내부적으로 리스트 형태로 렌더링된
// 컴포넌트 또는 요소들을 서로 구분할때 key prop으로 구분

```
      <div className="todos_wrapper">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
```;

// --------------------------------------------

// 검색 기능 구현
// 검색어가 변경되면 List 컴포넌트가 리렌더링되도록 설정
// 현재 검색어를 state로 보관

// search state의 값이 바뀔 때마다
// List 컴포넌트가 리렌더링이 이뤄지는데 그때마다
// todos 배열에서 현재의 검색결과에 해당하는 값들을 필터링

// 조건문을 사용하여 검색어가 없는 경우 전체 todos 반환
// 아니라면 todos에 filter 메서드를 사용하여 배열을 반환
// includes 메서드를 사용하여 search 값을 포함하는 아이템만 필터링

// 모든 todos를 순환하다가
// 만약 검색어(search state 값)의 단어가
// todo 목록(todo.content)에 있다면 True를 반환하고
// 그러한 값들만 필터링해서 배열을 반환

// 이러한 기능을 하는 함수인 getFilteredDate를
// 컴포넌트가 리렌더링될 때마다 호출하고
// 결과값을 filteredTodos에 저장하고
// 필터링된 todos 값을 순환하면서 TodoItem를 반환하도록 수정.

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
// search state에 담긴 검색어와 현재 검색 대상인 todo.content를
// 모두 소문자로 변환하여 필터링

// todo.content과 search 값에 toLowerCase 메서드를 적용

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
