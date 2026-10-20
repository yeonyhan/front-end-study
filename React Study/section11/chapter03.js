// React.memo와 컴포넌트 렌더링 최적화

// React.memo란?
// 리액트의 내장 메서드(memo())
// 인수로 리액트의 컴포넌트를 받아 최적화한 뒤 반환

// 최적화된 컴포넌트(MemoizedComponent)는
// props를 기준으로 메모이제이션 됨 (props가 deps처럼)
// MemoizedComponent는 부모 컴포넌트가 리렌더링되더라도
// 자신이 받는 props가 바뀌지않으면 리렌더링이 발생하지 않음
// -> 불필요한 리렌더링 방지

```
const MemoizedComponent = memo(Component);
```
// --------------------------------------------

// App 컴포넌트의 자식 Header 컴포넌트의
// 불필요한 리렌더링을 방지해야 함

// Header 컴포넌트 외부에 memo 메서드 호출
// memo 메서드의 인수로 최적화하고 싶은 컴포넌트(Header)를 넣음

// memo 메서드는 Header 컴포넌트의 prop가 변경되지 않았을 때에는
// 리렌더링 하지 않도록 최적화된 컴포넌트를 반환
// 반환된 값을 memoizedHeader 변수에 할당

// Header의 export 문에서 Header를 내보내는게 아니라
// 최적화가 이루어진 memoizedHeader 를 내보내기

```
// Header.jsx

import "./Header.css";
import Header from './../react/src/components/Header';

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 😊</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

const memoizedHeader = memo(Header);

export default memoizedHeader;
```;

// 코드 간결화

```
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 😊</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default memo(Header);
```;

// --------------------------------------------

// todo 아이템의 체크박스를 체크/해제할 때
// 변경된 아이템뿐만 아니라
// 상태 변화가 없는 나머지 아이템들까지 불필요하게 리렌더링
// => TodoItem 컴포넌트의 불필요한 리렌더링 방지 필요

```
export default memo(TodoItem);
```;
// 여전히 불필요한 리렌더링이 발생

// 체크박스 클릭 -> state 값이 바뀜 -> App 컴포넌트 리렌더링
// -> App 컴포넌트 내 onCreate, onUpdate, onDelete 함수도 함께 리렌더링
// 함수의 내용이 같더라도 매번 새로운 주소값의 새 함수로 재생성

// react.memo는 이전 props와 새로운 props를 얕은 비교
// 함수는 객체타입이므로 주소값을 참조하는 방식
// 내용은 이전과 동일하지만 참조 주소값이 달라졌기 때문에
// props가 변경되었다고 인지

// => 결국 모두 다 리렌더링이 발생하게 됨

// 해결방법 1.
// App 컴포넌트 내 함수들 자체를 메모이제이션해서
// 리렌더링되더라도 다시 생성되지않도록 방지
// -> useCallback 훅 사용 (다음 챕터)

// 해결방법 2.
// memo 메서드 내 두번째 인수로 콜백함수를 추가 전달
// 최적화 기능을 커스터마이징하기
// 컴포넌트의 props의 변경여부를 스스로 판단하는 게 아닌
// 콜백함수의 매개변수로 과거(prev props)와 현재(next props)를 전달

// 함수의 반환값에 따라 props가 바뀌었는지 아닌지를 판단
// True -> Props 바뀌지 않음 -> 리렌더링 X
// False -> Props 바뀜 -> 리렌더링 O
// 함수 제외 id, isDone, content, date 값이 바뀌었을 때 리렌더링

```
export default memo(TodoItem, (prevProps, nextProps) => {
  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.isDone !== nextProps.isDone) return false;
  if (prevProps.content !== nextProps.content) return false;
  if (prevProps.date !== nextProps.date) return false;

  return true;
});
```;

// --------------------------------------------

// 컴포넌트를 인수로 받아 최적화나 추가된 기능을 반환해주는 메서드
// = 고차 컴포넌트 (HOC = Higher Order Component)

// 고차 컴포넌트 사용시 한 번 호출하는 것만으로도
// 컴포넌트에 새로운 기능을 부여할 수 있기 때문에
// 복잡한 리액트 앱을 구축할 때 유용한 방식
