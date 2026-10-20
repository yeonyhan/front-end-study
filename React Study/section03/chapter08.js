// 배열 메서드 2. 순회와 탐색
// 5가지의 요소 순회 및 탐색 메서드

// --------------------------------------------

// 1. forEach (순회)
// 모든 요소를 순회하면서,
// 각각의 요소에 특정 동작을 수행시키는 메서드

let arr1 = [1, 2, 3];

// 배열의 길이만큼 반복하면서 콜백함수를 수행
// 콜백함수 인수 (요소, 인덱스, 배열)
arr1.forEach((item, idx, arr) => {
  console.log(idx, item);
});
// 0 1
// 1 2
// 2 3

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

index = arr3.indexOf(2);
console.log(index); // 0

// 존재하지 않는 값의 인덱스를 찾으려고 하면
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

// findIndex 가 존재하는 이유 ?
// 비슷한 메서드인 indexOf 의 경우
// 객체 타입의 값들이 저장된 배열에서는
// 정확한 요소의 위치를 찾아낼 수 없기 때문

// name이 "한주연"인 객체의 값의 위치를 찾고싶은 경우
let objectArr = [{ name: "한주연" }, { name: "이준환" }];

// indexOf의 경우 찾지 못함
console.log(objectArr.indexOf({ name: "한주연" })); // -1

// indexOf는 얕은 비교로 동작하기 때문
// findIndex를 이용한다면 깊은 비교가 가능
console.log(objectArr.findIndex((item) => item.name === "한주연")); // 0

// --------------------------------------------

// 5. find 메서드 (탐색)
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 반환
// findIndex 는 인덱스를 반환

let arr5 = [{ name: "한주연" }, { name: "이준환" }];

// 콜백함수를 전달하여 조건식에 참인 요소를 반환
const findItem = arr5.find((item) => item.name === "한주연");

// 첫번째로 찾은 요소(객체) 자체가 반환
console.log(findItem); // {name: "한주연"}
