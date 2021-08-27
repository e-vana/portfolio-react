import React, { useState } from 'react';

const testFunction = () => {

  
  const [title, setTitle] = useState('Old Title');
  const clickHandler = () => {
    setTitle('This is the new title!');
  }

  return (
    <div>
      <h1>{title}</h1>
      <input type="text"></input>
      <button onClick={clickHandler}>Clicky</button>
      
    </div>
  )
}

export default testFunction;