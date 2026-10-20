// Delete - 투두 삭제하기

// TodoItem에 삭제버튼을 클릭시 해당 아이템 삭제 기능 구현
// onDelete 함수 작성하고 targetId를 전달 (onUpdate 함수 참고)

// onDelete 함수
// todo의 id 값이 targetId와 같지않은 요소(true)만 필터링

```
// App.jsx

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };
```;

// List(부모)로 부터 TodoItem(자식)에 props를 전달
// onDelete를 구조분해할당에 추가

// onClickDeleteButton 이벤트핸들러
// button 클릭시 onDelete를 호출하도록 작성 (onClick 속성)

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
