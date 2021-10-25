import React, { useState, useEffect } from 'react'

const SingleColor = ({rgb,weight,index,hexValue}) => {
  const [alert, setAlert] = useState(false);
  const rgbValues = rgb.join(",");
  const hex = `#${hexValue}`;

  useEffect(() => {
      const timeOut = setTimeout(() => {
        setAlert(false);
      },3000);

      return () => clearInterval(timeOut);
  },[alert]);

  return (
    <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor:`rgb(${rgbValues})`}}>
        <button type="button" 
                className="btn-small" 
                onClick={()=> { 
                    setAlert(true)
                    navigator.clipboard.writeText(hex)
                   } 
                  } >
                  {alert ? "copied to clipboard" : "copy"}
              </button>
        <p className="percent-value">{weight}%</p>
        <p className="color-value">{hex}</p>
    </article>
  )
}

export default SingleColor
