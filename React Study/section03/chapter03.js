// 구조분해할당
// 배열, 객체에 저장된 여러 개의 값들을
// 분해해서 각각 다른 변수에 할당하는 것

// --------------------------------------------

// 1. 배열의 구조분해할당
let arr = [1, 2, 3];

// 기존에는 배열의 원소를 일일이 할당 -> 비효율적
let one = arr[0];
let two = arr[1];
let three = arr[2];
console.log(one, two, three); // 1 2 3

// 구조분해할당을 사용하여 변수를 순서대로 할당 -> 효율적
let [one1, two1, three1] = arr;
console.log(one1, two1, three1); // 1 2 3

// 만약 특정 값은 저장하고 싶지않다면
let [one2, two2] = arr;
console.log(one2, two2); // 1 2

// 존재하지 않는 요소인 경우 undefined 할당 (오류 발생 X)
let [one3, two3, three3, four3] = arr;
console.log(one3, two3, three3, four3); // 1 2 3 undefined

// 값이 모자란 상황을 대비하여 기본값 설정
let [one4, two4, three4, four4 = 4] = arr;
console.log(one4, two4, three4, four4); // 1 2 3 4

// --------------------------------------------

// 2. 객체의 구조분해할당
let person = {
  name: "한주연",
  age: 30,
  hobby: "게임",
};

// 기존에는 객체의 프로퍼티를 일일이 할당 -> 비효율적
// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;
// console.log(name, age, hobby); // 한주연 30 게임

// 구조분해할당을 사용하여 변수를 순서대로 할당 -> 효율적
// 존재하지 않는 요소인 경우 undefined 할당 (오류 발생 X)
// 프로퍼티 기본값 설정 가능
let { name, age, hobby, extra, extra2 = "Hello" } = person;
console.log(name, age, hobby, extra, extra2); // 한주연 30 게임 undefined Hello

// 객체 구조분해할당에서는
// 할당받는 변수의 이름을 변경할 수도 있음
let { name: name2, age: age2 } = person;
console.log(name2, age2); // 한주연 30

// --------------------------------------------

// 객체 구조분해할당은
// 함수에 여러 개의 인수를 전달할 때 자주 사용

// 3. 객체의 구조분해할당을 이용해서 함수의 매개변수를 받는 방법

// 이전 방법
const funcA = (person) => {
  console.log(person.name);
};

funcA(person);

// 구조분해할당 방법
// 매개변수에 구조분해할당을 사용
const funcB = ({ name, age, hobby }) => {
  console.log(name, age, hobby);
};

funcB(person); // 한주연 30 게임

// 주의할 점
// 객체(일반 값X)를 넘겼을 때만 구조분해할당이 가능한 것
// 매개변수 내에서 중괄호를 사용하여 구조분해할당을 명시
