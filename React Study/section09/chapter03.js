// 기능 구현 준비하기

// 새로운 Todo 내용을 입력하고 추가 버튼 클릭시
// 해당 내용으로 List 컴포넌트 내 새로운 TodoItem이 바로 추가
// 리스트의 TodoItem는 체크, 삭제, 검색 가능

// TodoItem 내용을 state로 보관
// -> 데이터가 업데이트되면 화면에 바로 반영
// state는 모든 컴포넌트의 부모인 App 컴포넌트에서 작성
// 여러개의 todo 값을 보관해야 하므로 useState의 초기값은 빈 배열

// mockData 임시 데이터 작성
// 각 todo 아이템을 객체 형태로 담기
// 각 객체에 id(고유번호), isDone(체크박스 여부), content(todo 내용), date(생성일)
// 날짜 데이터는 타임스탬프로 저장

// 목데이터는 함수 외부에 선언
// 리렌더링때마다 다시 생성될 필요도 없고
// 상수여서 값을 바꿀 수도 없기때문
// 목데이터 객체로 useState의 초기값 설정

// 목데이터가 잘 전달되었는지 확인하려면
// 개발자도구 > React Developer Tools > Components
// App 컴포넌트 내 state 값 확인 가능
