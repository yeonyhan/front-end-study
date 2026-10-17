import { useState } from "react";
import useInput from "../hooks/useInput";

export default function HookExam() {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
    </div>
  );
}
