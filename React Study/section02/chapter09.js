// 배열 메서드 3. 변형
// 기존의 배열을 변형하여 새로운 배열을 반환
// 또는 문자열로 묶어서 반환

// --------------------------------------------

// 5가지의 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만
// 필터링하여 새로운 배열로 반환
// find, findIndex와 비슷한 형태
// 특정 조건에 의해 검색시키는 기능, 카테고리별 필터에 사용

let arr1 = [
  { name: "한주연", hobby: "게임" },
  { name: "이준환", hobby: "게임" },
  { name: "홍길동", hobby: "축구" },
];

// filter 메서드를 이용하여 hobby가 "게임"인 요소만 필터링
// 배열의 모든 요소를 순회하면서
// 콜백함수의 조건에 만족하는 값들만
// 새로운 배열로 반환

const gamePeople = arr1.filter((item) => {
  if (item.hobby === "게임") return true;
});

// 화살표 함수로 단축
const gamePeople2 = arr1.filter((item) => item.hobby === "게임");

console.log(gamePeople2);
// { name: "한주연", hobby: "게임" }, { name: "이준환", hobby: "게임" },

// --------------------------------------------

// 2. map
// 가장 자주 사용되는 배열 메서드!
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행
// forEach 메서드와 동일하게 동작하지만
// 차이점은 콜백함수 안에서 return으로 반환값 설정 가능
// 반환값들을 모아 새로운 배열로 반환

let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  console.log(idx); // 0 1 2
  console.log(item); // 1 2 3

  return item * 2;
});

console.log(mapResult1); // [2, 4, 6]

// map 활용 사례
// arr 1 객체 값에서 이름값들만 따로 뽑아 새로운 배열로 추출
const names = arr1.map((item) => item.name);

console.log(names); // ["한주연", "이준환", "홍길동"]

// --------------------------------------------

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
// 호출만해도 요소를 사전 오름차순으로 자동 정렬

let arr3 = ["b", "a", "c"];
arr3.sort();

console.log(arr3); // ["a", "b", "c"]

// 주의할 점
// 배열의 값이 문자열이 아닌 숫자 값으로 이루어진 경우
// sort 메서드가 정상동작하지 않음
// 숫자의 대소비교가 아닌 사전순 비교이기 때문

let arr4 = [5, 3, 10];
arr4.sort();

console.log(arr4); // [5, 3, 10] 정렬되지 않음

// 대소비교 정렬하고 싶다면
// sort 메서드를 호출하면서 비교 기준을 설정하는 콜백함수 필요
// return 값 (1, -1, 0) 에 따라 위치를 설정

// 오름차순 정렬
arr4.sort((a, b) => {
  if (a > b) {
    // a가 b보다 크면 b(작은값)가 a(큰값) 앞에 와라 (b, a)
    // 양수를 반환
    return 1;
  } else if (a < b) {
    // b가 a보다 크다면 a(작은값)가 b(큰값) 앞에 와라 (a, b)
    // 음수를 반환
    return -1;
  } else {
    // 둘이 같은 값이면
    // 0을 반환하여 자리를 바꾸지 마라 (a, b 유지)
    return 0;
  }
});

console.log(arr4); // [3, 5, 10]

// 내림차순 정렬
arr4.sort((a, b) => {
  if (a > b) {
    // a가 b보다 크면 a(큰값)가 b(작은값) 앞에 와라 (a, b)
    // 음수를 반환
    return -1;
  } else if (a < b) {
    // b가 a보다 크다면 b(큰값)가 a(작은값) 앞에 와라 (b, a)
    // 양수를 반환
    return 1;
  } else {
    // 둘이 같은 값이면
    // 0을 반환하여 자리를 바꾸지 마라 (a, b 유지)
    return 0;
  }
});

console.log(arr4); // [10, 5, 3]

// --------------------------------------------

// 4. toSorted
// sort와 동일한 메서드
// 차이점은 원본 배열은 두고, 새로운 배열을 반환
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5); // ["c", "a", "b"]
console.log(sorted); // ["a", "b", "c"]

// --------------------------------------------

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서
// 새로운 배열로 반환
let arr6 = ["hi", "im", "han"];
const joined = arr6.join();

console.log(joined); // hi,im,han

// 구분자는 콤마가 기본값
// 바꾸고 싶은 구분자를 매개변수로 넣어도됨
const joined2 = arr6.join(" "); // 공백
console.log(joined2); // hi im han
