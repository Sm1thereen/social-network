import React from 'react';
import './style.css';

export interface ButtonProps {
  text?: string;
  onClick?: () => void;
  style?: string;
  width?: number;
  height?: number;
  padding?: string;

}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className={`${props.style}`} onClick={props.onClick}
            style={{width: props.width, height: props.height, padding: props.padding}}>
      {props.text}
    </button>
  );
};

export default Button;