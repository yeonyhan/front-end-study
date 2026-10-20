// Update - 투두 수정하기
// TodoItem에 체크박스 클릭시 아이템이 수정되는 기능 구현하기
// todos 데이터에 isDone 프로퍼티를 토글 시켜야함

// onUpate 함수
// map 메서드로 todos의 요소를 순환하며
// targetId와 일치하는 id가 있는 경우
// 모든 데이터를 그대로 가져온 뒤 (스프레드 사용)
// 다음줄에 targetId와 일치하는 id를 갖는 todo의 isDone을 토글
// 업데이트된 새로운 배열을 반환
// 그 외의 경우 todo를 그대로 반환

// 결론적으로
// map 메서드의 결과 값은 기존의 todos 배열에서
// 조건문을 통해 targetId와 일치하는 id 요소를 갖는 데이터를
// isDone만 바꾼 새로운 배열을 반환

```
// App.jsx

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === targetId) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      }),
    );
  };
```
// 삼항연산자를 사용하여 간결하게 개선

```
  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) => (todo.id === targetId ? { ...todo, isDone } : todo)),
    );
  };
```;

// List(부모)로 부터 TodoItem(자식)에 props를 전달
// id, isDone, content, date, onUpdate 데이터를
// 구조분해할당으로 받아 사용

// onChageCheckBox 이벤트핸들러
// input값이 바뀔 때 onUpdate를 호출하도록 작성 (onChage 속성)

// onClick이 아닌 onChage를 사용한 이유는
// button이 아닌 input 요소이기 때문
