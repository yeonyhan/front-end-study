// 객체 (Object)
// 객체를 이용하면 현실세계에 존재하는 어떤 사물이나 개념을 표현하기 용이

// --------------------------------------------

// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// --------------------------------------------

// 2. 객체 프로퍼티 (객체 속성)
// 객체의 실질적인 정보를 담고 있음
// key : value 로 구성

// 프로퍼티 개수 제한 없음
// value의 자료형도 제한 없음 (함수, 객체 모두 가능)
// key 값으로는 문자열, 숫자만 가능
// key 값은 문자열이여도 따옴표 안붙여도 됨
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
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)

// 점 표기법 (object.key)
let name = person.name;
console.log(name); // 한주연(프로퍼티 값)

// 존재하지 않는 프로퍼티 값을 가져오는 경우
let name2 = person.name2;
console.log(name); // undefined

// 괄호 표기법 (object["key"])
// 반드시 프로퍼티 키를 쌍따옴표를 사용하여 문자열로 작성
let age = person["age"];
console.log(age); //30

// 쌍따옴표를 사용하지 않는 경우
// 프로퍼티 키를 변수로 판단하여 오류 발생
let age2 = person[age]; // 오류 발생

// 존재하지 않는 프로퍼티 값 가져오는 경우
let age3 = person[age2];
console.log(age3); // undefined

// 대괄호에 변수를 넣어 활용 가능
// 동적으로 프로퍼티를 변환하여 꺼내와야하는 경우 사용
let property = "hobby";
let hobby = person[property];
console.log(hobby); // 게임

// --------------------------------------------

// 3.2 새로운 프로퍼티를 추가하는 방법
// 점 표기법, 괄호 표기법 그대로 사용
person.job = "홈프로텍터";
person["favoriteFood"] = "고기";
console.log(person);

// --------------------------------------------

// 3.3 프로퍼티를 수정하는 방법
person.job = "집 경비원";
person["favoriteFood"] = "돼지고기";
console.log(person);

// --------------------------------------------

// 3.4 프로퍼티를 삭제하는 방법
// delete 연산자를 사용
// delete object.key
delete person.job;
delete person["favoriteFood"];
console.log(person);

// --------------------------------------------

// 3.5 프로퍼티의 존재 유무를 확인하는 방법
// in 연산자를 사용
// "key" in object
let result1 = "name" in person;
console.log(result1); // true
let result2 = "cat" in person;
console.log(result2); // false
