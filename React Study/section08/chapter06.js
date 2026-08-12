// Update - 투두 수정하기
// TodoItem에 체크박스 클릭시 아이템이 수정되는 기능 구현

// todos 데이터에 있는 isDone 프로퍼티를 토글 시켜주는 기능이 필요
// onCreate 함수처럼 setTodos 함수를 호출하여 state 값을 수정

// onUpate 함수를 생성하여 매개변수 targetId를 전달
// targetId는 현재 업데이트하고자 하는(즉, 체크박스가 클릭된) 아이템
// todos state의 값들 중에 targetId와 일치하는 id를 갖는
// todo 아이템의 isDone을 변경하는 기능

// setTodos 함수를 호출하고 인수로
// todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만
// 바꾼 새로운 배열을 전달

// 기존의 배열을 변형하는 메서드인 map 메서드를 사용
// 조건문을 사용하여 id가 일치하는 경우
// 기존 데이터를 스프레드로 가져오고 (...todo)
// 다음줄에 isDone 프로퍼티의 값만 토글시킴

// id가 일치하지 않는 경우
// 원래 todo 를 그대로 반환하여 변형되지 않도록 설정

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
// map 메서드의 콜백함수를 삼항연산자를 사용하여 간결하게 개선

```
  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) => (todo.id === targetId ? { ...todo, isDone } : todo)),
    );
  };
```;

// TodoItem 컴포넌트에서 체크박스의 클릭이 발생했을 때
// onUpdate 함수를 호출하고 동시에 인수로 id 값을 전달

// TodoItem의 부모컴포넌트인 List 컴포넌트에
// onUpdate 함수를 prop으로 전달

// List에서 onUpdate를 구조분해할당으로 받고
// TodoItem에 prop으로 전달

// TodoItem에서 onUpdate를 구조분해할당으로 받고
// input의 값이 바뀌었을 때 onUpdate를 호출하기 위해
// onChageCheckBox 이벤트핸들러를 작성하고 input에 연결

// onChageCheckBox는 onUpdate 함수를 호출하고 인수로 id를 전달
// onClick이 아닌 onChage를 사용한 이유는
// button이 아닌 input 요소이기 때문
