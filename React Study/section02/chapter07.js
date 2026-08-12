// 배열 메서드 1. 요소 조작
// 요소 추가, 수정, 삭제
// 6가지의 요소 조작 메서드

// --------------------------------------------

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
// 요소 추가 후 변환된 배열의 길이를 반환
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6);

console.log(arr1); // [1,2,3,4,5,6]
console.log(newLength); // 6

// --------------------------------------------

// 2. pop
// 배열의 맨 뒤에 요소를 제거하는 메서드
// 제거된 요소를 반환
let arr2 = [1, 2, 3];
const poppedItem = arr.pop();

console.log(poppedItem); // 3
console.log(arr2); // [1, 2]

// --------------------------------------------

// 3. shift
// 배열의 맨 앞에 요소를 제거
// 제거된 요소를 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

console.log(shiftedItem); // 1
console.log(arr3); // [2, 3]

// --------------------------------------------

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가
// 요소 추가 후 변환된 배열의 길이를 반환
let arr4 = [1, 2, 3];
const newLength2 = arr.unshift(0);

console.log(newLength2); // 4
console.log(arr4); // [0,1,2,3]

// --------------------------------------------

// 주의할 점
// shift, unshift는 pop, push 보다 느리게 작동
// 배열은 인덱스와 함께 순차적으로 자료를 저장하므로
// 값의 순서에 따라 인덱스가 부착됨
// 배열의 맨 뒤에 추가, 삭제시 맨 뒤의 인덱스가 조정하면 됨
// 배열의 맨 앞에 추가, 삭제하면 모든 인덱스가 조정되어야하기 때문에
// shift, unshift는 비효율적으로 작동됨

// --------------------------------------------

//  5. slice
// 마치 가위처럼 배열의 특정 범위를 잘라냄
// 새로운 배열로 반환

// 3, 4, 5를 잘라내고 싶다면
let arr5 = [1, 2, 3, 4, 5];

// 첫번째 인수: 자르기 시작할 인덱스
// 두번째 인수: 자르기 끝낼 인덱스 + 1
let sliced = arr5.slice(2, 5);

// 원본 배열은 수정되지않음
console.log(arr5); // [1,2,3,4,5]
console.log(sliced); // [1, 2]

// 배열 끝까지 잘라내고 싶은 경우
// 두번째 인수 생략
let sliced2 = arr5.slice(2);
console.log(sliced2); // [1, 2]

// 배열 순서 뒤부터 잘라내고 싶은 경우
// 인수에 음수 값을 사용
let sliced3 = arr5.slice(-1);
console.log(sliced3); // 5

let sliced4 = arr5.slice(-3);
console.log(sliced4); // [3, 4, 5]

// --------------------------------------------

// 6. concat
// 두개의 서로 다른 배열을 이어 붙임
// 새로운 배열로 반환

let arr6 = [1, 2];
let arr7 = [3, 4];

// arr6 요소 뒤에 arr7 요소를 이어 붙임
let concatArr = arr6.concat(arr7);
console.log(concatArr); // [1, 2, 3, 4]
