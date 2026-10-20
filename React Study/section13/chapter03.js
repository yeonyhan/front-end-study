// 페이지 라우팅 2. 라우팅 설정하기

// React Router
// 리액트 앱의 대표 라이브러리
// 터미널 > npm i react-router-dom

// BrowserRouter 컴포넌트로 App 컴포넌트를 감싸면
// 모든 컴포넌트들이 현재 브라우저의 주소를
// 불러와서 쓰거나 주소의 변화를 감지할 수 있음
// 브라우저 주소 정보에 대한 context를 공급받기 때문

```
// main.jsx
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
```;

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

// 각 페이지 역할을 할 컴포넌트를 작성
// (src > pages > Home.jsx, New.jsx, Diary.jsx)

// App.jsx에서 페이지 컴포넌트를 렌더링하기 위해
// Routes, Route 컴포넌트를 사용하여 경로 설정

```
// App.jsx
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/diary" element={<Diary />} />
    </Routes>
  );
}
```;

// 경로를 설정하지 않은 페이지의 경우 Notfound 페이지 렌더링
// (src > pages > NotFound.jsx)
// path를 *로 설정하면 와일드카드 (case문의 default문과 유사)

```
// App.jsx
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/diary" element={<Diary />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
```;

// 주의사항
// 1. Routes 컴포넌트 내에는 Route 컴포넌트만 들어갈 수 있다.
// 2. Routes 컴포넌트 바깥의 요소는 모든 페이지에 동일하게 렌더링된다.
// (바깥에 <div>Hello</div> 작성시 모든 페이지에 Hello를 렌더링)
