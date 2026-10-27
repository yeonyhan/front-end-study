// 일기 관리 기능 구현하기 1

// Edit 페이지 구현
// src > pages 폴더 > Edit.jsx
// 현재 수정하려는 일기의 id를 url 파라미터로 전달

// 페이지 라우팅 설정
```
// App.jsx
    <Route path="/edit/:id" element={<Edit />} />
```;

// 경로로 전달된 url 파라미터를 불러와 사용
```
// Edit.jsx
function Edit() {
  const params = useParams();
  console.log(params);

  return <div>{params.id}번 일기 수정</div>;
}
```;

// --------------------------------------------

// 일기를 생성/수정/삭제 등 관련 기능
// 컨텍스트 객체를 이용하여 페이퍼 컴포넌트에게 공급

// 1. 내부에 일기 데이터를 관리하는 state 생성
// useReducer로 새로운 state 생성 (data)
// 컴포넌트 바깥에 reducer 함수 생성 -> useReducer 첫번째 인수로 전달
// useReducer 두번째 인수는 빈배열 (여러 개의 일기 데이터 보관)
```
// App.jsx
  const [data, dispatch] = useReducer(reducer, []);
```
// 목데이터로 객체 형태의 일기 데이터 임시 생성
// useReducer의 초기값으로 목데이터 설정 (두번째 인수)
```
// App.jsx
  const mockData = [
  {
    id: 1,
    createDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
];
...
function App() {
 const [data, dispatch] = useReducer(reducer, mockData);
}
```;
