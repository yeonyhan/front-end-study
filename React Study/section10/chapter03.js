// React.memo와 컴포넌트 렌더링 최적화
// 불필요한 리렌더링 방지

// React.memo
// 리액트의 내장 메서드(memo())
// 인수로 리액트의 컴포넌트(Comopntent)를 받아서
// 해당 컴포넌트에 최적화 기능을 추가한 뒤 결과값으로 반환

// 최적화된 컴포넌트(MemoizedComponent)는
// props를 기준으로 메모이제이션 됨
// MemoizedComponent는 부모 컴포넌트가 리렌더링되더라도
// 자신이 받는 props가 바뀌지않으면 리렌더링이 발생하지 않음
// -> 불필요한 리렌더링이 방지되어 자동 최적화

const MemoizedComponent = memo(Comopntent);

// --------------------------------------------

// 개발자 도구 > 리액트 컴포넌트 > hightlight update 체크
// todo 데이터를 수정하면 현재 화면에 나타나는
// 모든 컴포넌트가 리렌더링되고 있는것이 하이라이트로 표시됨

// 그 중 Header 컴포넌트는 리렌더링될 필요가 없음
// App 컴포넌트의 자식으로 배치되어있기 때문에
// 부모 컴포넌트의 리렌더링에 따라 자식이 Header 컴포넌트로 리렌더링됨
// -> Header 컴포넌트의 불필요한 리렌더링을 방지해야 함

// Header 컴포넌트 외부에 memo 메서드를 호출
// memo 메서드의 인수로 최적화하고 싶은 컴포넌트인 Header를 넣음

// memo 메서드는 Header 컴포넌트의 prop가 변경되지 않았을 때에는
// 리렌더링 하지 않도록 최적화된 컴포넌트를 반환함
// 반환된 값을 memoizedHeader 변수에 할당

// Header의 export 문에서 Header를 그대로 반환하는게 아니라
// 최적화가 이루어진 memoizedHeader 를 반환

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

// 반환 코드를 간결화

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
// 현재 체크박스의 아이템이 아닌 나머지 아이템도 함께 리렌더링됨
// => 불필요한 리렌더링이므로 TodoItem 컴포넌트도 최적화 필요
