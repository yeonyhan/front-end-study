// 페이지 라우팅 4. 동적 경로

// 동적인 데이터를 포함하고 있는 경로

// 1. URL Parameter
// / 뒤에 특정 아이템의 id를 명시
// ~/product/1, ~/product/2, ~/product/3
// 아이템의 id 등 변경되지 않는 값을 주소로 명시하기 위해 사용

// Route 컴포넌트 path에 URL 파라미터를 사용할 것임을 명시
```
// App.jsx
    <Route path="/diary/:id" element={<Diary />} />
```;

// URL 파라미터로 전달한 값을 꺼내오기
// useParams : 현재 브라우저의 URL 파라미터 값을 반환
```
// Diary.jsx
function Diary() {
    const params = useParams();
    console.log(params);

    return <div>{params.id}번 일기입니다</div>;
}
```;

// --------------------------------------------

// 2. Query String
// ? 뒤에 변수명과 값 명시
// ~/search?q=검색어
// 검색어 등 자주 변경되는 값을 주소로 명시하기 위해 사용

// 쿼리스트링으로 전달한 값 받아오기
// useSearchParams : params, setParams로 변수 할당
// params : 쿼리스트링으로 전달한 변수와 값
// setParams : 특정 쿼리스트링의 값을 변경할 수 있는 함수
```
// search 페이지
const [params, setParams] = useSearchParams();
console.log(params.get("q")); // 검색어
```;
