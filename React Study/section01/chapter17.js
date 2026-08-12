// 배열(Array)
// 여러개의 값을 순차적으로 담을 수 있는 자료형

// --------------------------------------------

// 1. 배열 생성
// new Array() 사용 (배열 생성자)
let arrA = new Array();

// 배열 리터럴 (대부분 사용)
let arrB = [];

// 대괄호 안에 콤마로 구분하여 저장하고 싶은 값을 넣음
// 값에 어떤 자료형이든 가능
// 길이에 제한이 없음
let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];
console.log(arrC);

// --------------------------------------------

// 2. 배열 요소 접근
// 각 원소에 번호(인덱스)로 접근
// 인덱스는 0부터 시작
let item1 = arrC[0];
let item2 = arrC[1];
console.log(item1); // 1
console.log(item2); // 2

// 특정 원소의 값 수정
arrC[0] = "one";
console.log(arrC);
