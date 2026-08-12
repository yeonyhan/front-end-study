// 비동기 작업 처리하기 1. 콜백함수
function task() {
  setTimeout(() => {
    console.log("HI");
  }, 3000);
}

task(); // 호출 3초뒤 HI

// --------------------------------------------

// 비동기함수의 결과값을 외부에서 추가 처리하려면

function add(a, b, callback) {
  // 3초 뒤에 실행되는 코드
  setTimeout(() => {
    const sum = a + b;

    // 콜백함수 인수로 비동기 처리값을 전달하면
    // 외부에서 설정된 콜백함수에서 추가적인 처리가 가능
    callback(sum);
  }, 3000);
}

// 함수 밖에서도 sum 값을 사용할 수 있도록 하려면
// 함수를 호출할때 비동기 처리의 결과 값을 사용하고자 하는
// 콜백함수를 함께 전달
add(1, 2, (value) => {
  console.log(value); // 3초뒤 3
});

// --------------------------------------------

// 음식을 주문하는 상황
function orderFood() {
  setTimeout((callback) => {
    const food = "떡볶이";

    callback(food);
  }, 3000);
}

// 음식을 식히는 함수
function coolFood(food, callback) {
  setTimeout(() => {
    const cooledFood = `식은 ${food}`;
    callback(cooledFood);
  }, 2000);
}

// 음식을 냉동하는 함수
function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food); // 3초뒤 떡볶이

  // 비동기 작업의 결과를 또 다른 비동기 작업의 인수로 전달
  coolFood(food, (cooledFood) => {
    console.log(cooledFood); // 2초뒤 식은 떡볶이

    freezeFood(cooledFood, () => {
      console.log(freezedFood); // 1.5초뒤 냉동된 떡볶이
    });
  });
});

// 콜백함수를 이용해서 받아온 비동기 작업의 결과를
// 또 다른 비동기 작업의 인수로 넣어주는 코드가 반복되면
// 콜백함수 안에서 계속 함수를 호출하는 인덴트(들여쓰기)가 점점 깊어지는 형태
// 이러한 방식은 기능이 늘어날수록 가독성이 안좋아짐
// => 콜백지옥
