import React, { useEffect } from "react";

export default function Even({ count }) {
  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <div>
      <div>짝수 입니다</div>
    </div>
  );
}
