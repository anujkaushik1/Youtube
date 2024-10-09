import React, { useEffect, useMemo, useRef, useState } from "react";
import { getPrime } from "../utils/constants";

const Demo = () => {
  const [i, seti] = useState(false);
  let id = useRef(null);
  useEffect(() => {
    id.current = setInterval(() => {
      console.log("renderrrrrrrrrrrrr" + Math.random());
    }, 500);
  }, []);

  return (
    <div className={`w-full`}>
      <button onClick={() => seti(!i)} className="bg-[red] p-2">
        click me
      </button>

      <h1>SSSS</h1>

      <button onClick={() => clearInterval(id.current)} className="bg-[red] p-2">
        Stop Me
      </button>
    </div>
  );
};

export default Demo;
