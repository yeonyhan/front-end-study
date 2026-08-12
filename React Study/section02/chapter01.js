// Truthy 와 Falsy
// 자바스크립트에서는 참, 거짓이 아닌 값도 참, 거짓으로 평가

// Truthy한 값 (참 같은 값)
if (123) {
  console.log("123 is true");
} else {
  console.log("123 is false");
} // 123 is true

// Falsy한 값 (거짓 같은 값)
if (undefined) {
  console.log("undefined is true");
} else {
  console.log("undefined is false");
} // undefined is false

// --------------------------------------------
// 자바스크립트이 모든 값은 Truthy 하거나 Falsy 함
// 이를 이용하면 조건문을 간결하게 만들 수 있음

// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = ""; // 빈문자열
let f7 = 0n; // BigInt로 아주 큰 값을 저장할 때 사용

// falsy에 not이 만나 true가 됨
if (!f1) {
  console.log("falsy");
} // falsy

// --------------------------------------------

// 2. Truthy한 값
// 7가지 Falsy한 값들 제외한 나머지 모든 값
let t1 = "hello"; // 비어있지 않은 문자열
let t2 = 123; // 0이 아닌 숫자
let t3 = []; // 빈 배열
let t4 = {}; // 빈 객체
let t5 = () => {}; // 화살표 함수

if (t1) {
  console.log("Truthy");
} // Truthy

// --------------------------------------------

// 3. 활용 사례
// 객체를 매개변수로 받아 프로퍼티값을 출력하는 함수
function printName(person) {
  console.log(person.name);
}

let person; // person 값이 undefined인 경우
printName(person); // 오류 발생

// 따라서 객체의 프로퍼티에 접근하는 함수의 경우
// 보통은 조건문으로 매개변수 값이 null 이거나 undefined이 아님을 먼저 확인

// Truthy, Falsy를 이용하지 않고 진행
function printName2(person) {
  // 객체가 undefine 또는 null인 경우 함수 종료
  if (person === undefined || person === null) {
    console.log("person의 값이 없음");
    return;
  }

  // 아래 코드가 실행되지않아 오류가 나지않음
  console.log(person.name);
}

printName2(person); // person의 값이 없음

// 복잡한 조건문을 반복적으로 적기 떄문에 비효율적
// Truthy, Falsy를 이용하여 개선
function printName3(person) {
  // person 값이 undefined 또는 null로 들어오면
  // not에 의해 조건식이 true로 평가되어 코드가 실행됨
  if (!person) {
    console.log("person 값이 없음");
    return;
  }

  console.log(person.name);
}

printName3(person); // person의 값이 없음
let person = { name: "한주연" };
printName3(person); // 한주연
