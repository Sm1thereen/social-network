import React from 'react';
import './style.css';
import {ButtonProps} from '../../interfaces/interfaces';


const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className={`${props.style}`} onClick={props.onClick}
            style={{width: props.width, height: props.height, padding: props.padding}} type={props.type}>
      {props.text}
    </button>
  );
};

export default Button;