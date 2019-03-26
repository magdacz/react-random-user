import React from 'react';
import './Button.css';

const Button = (props) => {
   return (
       <button onClick={props.click}>Dodaj użytkownika</button>
   ) 
}

export default Button;
