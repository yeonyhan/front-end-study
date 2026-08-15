// 조건문
// 특정 조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법
// 대표적으로 if, switch 조건문이 존재

// --------------------------------------------

// 1. if 조건문 (if문)
let num = 10;

// 참, 거짓을 따질 조건문
// 중괄호 안에는 조건식이 참일 때 수행할 코드들
// 조건식이 참이 아닌 경우 아무 코드도 실행되지 않음

// 모든 조건식이 참이 아닐때 수행시키려면
// else 사용하여 중괄호 안의 코드를 수행

// else if로 조건문을 여러개 생성 가능
// else if는 개수의 제한이 없음

if (num >= 10) {
  console.log("num은 10 이상입니다.");
  console.log("조건이 참입니다.");
} else if (num >= 5) {
  console.log("num은 5 이상입니다.");
} else if (num >= 3) {
  console.log("num은 3 이상입니다.");
} else {
  console.log("조건이 거짓입니다.");
}

// 주의할 점
// if문은 if로 시작해서
// else 없이 끝내거나 else로 끝나야함

// else if로 끝나거나
// else문이 else if문 중간에 있으면 오류

// --------------------------------------------

// 2. switch문
// if문과 기능 자체는 동일하나
// 다수의 조건을 처리할 때 if보다 더 직관적
let animal = "cat";

// switch 문 소괄호에 비교하고 싶은 변수 하나 넣음
// case문에 변수의 값이 될 수 있는 후보를 모두 작성
// case문 :(콜론) 뒤 중괄호에 해당 변수인 경우 수행할 코드 작성

// switch문은 소괄호의 변수와 일치하는 case를 위에서 아래로
// 차례대로 탐색하다가 일치하는 case를 발견해도
// 아래의 모든 case를 모두 수행하기 때문에
// break문을 사용하여 해당 case 발견시 switch문을 종료

// 일치하는 case가 없는 경우 아무런 코드로 실행되지 않기 때문에
// else문 처럼 default문을 추가할 수 있음
switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    console.log("그런 동물은 전 모릅니다.");
  }
}

// 어떠한 변수의 값을 기준으로 각각 다른 코드를 실행하고 싶다면
// => switch문 사용

// 복잡한 여러 개의 조건을 이용하고 싶다면
// => if문 사용
