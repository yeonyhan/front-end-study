// 함수 표현식과 화살표 함수

// --------------------------------------------

// 함수 선언
function funcA() {
  console.log("funcA 호출");
}

// 함수 자체를 변수에 할당
let varA = funcA;
console.log(varA); // 함수 자체가 출력됨

// 함수를 변수 이름으로 호출할 수 있음
varA(); // funcA 호출

// 함수를 선언과 동시에 변수에 할당할 경우
// 즉, 값으로써 함수를 생성한 경우
// 해당 함수 이름(funcB)으로 호출 불가능
let varB = function funcB() {
  console.log("funcB 호출");
};

varB(); // funcB 호출 (변수로 호출)
// funcB(); // 오류 발생 (함수로 호출 불가능)

// 어짜피 함수 이름이 사용 불가능하므로
// 함수 생성시 함수 이름을 생략
// 이름없는 함수는 익명함수
let varBB = function () {
  console.log("funcBB 호출");
};

// 정리
// 함수 선언문을 이용해서 함수 생성 (funcA)
// -> 함수 선언문

// 변수에 할당하기 위해 값으로써 함수 생성 (funcB)
// -> 함수 표현식

// 함수 표현식은 값으로써 취급되기 때문에
// 호이스팅의 대상이 되지 않음

// --------------------------------------------

// 화살표 함수
// 함수를 이전보다 더 빠르고 간결하게 생성

// 함수 표현식을 화살표 함수로 (function 생략)
let varC = () => {
  return 1;
};
console.log(varC()); // 1

// 값을 반환하기만 하는 경우 (return 생략)
let varCC = () => 1;
console.log(varCC()); // 1

// 매개변수가 필요한 경우 (소괄호 사용)
let varCCC = (value) => value + 1;
console.log(varCCC(1)); // 2

// 추가적인 작업이 필요한 경우 (중괄호 사용)
let varCCCC = (value) => {
  console.log(value);
  return value + 1;
};
console.log(varCCCC(1)); // 1 2
