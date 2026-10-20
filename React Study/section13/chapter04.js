// 페이지 라우팅 3. 페이지 이동

// 1. Link
// 클릭시 페이지를 이동시키는 컴포넌트 html의 a 태그)
// 클라이언트 사이드 렌더링 방식 (필요한 컴포넌트만 교체)
// a 태그 이용시 해당 방식이 적용되지 않음

```
// App.jsx
<div>
    <Link to={"/"}>Home</Link>
    <Link to={"new"}>New</Link>
    <Link to={"diary"}>Diary</Link>
</div>
```;

// 2. 함수
// 특정 이벤트(버튼 클릭)가 발생했을 때 페이지를 이동
// useNavigate : 페이지를 이동시키는 함수를 반환
// 반환된 함수에 인수로 이동할 페이지를 설정
// 클라이언트 사이드 렌더링 방식

```
// App.jsx
const nav = useNavigate();

const onClickButton = () => {
    nav("/new");
};

return(
    <button onClick={onClickButton}>New 페이지로 이동</button>
)
```;
