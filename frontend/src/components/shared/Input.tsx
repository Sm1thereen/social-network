import React from 'react';

import {FieldError} from 'react-hook-form';
import {Simulate} from 'react-dom/test-utils';
import error = Simulate.error;

interface InputProps {
  changeCallback?: (value: string) => void;
  name?: string;
  error: FieldError | undefined;
  type?: string | InputType;
  value?: string;
  placeholder?: string;
  maxLength?: number;
  min?: number;
  max?: number;
  validationSchema?: any;
  register: (name: any) => any;
}

enum InputType {
  text = 'text',
  textArea = 'textArea',
  number = 'number',
  decimal = 'decimal',
}

const Input: React.FC<InputProps> = (props) => {
  const type =
    (props.type
      ? InputType[props.type as keyof typeof InputType]
      : undefined) ?? InputType.text;
  const Component = type === InputType.textArea ? 'textarea' : 'input';

  const renderInput = () => {
    const element = (
      <Component
        id={props.name}
        name={props.name}
        className={`input-registration ${props.error ? 'error-input' : ''}`}
        type="text"
        {...props.register(props.name)}
        placeholder={props.placeholder ?? ''}
      />
    );
    return element;
  };

  return (
    <div className={`input-wrapper ${InputType[type]}`}>
      {renderInput()}
      <div className="footer-input">
        {props.error && <p className="error-text">{props.error.message}</p>}
      </div>
    </div>
  );
};

export default Input;
