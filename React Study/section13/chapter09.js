// 일기 관리 기능 구현하기 2

// 새로운 일기를 추가하는 기능
// onCreate
```
// App.jsx
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  
  return (
    <>
      <button
        onClick={() => {
          onCreate(new Date().getTime(), 1, "Hello");
        }}
      >
        일기 추가 테스트
      </button>
    </>
  );
}
```;

// --------------------------------------------

// 기존 일기를 수정하는 기능
// onUpdate
// id 비교시 타입을 강제로 일치시켜 오류를 방지
```
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.date : item,
      );

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

      <button
        onClick={() => {
          onUpdate(1, new Date().getTime(), 3, "수정된 일기입니다.");
        }}
      >
        일기 수정 테스트
      </button>
```;

// --------------------------------------------

// 기존 일기를 삭제하는 기능
// onDelete
```
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      data: {
        id,
      },
    });
  };

      <button
        onClick={() => {
          onDelete(1);
        }}
      >
        일기 삭제 테스트
      </button>
```;

// --------------------------------------------

// 일기 데이터(state)와 관련 함수(onCreate, onUpdate, onDelete)
// 컨텍스트를 통해 하위의 모든 컴포넌트에 공급하도록 설정

// 일기 데이터를 공급할 컨텍스트 DiaryStateContext
// value로 공급할 데이터 전달 (data)

```
const DiaryStateContext = createContext();

      <DiaryStateContext.Provider value={data}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </DiaryStateContext.Provider>
```;

// 데이터 변경 함수를 컨텍스트로 공급 DiaryDispatchContext
// value로 공급할 데이터 전달 (onCreate, onUpdate, onDelete)
// 공급할 데이터가 여러개면 구조분해할당 사용
```
const DiaryDispatchContext = createContext();

      <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
        <DiaryStateContext.Provider value={data}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </DiaryStateContext.Provider>
      </DiaryDispatchContext.Provider>
```;
