// 단락평가(Short-circuit Evaluation)
// 논리 연산식(AND, OR)에서
// 첫번째 피연산자의 값만으로도 연산 결과를 확정할 수 있음

let varA = false;
let varB = true;

// 첫번째 피연산자 값만으로도 연산의 결과가 확정되므로
// 두번째 피연산자 값에는 접근할 필요가 없음

// AND 연산자
// varA가 F이기 때문에 varB에 상관없이
// 무조건 결과는 F
console.log(varA && varB); // false

// OR 연산자
// varB가 T이기 때문에 varA에 상관없이
// 무조건 결과는 T
console.log(varB || varA); // true

// 단락평가를 이용하면 조건문을 사용하지 않아도
// 어떠한 함수를 호출하지 않도록 방지하거나
// 어떤 값을 굳이 계산하지도록 제한하는 등이 가능

// --------------------------------------------

// 간단한 논리연산식
function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTruth() {
  console.log("True 함수");
  return true;
}

// 첫번째 피연산자만으로 결과 확정된다면 단락평가가 작동
// 두번째 피연산자는 아예 호출되지 않음
console.log(returnFalse() && returnTrue()); // False 함수 false(연산 결과)

// 단락평가가 작동되지 않음
// 두번째 피연산자까지 호출하게 되어 두 결과 값이 모두 출력
console.log(returnTruth() && returnFalse()); // True 함수 False 함수 false(연산 결과)

// 단락평가가 작동
console.log(returnTruth() || returnFalse()); // True 함수 true(연산 결과)

// --------------------------------------------

// 단락평가 활용 사례
// person 값이 Falsy한 값이면 두번째 피연산자 출력
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName(); // undefined
printName6({ name: "한주연" }); // 한주연

// person이 Falsy인 경우
// AND 연산자에서 pesron은 Falsy 이므로 name은 Falsy
// OR 연산자에서 name의 값이 무시되고 두번째 피연산자 값 호출

// name이 Truthy인 경우
// AND 연산자에서 person이 Truthy 이고 name에 값이 할당됨
// OR 연산자에서 name 값을 표시
