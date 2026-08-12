// Delete - 투두 삭제하기

// TodoItem 에 삭제버튼을 클릭하면 해당 아이템 삭제 기능 구현
// onUpdate 처럼 onDelete 함수 작성하고 targetId를 전달

// 기존의 todos 배열에서 targetId와 일치하는 id를 갖는
// 요소만 삭제한 새로운 배열

// todos에 fitler 메서드를 사용하여 모든 todos 배열을 순회하다가
// todo의 id 값이 targetId와 같지않은 요소만 필터링

```
// App.jsx

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };
```;

// onUpdate와 동일하게 List 컴포넌트에 onDelete를 prop으로 전달하고
// List에서도 prop으로 전달받아 TodoItem 컴포넌트에 prop으로 전달
// TodoItem에서 onClickDeleteButton 이벤트핸들러 작성
// onDelete 함수를 호출하여 인수로 id를 전달
// button 에 onClick에 이벤트핸들러 전달

```
import "./TodoItem.css";

export default function TodoItem({
  id,
  isDone,
  content,
  date,
  onUpdate,
  onDelete,
}) {
  const onChageCheckBox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input onChange={onChageCheckBox} checked={isDone} type="chekbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
}
```;
