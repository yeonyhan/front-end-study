// 비동기 작업 처리하기 2. Promise
// Promise 란?
// 비동기 작업을 효율적으로 처리할 수 있도록
// 도와주는 자바크스크립트의 내장 객체
// SetTimeout 함수와 같은 비동기 작업들을 랩핑(감싸는)하는 객체

// Promise의 효능
// 비동기 작업 실행
// 비동기 작업 상태 관리
// 비동기 작업 결과 저장
// 비동기 작업 병렬 실행
// 비동기 작업 다시 실행

// 가장 대표적인 기능 (실행, 상태관리, 결과 저장)

// --------------------------------------------

// Promise는 비동기 작업을 진행단계에 따라 3가지로 나눔
// 대기, 성공, 거부

// 1. 대기(Pending)
// 아직 작업이 완료되지 않은 상태 (비동기 작업 진행중)

// 2. 성공 (Fulfilled)
// 비동기 작업이 성공적으로 마무리된 상태

// 3. 실패 (Rejected)
// 비동기 작업이 실패한 상태 (네트워크 오류, 코드 오류 등)

// 해결(resolve)
// 대기 상태 -> 성공 상태

// 거부 (reject)
// 대기 상태 -> 실패 상태

// --------------------------------------------

// 생성자를 이용하여 promise 생성
// 생성자의 인수로 비동기 작업을 진행할 콜백함수를 입력
const promise = new Promise(() => {
  // 비동기 작업을 실행하는 함수
  // executor (집행자) 함수

  setTimeout(() => {
    console.log("HI");
  }, 2000);
});

console.log(promise); // Promise 객체 표시 후 2초뒤 HI

// promise 객체
// Prototype : Promise
// PromiseState : "pending" (객체 현재 상태 - 대기 상태)
// PromiseResult : undefined (결과값 - 아직 대기 상태이므로)

// --------------------------------------------

// Promise 성공적으로 완료하기
// Promise 콜백함수 인수에
// 첫번쨰 인수 resolve, 두번째 인수 reject 매개변수 전달
// 첫번째 매개변수에는 비동기 작업을 성공적 상태로 바꾸는 함수
// 두번째 매개변수에는 비동기 작업을 실패상태로 바꾸는 함수
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("HELLO"); // 호출 후 2초 뒤 HELLO 안녕
    resolve("안녕"); // Promise 객체를 성공 상태(Fulfilled)로 변환
  }, 2000);
});

setTimeout(() => {
  // 호출 후 3초 뒤 promise2 객체 (HELLO 안녕과 1초 차이)
  console.log(promise2);
}, 3000);

// promise2 객체
// PromiseState : "fulfilled" (객체 현재 상태 - 성공 상태)
// PromiseResult : "안녕" (결과값 - resolve 함수에 인수로 전달된 값)

// --------------------------------------------

// Promise 실패하기
// 두번째 인수인 reject 호출
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("HELLO");
    reject("오류난 이유"); // 에러 콘솔
  }, 2000);
});

setTimeout(() => {
  console.log(promise3);
}, 3000);

// promise3 객체
// PromiseState : "rejected" (객체 현재 상태 - 실패 상태)
// PromiseResult : "오류난 이유" (결과값 - resolve 함수에 인수로 전달된 값)

// --------------------------------------------

// Promise 함수 이용하기
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = 10;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아님");
    }
  }, 2000);
});

// then 메서드 (그 후에)
// then 인수에 성공/실패 후 실행될 코드를 콜백함수로 넣고
// 콜백함수 매개변수로 promise의 resolve 인수 값을 받아옴

// then 성공버전
promise4.then((value) => {
  // 2초 뒤 20
  console.log(value);
});

// then 실패버전
promise4.catch((error) => {
  // num이 숫자가 아닌 경우 "num이 숫자가 아님"
  console.log(error);
});

// promise.then 메서드는 프로미스 객체를 그대로 반환하기 때문에
// (promise4와 promise4.then의 전체코드 둘다 promise4 객체)
// promise.then과 promise.catch를 따로 호출할 필요없이
// promise.then의 끝에 .catch로 연결해서 작성해도 됨
// => Promise Chaining

promise4
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

// --------------------------------------------

// 비동기 작업을 고정된 값이 아닌
// 함수 안에서 프로미스 객체를 새로 생성하면서
// 동적으로 매개변수로 받아서 숫자 값을 바꿔가면서 사용하도록 개선

// num을 인수로 받고 promise 객체 자체를 반환
function add10(num) {
  const promise5 = new Promise(() => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아님");
      }
    }, 2000);
  });

  return promise5;
}

// 함수 호출(인수 전달)하면
// 함수 내부에서 새로운 프로미스 객체가 생성되면서
// 비동기 작업이 실행되고
// 해당하는 프로미스 객체가 반환되고 이를 변수에 할당
const p = add10(0);
p.then((result) => {
  console.log(result); // 10

  // 내부에서 한번 더 함수 호출시
  // 새로운 객체를 또 반환
  const newP = add10(result);
  newP.then((result) => {
    console.log(result); // 20
  });
});

// 하지만 위 방법은 콜백지옥으로 비효율적
// 콜백지옥을 방지하기 위해
const p2 = add10(0);
p2.then(() => {
  console.log(result);

  // 내부에서 새로운 프로미스 객체 한번 더 생성
  const newP2 = add10(result);

  // 아무것도 반환하지 않으면
  // p2.then의 결과값은 원본(p2) 프로미스 객체과 동일하지만
  // 새 프로미스 객체 newP2 를 반환하게 하면
  // newP2가 then 메서드의 호출(p2.then)의 결과값이 됨
  return newP2;

  // 따라서 반환된 newP2 값에 연결해서 then을 작성
}).then((result) => {
  console.log(result); // 20
});

//코드를 더 간결하게
const p3 = add10(0);
p3.then((result) => {
  console.log(result); // 10
  return add10(result);
})
  .then((result) => {
    console.log(result); // 20
    return add10(result);
  })
  .then((result) => {
    console.log(result); // 30
  })
  .catch((error) => {
    console.log(error);
  });
