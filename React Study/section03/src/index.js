// 1. Common JS 사용하여 함수 사용하기
// const moduleData = require("./math");
// console.log(moduleData); // add 함수, sub 함수

// // 구조분해 할당 사용시
// const { add, sub } = require("./math");

// console.log(add(1, 2)); // 3
// console.log(sub(2, 1)); // 1

// --------------------------------------------

// 2. ES module 사용하여 함수 사용하기
// 확장자를 안쓸 경우 오류 발생
import { add, sub } from "./math.js";

console.log(add(1, 2)); // 3
console.log(sub(2, 1)); // 1

// 디폴트 모듈을 불러오는 경우
// 구조분해할당없이 불러오기
import multiply from "./math.js";

console.log(multiply(1, 2)); // 2

// 이름을 임의로 수정 가능
import mul from "./math.js";

console.log(mul(1, 2)); // 2

// 동일한 경로면 합쳐서 불러오기 가능
import mul, { add, sub } from "./math.js";

// --------------------------------------------

// 설치한 라이브러리를 사용
import randomColor from "randomcolor";

const color = randomColor();
console.log(color); // #ff7a7c
