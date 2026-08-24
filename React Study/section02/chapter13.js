// 비동기 작업 처리하기
// 2. Promise
// : 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 내장 객체
// SetTimeout 함수처럼 비동기 작업들을 감싸는 객체
// Promise 객체는 API 호출, 다른 서버 통신에 주로 사용됨

// Promise의 효능
// 비동기 작업 실행
// 비동기 작업 상태 관리
// 비동기 작업 결과 저장
// 비동기 작업 병렬 실행
// 비동기 작업 다시 실행

// 가장 대표적인 기능 (실행, 상태관리, 결과 저장)

// --------------------------------------------

// 비동기 작업 진행단계

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

// PromiseState : "pending" (객체 현재 상태 - 대기 상태)
// PromiseResult : undefined (결과값 - 아직 대기 상태이므로)

// --------------------------------------------

// Promise 성공하기 (resolve 호출)
// 첫번째 매개변수에 resolve, 두번째 매개변수에 reject
// resolve : 비동기 작업을 성공상태로 바꾸는 함수
// reject : 비동기 작업을 실패상태로 바꾸는 함수
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("HELLO"); // 호출 후 2초 뒤 HELLO 안녕
    resolve("안녕"); // Promise 객체를 성공 상태로 변환
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

// Promise 실패하기 (reject 호출)
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

// Promise 함수 결과값 이용하기
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

// 성공/실패했을때 그 후에 실행되는 코드

// 성공버전 (then)
// 콜백함수 매개변수로 promise의 resolve 인수 값 사용 가능
promise4.then((value) => {
  console.log(value); // 2초 뒤 20
});

// 실패버전 (catch)
// 콜백함수 매개변수로 promise의 reject 인수 값 사용 가능
promise4.catch((error) => {
  console.log(error); // 2초 뒤 num이 숫자가 아님
});

// promise.then 메서드는 프로미스 객체를 다시 그대로 반환
// promise.catch를 따로 호출할 필요없이 연결해서 작성 가능
// => Promise Chaining

promise4
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

// --------------------------------------------

// num을 인수로 받고 promise 객체를 반환
function add10(num) {
  const promise5 = new Promise((resolve, reject) => {
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

// 비동기 작업의 결과를 내부에 한번 더 전달
// 하지만 이 방법은 콜백지옥 발생
const p = add10(0);
p.then((result) => {
  console.log(result); // 10

  const newP = add10(result);
  newP.then((result) => {
    console.log(result); // 20
  });
});

// 콜백지옥 방지하는 방법
const p2 = add10(0);
p2.then((result) => {
  console.log(result);

  const newP2 = add10(result);

  // 새 프로미스 객체를 반환하면
  // then 메서드의 호출(p2.then)의 결과값이 됨
  return newP2;

  // 반환된 newP2 값에 then 작성
}).then((result) => {
  console.log(result); // 20
});

//코드를 간결하게 개선
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
    console.log(error); // num이 숫자가 아님
  });
