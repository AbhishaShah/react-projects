import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let paraCount = parseInt(count);
    if(count <= 0){
      paraCount = 1;
    }
    if(count > data.length){
      paraCount = data.length;
    }
    setText(data.slice(0,paraCount));
  }
  return (
    <section className="section-center">
      <h4>TIRED OF BORING LOREM IPSUM?</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor="numberInput">
        Paragraphs:
      </label>
      <input type="number" 
             id="numberInput" 
             name="numberInput" 
             value={count} 
             onChange={(e) => setCount(e.target.value)} />
      <button type="submit" className="btn">Generate</button>
      </form> 
      <article className='lorem-text'>
        {text.map((item,index) => {
          return <p key={index}>{item}</p>
        })}
        </article>
    </section>
    )
}

export default App;
