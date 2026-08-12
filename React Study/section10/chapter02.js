// useMemo와 연산 최적화
// 불필요한 연산 방지

// useMemo란?
// "메모이제이션" 기법을 기반으로
// 불필요한 연산을 최적화 하는 리액트 훅

// 메모이제이션 (Memoization)
// 기억해두기, 메모해두기 라는 뜻

// 동일한 연산을 반복적으로 수행해야 될 때
// 매번 결과값을 새롭게 연산하는게 아니라
// 최초로 한 번 계산했을 떄의 결과값을 메모리에 보관한 후
// 연산이 필요해지면 저장되어있던 결과값을 전달
// => 특정 연산의 결과 값을 기억했다가 필요할 때 반환

// --------------------------------------------

// List 컴포넌트 내 현재 todo들의 상태를 분석하여
// 수치를 제공하는 함수를 생성
// totalCount : 현재 등록된 전체 todo 아이템의 개수 저장
// doneCount : 전체 todo 개수 중 완료된 todo 개수만 저장
// notDoneCount : 아직 완료되지 않은 todo 개수를 저장

```
// List.jsx

  const getAnalyzedData = () => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  };

    const { totalCount, doneCount, notDoneCount } = getAnalyzedData();
```;

// List 컴포넌트가 리렌더링될 때마다
// 계속 getAnalyzedData 함수가 호출됨

// 위 연산 과정은 filter 배열 메서드를 이용하기 때문에
// todos state에 보관된 데이터의 개수가 증가할수록 연산이 오래걸림
// 전체 요소를 한번씩 순회하기 때문
// => 함수가 불필요하게 렌더링되는 상황을 방지해야함

// --------------------------------------------

// 연산 자체를 메모이제이션 하려면
// useMemo를 사용하여 특정 조건을 만족했을 때에만
// 결과값을 다시 계산하도록 설정

// useMemo 첫번째 인수로 콜백함수, 두번째 인수로 배열(의존성 배열)
// 두번째 인수인 배열은 의존성 배열(deps)로
// useEffect처럼 deps에 들어가는 값이 바뀌면 콜백함수를 다시 실행
// 콜백함수가 반환하는 값을 useMemo는 그대로 다시 반환

const a = useMemo(() => {
  return 1;
}, []);

// 콜백함수가 반환한 1이라는 값을 useMemo가 그대로 반환하여
// 변수에 할당하여 사용할 수도 있음

// 콜백함수 내 메모이제이션하고 싶은 연산을 넣음
// getAnalyzedData 함수 내부를 그대로 집어넣음
// useMemo는 totalCount, doneCount, notDoneCount 값을 가지는 객체를 반환
// 구조분해 할당을 이용하여 useMemo 반환값을 각 변수에 할당

```
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzedData 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);
```;

// deps에 아무것도 전달하지 않으면
// 첫번째 콜백함수의 연산 수행과 반환이
// 컴포넌의 최초 렌더링때 딱 한번만 발생

// deps에 todos를 추가하여
// todos state 값이 변경(추가/수정/삭제)되었을 때
// 연산이 다시 실행됨
