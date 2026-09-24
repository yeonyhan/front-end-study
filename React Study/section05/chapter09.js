// State로 사용자 입력 관리하기 2

// 모든 state들을 하나의 객체로 묶어서 관리하고
// 이벤트 핸들러를 하나로 합치는 작업을 통해
// 효율적이고 간결하게 코드 개선하기

// --------------------------------------------

// 모든 state들을 묶을 하나의 useState 생성
// useState의 초기값으로 객체를 전달하고
// key : state 이름
// value : state의 초기값
const [input, setInput] = useState({
  name: "이름",
  birth: "",
  country: "",
  bio: "",
});

// 공통의 이벤트핸들러를 onChage 함수 생성
// setInput 함수의 인수로 객체를 전달
// 변경할 프로퍼티를 전달 (key: e.target.name, value: e.target.value)
// 그 위에 ...input 스프레드 연산자를 사용하여
// 값을 유지시킬 state들을 스프레드 연산자로 불러오기
const onChange = (e) => {
  console.log(e.target.name, e.target.value);
  setInput({
    ...input,
    [e.target.name]: e.target.value,
  });
};

// ...input을 사용하지 않는 경우
// 변경할 특정 프로퍼티값만 객체의 프로퍼티가 되어버리고
// 나머지 기존 프로퍼티들은 삭제됨

// 각 input, select, textarea의 value 속성을
// input 객체의 특정 프로퍼티 값으로 접근 (점표기법)
