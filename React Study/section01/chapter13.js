// 콜백함수
// 자신이 아닌 다른 함수에, 인수로써 전달된 함수

// main 함수는 value라는 매개변수를 받음
// 매개변수에 함수가 들어옴
function main(value) {
  // 매개변수에 저장된 함수를
  // main 함수 안에서 호출할 수 있음
  value();
}

// sub 함수는 매개변수 없이 콘솔 출력
function sub() {
  console.log("sub");
}

// sub라는 함수를 값으로써 main 함수에 인수로 전달
main(sub); // sub

// sub 함수처럼 다른 함수(main) 에
// 인수로써 전달되는 함수
// => 콜백함수

// --------------------------------------------

// 1. 콜백함수
// 함수도 값으로 취급되므로
// 함수 자체를 다른 함수의 인수로 전달하는게 가능

function main2(value) {
  console.log(value); // sub 함수 자체가 출력

  value(); // 호출도 가능해짐
}

function sub2() {
  console.log("sub2");
}

main2(sub2); // sub2

// 어떠한 함수를 다른 함수의 인수로 전달해서
// 해당 함수에서 알아서 나중에 호출시키도록 설정한 함수를
// 콜백함수라고 부름

// 콜백 : 뒷전에, 나중에 실행된다는 의미
// sub 함수는 당장 실행되는 것이 하는 main 함수가 실행될 때
// 알아서 main이 원하는 타이밍에 실행되기 때문

// 함수 표현식처럼 사용하려면
// 선언문 자체를 안에 넣어서 사용
main3(function () {
  console.log("sub3");
});

// 화살표 함수로 더 단축
main4(() => {
  console.log("sub4");
});

// --------------------------------------------

// 2. 콜백함수의 활용
// 1부터 매개변수로 전달해준 값까지
// 반복해서 출력하는 repeat 함수
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

repeat(5); // 1 2 3 4 5

// repeat 함수와 비슷한 함수
// 2의 배수를 출력하는 repeatDouble 함수
function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

repeatDouble(5); // 2 4 6 8 10

// repeat과 repeatDouble 함수처럼
// 구조가 거의 흡사한 함수의 경우
// 중복코드가 발생되므로
// 콜백함수를 이용하여 코드를 개선

// 인수로 콜백함수를 전달
// 콜백함수를 호출하고 인수로 idx를 넘김
function repeat2(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

// 함수를 호출하면서 콜백함수를 인수로 넘김
repeat2(5, function (idx) {
  console.log(idx);
}); // 1 2 3 4 5

// 콜백함수만 수정해서 유사한 기능을 수행
repeat2(5, function (idx) {
  console.log(idx * 2);
}); // 2 4 6 8 10

// 화살표함수로 간결하게
repeat2(5, (idx) => {
  console.log(idx);
}); // 1 2 3 4 5
