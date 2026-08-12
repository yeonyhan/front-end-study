// useEffect로 라이프사이클 제어하기

// 1. Mount 제어하기
// deps 빈배열

useEffect(() => {
  console.log("Mount");
}, []);

// deps(의존성 배열)에 빈 배열을 넣으면
// 컴포넌트가 처음 mount 된 이후로
// 다시 실행되지 않음

// 최초로 한번한 콜백함수를 실행하고 싶을 때 사용

// --------------------------------------------

// 2. Update 제어하기
// deps 생략

useEffect(() => {
  console.log("Update");
});

// deps를 생략하게 되면
// 컴포넌트가 Mount 될 때 한번,
// 컴포넌트가 리렌더링(업데이트) 될 때마다
// 계속 실행됨

// 만약 Mount 될 때를 제외하고 싶다면
// 현재 컴포넌트가 Mount가 되었는지 체크하는 변수를
// useRef를 이용하여 변수 생성

const isMount = useRef(false);

// 아래 콜백함수는 컴포넌트가 Mount 될 때 실행되면서
// current의 값을 true 바꾸고 강제로 리턴되기 때문에
// 그 아래의 코드를 실행하지 않음

// current가 true로 바뀐 이후로는
// 강제 리턴되지 않기 때문에
// 업데이트될 때마다 콘솔이 출력됨

useEffect(() => {
  if (!isMount.current) {
    isMount.current = true;
    return;
  }

  console.log("Update");
});

// --------------------------------------------

// 3. UnMount 제어하기

// 카운트 넘버가 짝수일 때만
// 화면에 렌더링되는 컴포넌트를 작성

// useEffect 콜백함수에 return으로 새로운 함수를 반환
// useEffect 콜백함수가 반환하는 함수를 클린업 또는 정리함수
// 정리함수는 useEffect가 끝날 때 실행됨

// deps 에는 빈배열
// useEffect가 Mount 될 때 콜백함수가 실행되고
// 종료가 될때정리 함수를 호출하여 UnMount

useEffect(() => {
  return () => {
    console.log("unmount");
  };
}, []);

```
// Even.jsx

import React, { useEffect } from "react";

export default function Even({ count }) {
  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <div>
      <div>짝수 입니다</div>
    </div>
  );
}
``````
// App.jsx 내부

      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
```;

// --------------------------------------------

// 정리
// 컴포넌트가 Mount될 때 어떤 데이터를 불러오는 코드를 작성하거나
// 업데이트 되었을 때 현재 업데이트된 state의 값을 검사하거나
// 컴포넌트가 UnMount될 때 해당 컴포넌트가 사용했던 메모리를 해제
