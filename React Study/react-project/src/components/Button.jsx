// 이벤트 객체 확인

const Button = ({ text }) => {
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };
  return <button onClick={onClickButton}>{text}</button>;
};

export default Button;
