import React from "react";
import { useSearchParams } from "react-router-dom";

function Home() {
  const [params, setParams] = useSearchParams();
  console.log(params.get("search"));

  return <div>Home</div>;
}

export default Home;
