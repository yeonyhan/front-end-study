// 단락평가(Short-circuit Evaluation)
// AND, OR 같은 논리 연산식에서
// 첫번째 피연산자의 값만으로도 연산 결과를 확정할 수 있음

let varA = false;
let varB = true;

// varA 값만으로도 연산의 결과 확정이 되므로
// varB 값에는 접근할 필요가 없음

// AND 연산자
// varA가 F이기 때문에 varB가 무엇이 되었든
// 무조건 결과는 F
console.log(varA && varB); // F

// OR 연산자
// varB가 T이기 때문에 varA가 무엇이 되었듬
// 무조건 결과는 T
console.log(varB || varA); // T

// 단락평가를 이용하면 조건문을 사용하지 않아도
// 어떠한 함수를 호출하지 않도록 방지하거나
// 어떤 값을 굳이 계산하지도록 제한하는 등이 가능해짐

// --------------------------------------------

// 간단한 논리연산식
function returnFalse() {
  console.log("False 함수");

  //단락평가는 Truthy, Falsy 값에도 적용됨
  return undefined;
}

function returnTruth() {
  console.log("True 함수");
  return 10;
}

// 단락평가가 작동하여 첫번째 피연산자에 의해 결과 확정
// 두번째 피연산자는 아예 호출되지 않음
// Truthy, Falsy은 해당 값 자체가 반환됨
console.log(returnFalse() && returnTrue()); // False 함수 undefined

// 단락평가가 작동되지 않음
// 두번째 피연산자까지 호출하게 됨
console.log(returnTruth() && returnFalse()); // True 함수 False 함수 undefined

// 단락평가가 작동
console.log(returnTruth() || returnFalse()); // True 함수 10

// --------------------------------------------

// 단락평가 활용 사례
function printName4(person2) {
  if (!person2) {
    console.log("person2에 값이 없음");
    return;
  }
  console.log(person2.name);
}

let person2;

// 단락평가를 이용하여 간결하게 개선
// person2 값이 Falsy한 값이면 두번째 피연산자 출력
function printName5(person2) {
  console.log(person2 && person2.name);
}

// 한번더 개선
// 매개변수가 undefined인 경우 (person이 Falsy인 경우)
// AND 연산자에서 name이 undefined로 평가 (첫번째 피연산자)
// OR 연산자에서 name의 값이 무시되고 두번째 피연산자 값만 호출

// 매개변수가 Truthy한 경우 (name이 Truthy인 경우)
// AND 연산자에서 name이 값이 할당됨 (두번째 피연산자)
// OR 연산자에서 name이 표시됨 (첫번째 피연산자)
function printName6(person2) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName6(); // undefined
printName6({ name: "한주연" }); // 한주연
