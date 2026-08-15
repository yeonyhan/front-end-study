// 1. 콜백함수
// 함수도 값으로 취급되므로
// 함수 자체를 다른 함수의 인수로 전달하는게 가능

// 콜백함수란?
// 자신이 아닌 다른 함수에, 인수로써 전달된 함수

// callback : 뒷전에, 나중에 실행된다는 의미
// 콜백함수는 당장 실행되는 것이 아닌
// 다른 함수가 실행될 때 원하는 타이밍에 실행

function main(value) {
  console.log("start");
  value(); // 매개변수를 함수 안에서 호출 가능
  console.log("end");
}

// sub 함수
function sub() {
  console.log("sub 호출");
}

// sub 함수를 main 함수에 인수로 전달
// sub 함수는 콜백함수
main(sub); // sub 호출

// --------------------------------------------

// 선언문 자체를 안에 넣어서 사용 가능
main(function () {
  console.log("i am sub");
});

// 화살표 함수
main(() => {
  console.log("i am sub2");
});

// --------------------------------------------

// 2. 콜백함수의 활용
// 1부터 인수까지 출력하는 repeat 함수
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

repeat(5); // 1 2 3 4 5

// 구조가 거의 동일한 함수
// 2의 배수를 출력하는 repeatDouble 함수
function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

repeatDouble(5); // 2 4 6 8 10

// 구조가 거의 동일한 함수의 경우
// 콜백함수를 이용하여 중복코드 줄이기

// 인수로 콜백함수를 전달
// 콜백함수를 호출하고 인수로 idx를 넘김
function repeat2(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

// 콜백함수를 인수로 넘김
repeat2(5, function (idx) {
  console.log(idx);
}); // 1 2 3 4 5

// 콜백함수만 수정해서 유사한 기능을 수행
repeat2(5, function (idx) {
  console.log(idx * 2);
}); // 2 4 6 8 10

// 화살표함수
repeat2(5, (idx) => {
  console.log(idx);
}); // 1 2 3 4 5
