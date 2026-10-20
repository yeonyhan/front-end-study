// Context 분리하기

// context 사용 후 아이템의 체크박스 클릭시
// 설정해 두었던 최적화가 풀리는 문제 발생

// Provider 컴포넌트도 props가 바뀌게되면 리렌더링
// memo 메서드로 최적화를 했지만 풀리는 문제가 발생

// todos가 수정되면 App 컴포넌트가 리렌더링되고
// value Props로 전달한 객체 자체가 다시 생성되기 때문

```
// App.jsx
<TodoContext.Provider value={{ 
    todos, onCreate, onUpdate, onDelete
}}>
```;

// TodoContext를 두 개의 컨텍스트로 분리하여 해결
// TodoStateContext : 변경될 수 있는 값 (todos)
// TodoDispatchContext : 변경되지 않는 값 (onCreate, onUpdate, onDelete)
// TodoStateContext 값이 변경되어도 TodoDispatchContext 값은 변경되지 않음

// TodoDispatchContext 의 value Props 객체는
// App 컴포넌트가 리렌더링되어도 다시 생성하지 않도록 useMemo 사용
// deps를 빈배열로 두어 마운트 이후에 재생성되지 않도록 설정

```
// App.jsx
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
``````
// App.jsx
const memoizedDispatch = useMemo(()=>{retur})

return (
<div className="App">
    <Header />
    <TodoStateContext.Provider value={{ todos }}>
    <TodoDispatchContext.Provider value={memoizedDispatch}>
        <Editor />
        <List />
    </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
</div>
);
```;

// 변경된 context로 부터 데이터를 공급받도록 수정
// TodoStateContext 의 경우 객체가 아니므로 구조분해할당 X

```
// Editor.jsx
const { onCreate } = useContext(TodoDispatchContext);


// List.jsx
const todos = useContext(TodoStateContext);

// TodoItem.jsx
const { onUpdate, onDelete } = useContext(TodoDispatchContext);
```;
