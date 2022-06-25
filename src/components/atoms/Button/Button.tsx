/* eslint-disable react/button-has-type */
import React from 'react';
import classNames from 'classnames';

interface IButtonProps {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = (props) => {
  const { type = 'button', className = '', children } = props;
  console.log('cd');
  return (
    <button
      type={type}
      className={classNames(
        'py-2 px-3 bg-blue-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-blue-500/50 focus:outline-none',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
