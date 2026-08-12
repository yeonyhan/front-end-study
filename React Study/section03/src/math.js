// 계산 기능을 하는 math 모듈

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// 모듈을 내보내서 다른 모듈에서 불러와 사용해야 함
// 자바스크립트의 모듈인 common.js 모듈 시스템을 이용
// 내장객체 exports 라는 프로퍼티의 값으로 객체를 내보내기
// 객체 안에 각각 프로퍼티로 내보내고 싶은 값을 입력

// module.exports = {
//   add,
//   sub,
// };

// --------------------------------------------

// ES module 사용하여 함수 내보내기
export { add, sub };

// 또는 함수 앞에 export 사용
export function add1(a, b) {
  return a + b;
}

// 하나의 모듈을 대표하는 디폴트 값을 내보내는 방법
export default function multiply(a, b) {
  return a * b;
}
