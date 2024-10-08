import React from "react";

const Message = ({name = 'Anuj Kaushik', message = 'Hello world anuj kaushik'}) => {
  return (
    <div className="flex w-full text-center my-0.5">
      <img
        className={`h-8 ml-0.5`}
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />

      <h1 className="font-semibold mx-1 my-0.5">{name}</h1>
      <span className="inline-block break-words my-0.5">
        {message}
      </span>
    </div>
  );
};

export default Message;
