// 비동기 작업 처리하기
// 3. Async & Await

// async
// 함수 앞에 키워드를 붙여서 비동기 함수로 변환
// 함수가 프로미스를 반환할 수 있게됨

// 반환값의 객체를 그대로 반환하는 함수가 아니라
// 객체를 결과 값으로 갖는 새로운 프로미스를 반환하는 함수로 변환
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

// 만약 프로미스를 반환하는 함수에 async 사용시
// 비동기 함수로 변환 안하고 프로미스 객체 자체를 그대로 반환함
// => 프로미스를 반환하지 않는 함수에 async를 사용해야 기능 정상작동

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

// await를 사용하지 않은 경우
// then 메서드를 사용
function printData() {
  // 프로미스에 담겨있는 결과 값을 사용
  getData2().then((result) => {
    console.log(result);
  });
}

printData(); // {name: '한주연', id: 'on'}

// await를 사용하는 경우
// async 키워드 없으면 오류 발생
async function printData2() {
  // getData2 함수가 반환하는 프로미스가 종료되길 기다리다가
  // 종료 후 반환된 값을 변수에 할당
  const data = await getData2();
  console.log(data);
}

printData2(); // {name: '한주연', id: 'on'}
