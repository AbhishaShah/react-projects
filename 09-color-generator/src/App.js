import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState('');
  const [list,setList] = useState(new Values('#008080').all(10));
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    
    try {
      const colorList = new Values(color).all();
      setList(colorList);
      setError(false);
    } catch (error) {
      setError("Invalid Color Value");
    }
  }

  return (
    <main>
      <section className="container">
      <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" 
                 name="colorInput"
                 placeholder="#008080"
                 value={color}
                 onChange={(e) => setColor(e.target.value)}
              />
              <button type="submit" className="btn">Submit</button>
        </form>
      </section>

      <section className="colors">
        {
          error ?  <span className="error">{error}</span> 
                : list.map((color,index) => {
                    return <SingleColor key={index} {...color} index={index} hexValue={color.hex} />
                }) 
                
        } 
      
      </section>
    </main>
  )
}

export default App
