// common.js 모듈 시스템의 내장객체 require 이용
// 모듈의 경로를 인수로 전달
// exports 한 값을 그대로 반환
// const moduleData = require("./math");

// console.log(moduleData); // add 함수, sub 함수

// // 불러온 객체를 호출하여 사용
// console.log(moduleData.add(1, 2)); // 3
// console.log(moduleData.sub(2, 1)); // 1

// // 구조분해 할당 사용시
// const { add, sub } = require("./math");

// console.log(add(1, 2)); // 3
// console.log(sub(2, 1)); // 1

// --------------------------------------------

// ES module을 사용
// import 와 from을 사용하여 모듈 불러오기
// 확장자를 안쓸 경우 오류 발생
import { add, sub } from "./math.js";

console.log(add(1, 2)); // 3
console.log(sub(2, 1)); // 1

// 디폴트 모듈을 불러올때
// 중괄호(구조분해할당) 없이 불러와야함
import multiply from "./math.js";

// 이름을 임의로 바꾸는 것도 가능
// 어짜피 불러오는 건 기본값으로 정해져 있음
import mul from "./math.js";

// 동일한 경로면 합치는 것도 가능
import mul, { add, sub } from "./math.js";

// --------------------------------------------

// 설치한 라이브러리를 사용
import randomColor from "randomcolor";

const color = randomColor();
console.log(color); // #ff7a7c
