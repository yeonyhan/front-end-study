// State로 사용자 입력 관리하기 1

// 모든 state들을 하나의 객체로 묶어서 관리하고
// 이벤트 핸들러를 하나로 합치는 작업을 통해
// 효율적이고 간결하게 코드를 개선

// --------------------------------------------

// 모든 state들을 객체로 묶을 input, setInput 을 useState로 생성
// useState의 초기값으로 객체를 전달하고
// 객체 안 프로퍼티에 key 값으로 각 state 이름
// value 값으로 각 state의 초기값 전달

// 각 이벤트핸들러에 setInput을 호출하고
// setInput 함수의 인수로 객체를 전달
// 객체 내 변경할 프로퍼티 값과 value로 e.target.value를 전달
// 그 위에 ...input 스프레드 연산자를 사용
// 변경되지않고 유지시킬 state들을 스프레드 연산자로 불러오는 작업

// ...input을 사용하지 않는 경우
// 변경할 특정 프로퍼티값만 단독으로 객체의 프로퍼티가 되어버림
// 나머지 기존 프로퍼티들이 삭제됨
// 스프레드 연산자로 관련없는 값들을 그대로 유지시킴
// 변경하고자 하는 프로퍼티값만 바꿔주도록 함께

// 각 input, select, textarea의 value 속성을
// input 객체의 특정 프로퍼티 값으로 접근 (점표기법)

// --------------------------------------------

// 통합 이벤트 핸들러 onChange 함수 생성
// 매개변수로 e를 전달
// 이벤트 핸들러 내부에 setInput 함수를 호출하고
// setInput 함수의 인수로 객체를 전달
// ...input 스프레드 연산자 입력
// [e.target.name]: e.target.value 입력

// input, select, textarea의 name 속성을 추가하고
// name 값으로 각 state 값(프로퍼티 값) 입력
// onChange 속성에 모두 onChange 이벤트핸들러 연결
// 어떤 값을 입력하든 모두 onChange 함수가 실행됨

// onChange 이벤트핸들러 내 setInput 함수가 호출되고
// 함수의 인수로 객체를 만들어서 전달함
// 스프레드 연산자로 기존 input의 값을 나열하고
// 프로퍼티 key 값에 대괄호 내 e.target.name 을 입력
// 대괄호 내 변수를 작성하면 해당 변수가 프로퍼티의 key로 설정됨

// e.target.name 은 이벤트가 발생한 태그의 name 값이 설정되어있음
// input 태그의 name 속성을 birth라고 입력하면
// e.target.name은 birth 로 설정됨
// 즉 birth = e.target.value 와 동일한 코드
