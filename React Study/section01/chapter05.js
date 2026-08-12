// 자료형
// 동일한 속성이나 특징을 가진 원소들의 집합 (Type)
// 자바스크립트는 원시타입 + 객체타입

// 원시타입
// 기본형 타입 (가장 기본적인 값들의 타입)

// --------------------------------------------

// 1. Number Type
// 존재하는 모든 숫자타입을 포함
let num1 = 25; // 정수
let num2 = 2.5; // 실수
let num3 = -25; // 음수

// 기본적인 사칙연산 지원
console.log(num1 + num2); // 더하기
console.log(num1 - num2); // 뺴기
console.log(num1 * num2); // 곱하기
console.log(num1 / num2); // 나누기
console.log(num1 & num2); // 나머지 연산 (모듈러 연산)

// 특수한 숫자 값
let inf = Infinity; // 양의 무한대
let mInf = -Infinity; // 음의 무한대

let nan = NaN; // Not A Number
console.log(1 * "hello"); // NaN (연산이 실패했을 때 반환)

// --------------------------------------------

// 2. String Type
// 문자열 타입
// " " 또는 ' ' 로 감싸야함 (감싸지 않으면 변수 취급)
let myName = "한주연";
let myLocation = "쌍문";

// 문자열 덧셈 연산 지원
let introduce = myName + myLocation; // 한주연쌍문

// `` 백틱 사용
// 템플릿 리터럴 문법
// 문자열 안에 $를 사용하여 변수값을 동적으로 사용가능
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
// 한주연은 쌍문에 거주합니다.

// --------------------------------------------

// 3. Boolean Type
// True 또는 False 값을 저장
// 현재의 상태를 저장하는데 주로 사용
let isSwitchOn = true;
let isEmpty = false;

// --------------------------------------------

// 4. Null Type
// 아무런 값도 담겨져있지 않음을 직접 명시적으로 할당
let empty = null;

// --------------------------------------------

// 5. Undefined Type
// 변수에 어떠한 값도 넣지 않았을 때 자동으로 할당
// 초기화를 하지 않았거나, 존재하지 않는 값을 가져올 때
let none;
console.log(none);
