// 구조분해할당
// 배열, 객체에 저장된 여러 개의 값들을
// 분해해서 각각 다른 변수에 할당

// --------------------------------------------

// 1. 배열의 구조분해할당
let arr = [1, 2, 3];

// 배열의 원소를 일일이 할당
// 아래 방식은 비효율적
let one = arr[0];
let two = arr[1];
let three = arr[3];

// 구조분해할당을 통해 효율적으로 할당
// 대괄호 내에 변수를 동시 선언하고
// 초기값으로 배열을 할당
let [one1, two1, three1] = arr;
console.log(one1, two1, three1);

// 만약 특정 값은 저장하고 싶지않다면
let [one2, two2] = arr;

// 배열 원소 개수를 넘어서 추가로 선언해도
// 오류가 발생하지 않으나
// 초기화가 되지않은 변수처럼 undefined가 할당됨
let [one3, two3, three3, four3] = arr;
console.log(four3); // undefined

// 값이 모자란 상황을 대비하여 기본값 설정 가능
let [one4, two4, three4, four4 = 4] = arr;
console.log(four4); // 4

// --------------------------------------------

// 2. 객체의 구조분해할당
let person = {
  name: "한주연",
  age: 30,
  hobby: "게임",
};

// 객체의 프로퍼티를 일일이 할당
// 아래 방식은 비효율적
let name = person.name;
let age = person.age;
let hobby = person.hobby;

// 구조분해할당으로 효율적이게
// 중괄호 내 키값을 기준으로 값을 할당
let { name1, age1, hobby1 } = person;
console.log(name1, age1, hobby1);

// 존재하지않는 프로퍼티를 구조분해한다면
let { name2, age2, hobby2, extra2 } = person;
console.log(extra2); // undefined

// 추가된 프로퍼티 기본값 설정한다면
let { name3, age3, hobby3, extra3 = "Hello" } = person;
console.log(extra3); // Hello

// 객체 구조분해할당에서는
// 할당받는 변수의 이름을 변경할 수도 있음
let { name4, age4: myAge } = person;
console.log(name4, myAge);

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
const funcB = ({ name5, age5, hobby5 }) => {
  console.log(name5, age5, hobby5);
};

funcB(person);

// 주의할 점
// 객체를 넘겼을 때만 구조분해할당이 가능한 것
// 매개변수 내에서 중괄호를 사용하여 구조분해할당을 명시해야함
// 만약 일반 값을 넘긴 경우 구조분해할당은 이뤄지지않음
