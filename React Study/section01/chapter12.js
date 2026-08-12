// 함수 표현식과 화살표 함수

// --------------------------------------------

// 함수선언
function funcA() {
  console.log("funcA");
}

// 함수 자체를 변수에 할당
let varA = funcA;
console.log(varA); // 함수 자체가 출력됨

// 함수를 변수 이름으로 호출할 수 있음
varA(); // funcA

// 함수를 선언하지 않고 변수에 담듯이 함수 생성
// 함수를 만들자마다 변수에 할당
let varB = function funcB() {
  console.log("funcB");
};

varB(); // funcB

// 주의할 점
// funcB의 경우 선언식이 아님
// 변수의 값으로써 담기지 않은 상태로 유지되어야하기 때문
// 값으로써 함수가 생성한 경우
// 함수의 이름으로는 호출 불가능
funcB(); // 오류 발생

// 어짜피 함수 이름이 사용 불가능하므로
// 함수 생성시 함수 이름을 생략해도 됌
// 이름없는 함수는 익명함수
let varBB = function () {
  console.log("funcBB");
};

// 정리
// funcA 처럼
// 함수 선언문을 이용해서 함수 생성
// -> 함수 선언문

// varB 처럼
// 값으로써 함수를 생성
// -> 함수 표현식

// 함수 표현식으로 만든 함수는
// 값으로써 취급되기 때문에
// 호이스팅의 대상이 되지 않음

// 함수 표현식은 콜백함수에 주로 활용됨

// --------------------------------------------

// 화살표 함수
// 함수를 이전보다 더 빠르고 간결하게 생성

// 함수 표현식의 경우
let varC = function () {
  return 1;
};

// 화살표 함수의 경우 (function 생략)
let varCC = () => {
  return 1;
};

// 값을 반환하기만 하는 경우 (return 생략)
let varCCC = () => 1;

// 매개변수가 필요한 경우 (소괄호 사용)
let varCCCC = (value) => value + 1;

// 값을 즉시 반환하지 않고
// 추가적인 작업이 필요한 경우 (중괄호 사용)
let varCCCCC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC); // 1
console.log(varCC); // 1
console.log(varCCC); // 1
console.log(varCCCC(1)); // 2
console.log(varCCCCC(1)); // 1 2
