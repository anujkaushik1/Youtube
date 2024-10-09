import React, { useMemo, useRef, useState } from "react";
import { getPrime } from "../utils/constants";

const Demo = () => {
  const [i, setI] = useState(0);
  const [to, setTo] = useState(false);

  const primeFunction = function(){
    return getPrime(i);
  }

  const memoPrime = useMemo(primeFunction, [i]);

  const ref = useRef(0);

//   const primeNo = getPrime(i);

  console.log('rendering = ');
  
  let count1 = 0;
  return (
    <div className={`w-full`}>
      {/* <div className="h-96 w-1/2">
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
      </div> */}


<button className="p-2 bg-red-400" onClick={() => setTo(!to)}>
          Toggle
        </button>

        <h1>h</h1>
    
    <button className="p-2 bg-red-400" onClick={() => {count1++; console.log('counter val= ', count1);
    }}>
          Click 1 for let
        </button>

        <h1> hey</h1>

        <button className="p-2 bg-red-400" onClick={() => {ref.current = ref.current + 10}}>
          Click 2 for useref
        </button>

        <h1>{ref.current}</h1>

    </div>
  );
};

export default Demo;
