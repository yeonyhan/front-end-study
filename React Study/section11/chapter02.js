// Context 사용하기

// App -> List -> TodoItem 순으로 PropsDrilling 현상
// TodoItem에게만 필요한 onUpdate, onDelete 함수를
// 중간 컴포넌트인 List에서 불필요하게 전달하고 있는 상황

// createContext 메서드
// 부모 컴포넌트(App) 외부에서 호출
// (내부에서 호출시 컴포넌트가 리렌더링될 때마다 새로운 컨텍스트를 생성)

```
// App.jsx
const TodoContext = createContext();
console.log(TodoContext);
```;

// 컨텍스트의 프로퍼티 중 Provider
// 컨텍스트가 공급할 데이터를 설정하거나
// 컨텍스트의 데이터를 공급받을 컴포넌트를 설정

// Provider 컴포넌트로 감싼 모든 컴포넌트들은 데이터를 공급받음
// (자식, 자손 등 모든 계층 컴포넌트 포함)
// 공급할 데이터는 value 라는 props에 객체로 전달

```
// App.jsx
<TodoContext.Provider value={{ 
    todos, onCreate, onUpdate, onDelete
}}>
    <Editor onCreate={onCreate} />
    <List onUpdate={onUpdate} onDelete={onDelete} todos={todos} />
</TodoContext.Provider>
```;

// context로 공급받은 값을 이용하도록 설정
// 공급받을 컴포넌트 내부에서 useContext 호출
// 인수로 전달한 context로부터 공급된 데이터를 반환해주는 함수
// 구조분해할당을 사용하여 필요한 데이터만 불러오기

```
// Editor.jsx
const { onCreate } = useContext(TodoContext);

// List.jsx
const { todos } = useContext(TodoContext);

// TodoItem.jsx
const { onUpdate, onDelete } = useContext(TodoContext);
```;
