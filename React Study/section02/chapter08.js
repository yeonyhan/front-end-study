// 배열 메서드 2. 순회와 탐색
// 5가지의 요소 순회 및 탐색 메서드

// --------------------------------------------

// 1. forEach (순회)
// 모든 요소를 순회하면서,
// 각각의 요소에 특정 동작을 수행시키는 메서드

// 배열 모든 요소에 곱하기 2를 한 값을 반환하고 싶다면
let arr1 = [1, 2, 3];

// 반복문처럼 매 반복마다 콜백함수를 수행
// 배열의 길이만큼 호출됨
// 콜백함수 인수 (요소, 인덱스, 배열)
arr.forEach(function (item, idx, arr) {
  console.log(idx); // 0 1 2
  console.log(item); // 1 2 3
  console.log(item * 2); // 2 4 6
});

// 배열의 모든 요소에 곱하기 2를 하여 새 배열에 넣고싶다면
// forEach, 화살표함수, push 메서드 활용
let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr); // [2, 4, 6]

// --------------------------------------------

// 2. includes (탐색)
// 배열에 특정 요소가 있는 확인하는 메서드

// 배열에 3이라는 값이 있는지 확인하고 싶다면
let arr2 = [1, 2, 3];
let isIncludes = arr2.includes(3);

console.log(isIncludes); // true

// 존재하지 않는 값을 찾으려고 하면
// false를 반환
isIncludes = arr2.includes(10);

console.log(isIncludes); // false

// --------------------------------------------

// 3. indexOf (탐색)
// 특정 요소의 인덱스(위치)를 찾아내서 반환하는 메서드

// 배열에서 2라는 값의 인덱스를 찾고싶다면
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);

console.log(index); // 1

// 배열에 찾으려는 값이 여러개 존재한다면
// 가장 첫번째로 찾아낸 요소의 인덱스를 반환
arr3 = [2, 2, 2];

console.log(index); // 0

// 존재하지 않는 값의 인덱스를 찾으려고 하면
// -1를 반환
index = arr3.indexOf(3);

console.log(index); // -1

// --------------------------------------------

// 4. findIndex (탐색)
// 모든 요소를 순회하면서, 콜백함수를 만족하는
// 특정 요소의 인덱스(위치)를 반환하는 메서드

// 콜백함수는 참/거짓을 판단하여 참인 요소의 인덱스 반환
let arr4 = [1, 2, 3];
const findIndex2 = arr4.findIndex((item) => {
  if (item === 2) return true;
});

console.log(findIndex2); // 1

// 요소의 값이 홀수일 때 참을 반환하는 콜백함수
// 배열의 요소 중 홀수인 요소의 인덱스 반환
const findIndex3 = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true;
});

console.log(findIndex3); // 0

// 콜백함수의 화살표함수를 더 간결하게
const findIndex4 = arr4.findIndex((item) => item % 2 !== 0);

// 조건을 만족하는 요소가 존재하지 않는다면
// -1 을 반환
const findIndex5 = arr4.findIndex((item) => item > 5);
console.log(findIndex5); // -1

// findIndex 가 존재하는 이유 ?
// 비슷한 메서드인 indexOf 의 경우
// 원시 타입의 값이 들어왔을 때가 아닌
// 객체 타입의 값들이 저장된 배열에서는
// 정확한 요소의 위치를 찾아낼 수 없음

// name이 "한주연"인 객체의 값의 위치를 찾고싶은 경우
let objectArr = [{ name: "한주연" }, { name: "이준환" }];

// indexOf의 경우 찾지 못함
console.log(objectArr.indexOf({ name: "한주연" })); // -1

// 찾지 못하는 이유는
// indexOf는 기본적으로 얕은 비교로 동작하기 때문
// 얕은 비교는 동등 비교 연산자를 이용하여 비교
// 객체값은 참조값을 기준으로 깊은 비교를 해야함

// findIndex를 이용한다면
// 프로퍼티의 값을 기준으로 비교하기 때문에
// 깊은 비교가 가능
console.log(objectArr.findIndex((item) => item.name === "한주연")); // 0

// 결론적으로
// indexOf 메서드는 특정값을 배열에서 찾을 때 무조건 얕은 비교
// -> 객체값은 찾지 못함
// -> 단순한 원시타입 찾을 때만 사용
// findIndex 메서드는 콜백함수를 이용하여 직접 특정 프로퍼티 값을 비교
// -> 복잡한 객체값도 조건식으로 찾을 수 있음

// --------------------------------------------

// 5. find 메서드 (탐색)
// findIndex 메서드와 유사
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾음
// 찾은 요소를 그대로 반환 (findIndex 는 인덱스를 반환)

let arr5 = [{ name: "한주연" }, { name: "이준환" }];

// 콜백함수를 전달하여 조건식에 참인 요소를 반환
const findItem = arr5.find((item) => item.name === "한주연");

// 첫번째로 찾은 요소(객체) 자체가 반환
console.log(findItem); // {name: "한주연"}
