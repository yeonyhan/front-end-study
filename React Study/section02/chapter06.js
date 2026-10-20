// 형 변환 (Type Casting)
// 어떤 값의 타입을 다른 타입으로 변경하는 것
// 예를 들어 Number Type -> String Type 으로 바꿈

// 1. 암묵적 형 변환 (묵시적 형변환)
// 개발자가 직접 설정하지 않아도 자바스크립트 엔진이 알아서 형 변환

// 2. 명시적 형 변환
// 개발자가 직접 함수 등을 이용해 형 변환

// --------------------------------------------

// 1. 암묵적 형 변환
// -> 자바스크립트 엔진이 알아서 자동으로 형 변환
let num = 10;
let str = "20";

const result = num + str;
console.log(result); // 1020
// 숫자 + 문자와 처럼 불가능한 연산 발생시 숫자를 문자로 암묵적 형 변환
// 모든 불가능한 연산에 형 변환이 일어나는 것이 아니라
// 정상적인 결과가 나오는 특정 경우에만 발생 (그 외는 NaN)

// --------------------------------------------

// 2. 명시적 형 변환
// -> 내장 함수를 이용하여 직접 형 변환을 명시
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
// 이 때 숫자가 앞에 있어야 오류가 나지 않음
let strToNum3 = parseInt(str2);
console.log(strToNum3); // 10

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다"); // "20입니다"
