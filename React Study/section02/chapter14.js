// 비동기 작업 처리하기 3. Async & Await

// async
// 함수 앞에 붙이는 키워드
// 어떤 함수를 비동기 함수로 만들어 줌
// 함수가 프로미스를 반환하도록 변환해줌

// async 를 붙이는 경우
// 반환값의 객체를 그대로 반환하는 함수가 아니라
// 이 객체를 결과 값으로 갖는 새로운 프로미스를 반환하는 함수로 변환
async function getDate() {
  return {
    name: "한주연",
    id: "on",
  };
}

console.log(getDate()); // 프로미스 객체

// PromiseState : "fulfilled"
// PromiseResult : Object
// id: "on"
// name : "한주연"

// --------------------------------------------

// async 붙은 함수가 일반적인 객체를 반환하는게 아닌
// 애초에 프로미스를 반환하는 함수였다면
// async 는 기능하지 않고(비동기 변환 안함)
// 프로미스 객체 자체를 그대로 반환함

async function getData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "한주연",
        id: "on",
      });
    }, 1500);
  });
}

console.log(getData2());

// --------------------------------------------

// await
// async 내부에서만 사용 가능한 키워드
// async는 await 키워드와 함께 사용해야 효과적
// 비동기 함수가 다 처리되기를 기다리는 역할

// 아래는 await를 사용하지 않고
// then 메서드를 사용한 방식
function printData() {
  // 프로미스에 담겨있는 결과 값을 사용
  getData2().then((result) => {
    console.log(result);
  });
}

printData();

// await를 사용 (async 키워드 없으면 오류)
async function printData2() {
  // getData2 함수가 반환하는 프로미스가 종료되길 기다림
  // 종료 후 반환된 값을 변수에 할당
  const data = await getData2;
}

printData2();
