// Home 페이지 구현하기 1. UI

// 컴포넌트 쪼개고 UI 구현하기
// Header, DiaryList, DiaryItem

// 1. Header 컴포넌트 불러오기
```
// App.jsx
      <Header
        title={"2026년 10월"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
```;

// 2. DiaryList 컴포넌트 작성 및 불러오기
// 자식 컴포넌트 DiaryItem을 반복적으로 렌더링
```
// DiaryList.jsx
import "./DiaryList.css";
import Button from "./Button";

const DiaryList = () => {
  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select>
          <option value={"lastest"}>최신순</option>
          <option value={"oldest"}>오래된순</option>
        </select>
        <Button text={"새 일기 쓰기"} type={"POSITIVE"} />
      </div>
      <div className="list_wrapper"></div>
    </div>
  );
};

export default DiaryList;
```;

// 1. DiaryItem 컴포넌트 작성 및 불러오기
// emotionId에 따라 css 동적 변경
