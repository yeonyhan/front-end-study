// 계산 모듈

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// 1. Common JS 사용하여 함수 내보내기
// module.exports = {
//   add,
//   sub,
// };

// --------------------------------------------

// 2. ES module 사용하여 함수 내보내기
export { add, sub };

// 또는 함수 앞에 export 사용
export function add1(a, b) {
  return a + b;
}

// 하나의 모듈을 대표하는 디폴트 함수 (default)
export default function multiply(a, b) {
  return a * b;
}
