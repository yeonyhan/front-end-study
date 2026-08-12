// 순회(Iteration)
// 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근

// 1 배열 순회
let arr = [1, 2, 3];

// 1-1. 배열 인덱스로 순회
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// length 프로퍼티
// 모든 배열이 다 가지고 있는 기본적인 프로퍼티
// 배열의 길이를 저장

// arr 인덱스는 0부터 2까지 있으며,
// arr의 요소가 3개이므로 arr.length는 3
// 반복문에서 i는 0 부터 시작하여 1씩 증감
// i는 0, 1, 2 로 순차적으로 진행
// arr[0], arr[1], arr[2] 가 순차적으로 출력

// arr2.length는 5이고
// i는 0 부터 4까지 순차적 증감
// arr2[0] 부터 arr2[4]
let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

// --------------------------------------------

// 1.2 for of 반복문으로 순회
// 오직 배열을 순회하기 위한 특수한 반복문
// of 뒤에 있는 배열(arr)의 값을 하나씩 순차적으로 꺼내
// of 앞의 변수(item)에 저장하므로
// item에 arr 요소인 1, 2, 3 이 순차적으로 할당
for (let item of arr) {
  console.log(item);
}

// for문과 for of 문의 성능상 차이점은 없으나
// for문으로 인덱스를 순회하는 경우
// 인덱스를 활용하는 방법이 있음
// for of문은 인덱스를 저장하지 않고
// 배열 안에 있는 값을 순차적 순회만 해줌

// --------------------------------------------

// 2. 객체 순회
let person = {
  name: "한주연",
  age: 30,
  hobby: "게임",
};

// 2.1 Object.keys 사용
// 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
console.log(keys); // [name, age, hobby]

// 뽑아낸 key 배열을 for 반복문으로 순회
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]); // name, age, hobby
}

// 또는 for...of로 순회
// 괄호표기법으로 객체의 value값도 동시에 순회 가능
for (let key of keys) {
  console.log(key); // name, age, hobby
  console.log(person[key]); //한주연, 30, 게임
}

// 좀더 깔끔하게 정리
for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}

// --------------------------------------------

// 2.2 Object.values 사용
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
console.log(values); // [한주연, 30, 게임]

// for...of 반복문으로 순회
for (let value of values) {
  console.log(value); // 한주연, 30, 게임
}

// --------------------------------------------

// 2.3 for in 사용
//  오직 객체만을 순회하기 위한 특수 반복문
// in 뒤의 객체(person)의 key값 순차적으로 꺼내서
// in 앞의 변수(key)에 할당
// 괄호표기법으로 key, value 값을 동시에 순회
for (let key in person) {
  const value = person[key];
  console.log(key); // name, age, hobby
  console.log(value); // 한주연, 30, 게임
}

// --------------------------------------------

// 주의할 점
// for...in 과 for...of 구분
// for...in은 객체를 순회할때만 사용
// for...of는 배열을 순회할때만 사용
// 둘 다 새로운 배열을 반환
