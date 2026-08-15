// 객체2

// 1. 상수 객체
// 상수는 저장된 값을 변경 불가능
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// 상수 객체를 아예 새로운 값으로 바꾸는 건 불가능
// animal = 123; // 오류 발생

// 그러나
// 상수 객체 내 프로퍼티 추가, 수정, 삭제는 가능
animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal);

// 그 이유
// 상수는 메모리 주소의 재할당(아예 새로운 값을 할당)을 금지할 뿐
// 참조하는 객체 내부 데이터의 불변성을 금지하는 것은 아니기 때문

// --------------------------------------------

// 2. 메서드
// 값이 함수인 프로퍼티
// 객체의 동작을 정의할 때 사용
const person = {
  name: "한주연",

  // 메서드 (익명함수)
  sayHi: function () {
    console.log("하이");
  },

  // 메서드 (화살표함수)
  sayHi2: () => {
    console.log("하이2");
  },

  // 메서드 (메서드 선언, 대부분 사용)
  sayHi3() {
    console.log("하이3");
  },
};

// 메서드 호출
// 점 표기법, 괄호 표기법 가능
person.sayHi();
person["sayHi2"]();
person.sayHi3();
