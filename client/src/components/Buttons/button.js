import React from 'react'
import './button.css';

function Button(){
  

  return(
    <div className='one'>
      <div className='ip'>
        <input type="file" name="file_upload"/>
        </div>
      
      
        <button>Insert File</button>
  
      
        <button type='submit'>BUILD</button>
      
      
    </div>

  );
}

export default Button;