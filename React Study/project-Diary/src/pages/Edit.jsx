import React from "react";
import { useParams } from "react-router-dom";

function Edit() {
  const params = useParams();
  console.log(params);

  return <div>{params.id}번 일기 수정</div>;
}

export default Edit;
