import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  const [shown, setShown] = useState(false);
  const icon = () => {
    if (shown) {
      return <AiOutlineMinus />;
    } else {
      return <AiOutlinePlus />;
    }
  };
  const showAns = () => {
    if (shown) {
      return <p>{info}</p>;
    }
  };
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShown(!shown)}>
          {icon()}
        </button>
      </header>
      {showAns()}
    </article>
  );
};

export default Question;
