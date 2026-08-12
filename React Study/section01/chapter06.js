// 형 변환 (Type Casting)
// 어떤 값의 타입을 다른 타입으로 변경하는 것
// 예를 들어 Number Type을 String Type으로 바꿈

// 1. 묵시적 형 변환 (암묵적 형변환)
// 개발자가 직접 설정하지 않아도 자바스크립트 엔진이 알아서 형 변환

// 2. 명시적 형 변환
// 개발자가 직접 함수 등을 이용해 형 변환

// --------------------------------------------

// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환
let num = 10;
let str = "20";

const result = num + str;
console.log(result); // 1020
// num(number 타입)이 덧셈과정에서 묵시적으로 string 타입으로 형 변환하여
// 문자열의 덧셈연산이 발생함
// 숫자 + 문자와 처럼 숫자 간 덧셈이 불가능한 연산 발생시 숫자를 문자로 변환하게 됨
// 특정 하나의 변수 값을 형 변환 했을 때 오류가 발생하지 않고
// 정상적인 결과가 나오는 경우에 한 함 (곱셈, 나누기 등은 불가)

// --------------------------------------------

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용하여 직접 형 변환을 명시
// 내장함수 : 자바스크립트가 기본적으로 제공하는 함수

// 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1); // 20

// 문자 값이 포함된 경우 Number 내장함수로 형 변환시 NaN
let str2 = "10개";
let strToNum2 = Number(str2);
console.log(strToNum2); // NaN

// parseInt 내장함수를 사용하여 숫자만 추출하여 형 변환
// 숫자가 앞에 있어야 오류가 나지 않음
let strToNum3 = parseInt(str2);
console.log(strToNum3); // 10

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다"); // "20입니다"
