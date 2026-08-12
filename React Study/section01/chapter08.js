// 특수한 연산자들

// 1. null 병합 연산자
// 존재하는 값을 추려내는 기능
// null, undefined가 아닌 값을 찾아내는 연산자
let var1; // undefined
let var2 = 10;
let var3 = 20;

// 두 값 중에 null 이나 undefined가 아닌 값이 있으면
// 해당 값을 변수에 저장
let var4 = var1 ?? var2; // 10
let var5 = var1 ?? var3; // 20

// 두 값 다 null 이나 undefined가 아닌 경우
// 첫번째 값이 반환
let var6 = var2 ?? var3; // 10
let var7 = var3 ?? var2; // 20

// 실무에서 사용시 (회원가입의 경우)
// userName이 없다면 userNickName으로 저장하라.
let userName = "한주연";
let userNickName = "on";

let displayName = userName ?? userNickName;

// --------------------------------------------

// 2. typeof 연산자
// 값을 타입을 문자열로 반환
// 자바스크립트는 변수의 타입이 고정되어 있지 않음
// 현재 저장된 변수의 타입의 궁금한 경우
let var8 = 1;
var8 = "hello";

let t1 = typeof var8;
console.log(t1); // string

// --------------------------------------------

// 3. 삼항 연산자
// 항을 3개 사용
// 조건식을 이용하여 참, 거짓일 때의 값을 다르게 반환
// :(콜론)을 기준으로 ? 왼쪽의 식의 참 거짓을 판단하여
// 왼쪽이 참일때 결과 값, 오른쪽이 거짓일 때 결과 값
let var9 = 10;

// 요구사항 : 변수 res에 var9의 값이
// 짝수면 "짝"으로 저장, 홀수면 "홀"로 저장
let res = var9 & (2 === 0) ? "짝" : "홀";
console.log(res); // 짝
