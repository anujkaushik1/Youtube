import React, { useMemo, useState } from "react";
import { getPrime } from "../utils/constants";

const Demo = () => {
  const [i, setI] = useState(0);
  const [to, setTo] = useState(false);

  const primeFunction = function(){
    return getPrime(i);
  }

  const memoPrime = useMemo(primeFunction, [i]);

//   const primeNo = getPrime(i);

  console.log('rendering = ', memoPrime);
  

  return (
    <div className={`w-full ${to && "bg-gray-400"}`}>
      <div className="h-96 w-1/2">
        <input
          type="number"
          className="w-28 border-2 border-black m-10"
          value={i}
          onChange={(e) => setI(e.target.value)}
        ></input>

        <h1 className="font-bold text-lg">{memoPrime}</h1>

        <button className="p-2 bg-red-400" onClick={() => setTo(!to)}>
          Toggle
        </button>
      </div>
    </div>
  );
};

export default Demo;
