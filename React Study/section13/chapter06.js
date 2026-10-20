// 폰트, 이미지, 레이아웃 설정

// 폰트 설정
// public 폴더 > 폰트 파일(.ttf) 넣기
// index.css 에서 폰트 불러오기

```
// index.css
@font-face {
  font-family: "NanumPenScript";
  src: url("/NanumPenScript-Regular.ttf");
}

body * {
  font-family: "NanumPenScript";
}
```;

// --------------------------------------------

// 이미지 설정
// assets 폴더 > 이미지 파일 넣기
// img 태그를 사용하여 이미지 불러오기
```
// App.jsx
import emotion1 from "./assets/emotion1.png";
import emotion2 from "./assets/emotion2.png";
import emotion3 from "./assets/emotion3.png";
import emotion4 from "./assets/emotion4.png";
import emotion5 from "./assets/emotion5.png";

return (
    <div>
        <img src={emotion1} />
        <img src={emotion2} />
        <img src={emotion3} />
        <img src={emotion4} />
        <img src={emotion5} />
    </div>
)
```
// 이미지파일을 assets 폴더에 넣은 이유?
// vite가 내부적으로 진행하는 이미지 최적화 설정 때문
// 최적화된 이미지는 src가 암호문 포맷처럼 설정되는데 (Data URI)
// 이미지 같은 외부 데이터를 문자열 형태로 브라우저 메모리에 캐싱하기 위함
// 캐싱(저장)이 되면 새로고침 하더라도 다시 불러오지 않도록 최적화됨

// 만약 불러올 이미지 파일이 매우 많아지는 경우
// 모든 이미지를 메모리에 캐싱하면 용량의 과부화

// 이미지가 매우 많거나 최적화가 필요없는 경우
// public 폴더에 넣고 public 폴더로 불러올경우 url로 불러오도록 설정
```
<img src={"/emotion1.png"}/>
```;

// --------------------------------------------

// 매번 컴포넌트 내에서 이미지를 import 하지않도록 별도의 모듈로 분리
// src > util 폴더 > get-emotion-image.js
// 이미지의 번호를 기준으로 반환해주는 함수 작성
```
// get-emotion-image.js
import emotion1 from "./../assets/emotion1.png";
import emotion2 from "./../assets/emotion2.png";
import emotion3 from "./../assets/emotion3.png";
import emotion4 from "./../assets/emotion4.png";
import emotion5 from "./../assets/emotion5.png";

export function getEmotionImage(emotionId) {
  switch (emotionId) {
    case 1:
      return emotion1;
    case 2:
      return emotion2;
    case 3:
      return emotion3;
    case 4:
      return emotion4;
    case 5:
      return emotion5;
    default:
      return null;
  }
}
```;

// getEmotionImage 함수 사용하기
```
// App.jsx
return(
    <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
    </div>
)
```;
