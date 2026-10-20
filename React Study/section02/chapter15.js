// 객체 (Object)
// 다양한 정보를 하나의 값으로 저장

// --------------------------------------------

// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자 방식
let obj2 = {}; // 객체 리터럴 방식 (대부분 사용)

// --------------------------------------------

// 2. 객체 프로퍼티 (객체 속성)
// key : value 로 구성

// 프로퍼티 개수 제한 없음
// value의 타입 제한 없음 (함수, 객체 모두 가능)
// key 값으로는 문자열, 숫자만 가능
// key 값의 문자열은 따옴표 안붙여도 됨
// 예외적으로 key 값에 띄어쓰기가 있는 경우 따옴표 사용
let person = {
  name: "한주연",
  age: 30,
  hobby: "게임",
  10: 20,
  "Like cat": true,
};

// --------------------------------------------

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근

// 3.1.1 점 표기법
// object.key
console.log(person.name); // 한주연

// 존재하지 않는 프로퍼티 값을 가져오는 경우
console.log(person.name2); // undefined

// 3.1.2 괄호 표기법
// object["key"]
// 반드시 프로퍼티 키에 쌍따옴표를 사용
console.log(person["age"]); //30

// 쌍따옴표를 사용하지 않는 경우
// 프로퍼티 키를 변수로 판단하여 오류 발생
// console.log(person[age]); // 오류 발생

// 존재하지 않는 프로퍼티 값 가져오는 경우
console.log(person["age2"]); // undefined

// 변수에 접근하려는 키 값을 담을 수 있음
// -> 동적으로 프로퍼티를 변화시키면서 사용해야할 때 주로 이용
let property = "hobby"; // 찾고싶은 항목의 이름을 적음
let hobby = person[property];
console.log(hobby); // 게임

// --------------------------------------------

// 3.2 새로운 프로퍼티를 추가
// 존재하지 않는 프로퍼티인 경우 추가
person.job = "홈프로텍터";
person["favoriteFood"] = "고기";
console.log(person);

// --------------------------------------------

// 3.3 프로퍼티를 수정
// 존재하는 프로퍼티인 경우 수정
person.job = "집 경비원";
person["favoriteFood"] = "돼지고기";
console.log(person);

// --------------------------------------------

// 3.4 프로퍼티를 삭제
// delete 연산자
delete person.job;
delete person["favoriteFood"];
console.log(person);

// --------------------------------------------

// 3.5 프로퍼티의 존재 유무를 확인
// in 연산자
let result1 = "name" in person;
console.log(result1); // true
let result2 = "cat" in person;
console.log(result2); // false
