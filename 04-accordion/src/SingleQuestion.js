import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
const SingleQuestion = ({title, info}) => {

  const [showinfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={()=> setShowInfo(!showinfo)}>
          { showinfo ?  <FaMinus />  : <FaPlus /> }
        </button>
      </header>
      { showinfo && <p className="info">{info}</p> }
    </article>
  )
};

export default SingleQuestion;
