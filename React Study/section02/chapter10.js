// Date 객체와 날짜

// 1. Date 객체를 생성하는 방법
// new 키워드와 함께 내장함수 Date (생성자)를 호출
// new 키워드와 함께 새로운 객체를 생성하는 함수를 생성자라 부름

// 함수에 아무런 인수도 넣지않으면
// 현재 지금 시간을 저장하는 객체를 생성
let date1 = new Date();
console.log(date1); // Tue Jan 16 2024 22:10:34 GMT+0900 (한국 표준시)

// 특정시간을 기준으로 생성하려는 경우
// 생성자 함수 인수에 특정날짜를 넣음

// 인수의 날짜는 대시(-), 점과 띄어쓰기(. ), 슬래시(/)를 사용해도됨
// 보통 점과 띄어쓰기 또는 슬래시를 많이 사용하나 편한 방식을 택
let date2 = new Date("1997-01-07");
console.log(date2); // Tue Jan 07 1997 09:00:00 GMT+0900 (한국 표준시)

// 날짜에 시간까지 설정하려면
let date3 = new Date("1997/01/07/10:10:10");
console.log(date3); // Tue Jan 07 1997 10:10:10 GMT+0900 (한국 표준시)

// 콤마로 구분해서 생성하는 방법
let date4 = new Date(1997, 1, 7, 23, 59, 59);
console.log(date4); // Fri Feb 07 1997 23:59:59 GMT+0900 (한국 표준시)

// --------------------------------------------

// 2. 타임스탬프
// 특정시간이 "1970.01.01 00시 00분 00초"로 부터
// 몇 ms가 지났는지를 의미하는 숫자값
// 복잡한 시간 정보를 숫자로 관리하기 때문에 자주 사용됨

// 타임스탬프의 기준되는 시간을 UTC(협정 세계시)라 부름
// 세계 모든 나라가 표준으로 사용하는 시간이 시작되는 기준

let ts1 = date1.getTime();
console.log("ts1"); // 170541115293

// 새로운 데이트 객체를 생성할 때도 이용
// 인수로 타임스탬프값을 전달
let date5 = new Date(ts1);
console.log(date1, date5); // 둘다 같은 날짜

// --------------------------------------------

// 3. 시간 요소를 추출하는 방법

// 년도, 월, 일
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate;

// 시, 분, 초
let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();

console.log(year, month, date, hour, minute, second);

// 주의할 점
// 자바스크립트에서 월은 0부터 시작하기 때문에
// 1월: 0, 2월: 1, 3월: 2
// => getMonth() + 1 을 해야함

// --------------------------------------------

// 4. 시간 수정
// 메서드를 호출하고 인수로 수정하고 싶은 값 전달

// 년도, 월, 일
date1.setFullYear(2024);
date1.setMonth(11); // 실제로는 12월
date1.setDate(30);

// 시, 분, 초
date1.setMinutes(10);
date1.setMinutes(20);
date1.setSeconds(30);

console.log(date1);

// --------------------------------------------

// 5. 시간을 여러 포맷으로 출력하기

// 현재 날짜만 출력하고 싶다면
console.log(date1.toDateString()); // Tue Mar 30 2023

// 한국식 날짜 표기
console.log(date1.toLocaleString()); // 2023. 3. 30. 오후 11:59:59
