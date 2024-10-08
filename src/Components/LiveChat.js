import React, { useEffect, useState } from "react";
import Message from "./Message";

const LiveChat = () => {
  const [message, setMessage] = useState([
    { name: "nishant", message: "Bhaio ram ram" },
  ]);
  const [c, setC] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setC((prev) => {
        let h = prev + 1;
        message.unshift({
          name: "Anuj kaushik1",
          message: "Best world kaushik saabh" + h,
        });
        message.splice(5, 1);

        return h;
      });

      setMessage([...message]);
    }, 500);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full h-full border-2 border-black mx-2 p-2 flex flex-col-reverse overflow-y-scroll">
      {message?.map(({ name, message } = {}, key) => (
        <Message message={message} name={name} key={key} />
      ))}
    </div>
  );
};

export default LiveChat;
