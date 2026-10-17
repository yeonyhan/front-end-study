// useCallback과 함수 재생성 방지

// memo 메서드의 문제점
// props의 변경여부를 얕은 비교로 판단하기 때문에
// 함수와 같은 객체타입이 props인 경우
// 제대로된 최적화가 이뤄지지 않아
// 추가적인 콜백 함수로 일일히 비교 요소를 전달해야 함
// => 유지보수가 불편함

// --------------------------------------------

// 해당 함수 자체가 다시 생성되지 않도록
// useCallback 훅을 사용

// 첫번째 인수 : 콜백함수 (최적화하고 싶은 함수)
// 두번째 인수 : 의존성 배열 (deps)
// deps가 변경되었을 때만 함수를 다시 생성
// deps를 빈배열로 설정시 최초 렌더링에만 함수를 생성
// 최적화된 함수를 그대로 반환하기 때문에 변수에 할당 가능

```
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);

```;

// --------------------------------------------

// 최적화를 언제, 어떤 것을 하는가?

// 언제?
// 하나의 프로젝트를 거의 완성한 상태
// 기능 구현 -> 최적화
// 새로운 기능을 추가/수정시 최적화가 풀리거나 고장나기 때문

// 어떤 것?
// 최적화가 필요한 연산, 함수들에만 적용
// 유저의 행동에 따라 개수가 많아질 수 있는 컴포넌트
// 함수를 많이 가지고 있어 코드가 무거운 컴포넌트
