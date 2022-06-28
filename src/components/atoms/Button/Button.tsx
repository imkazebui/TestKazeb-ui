/* eslint-disable react/button-has-type */
import React from 'react';
import classNames from 'classnames';

export interface IButtonProps {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: string | React.ReactNode;
}

const Button: React.FC<IButtonProps> = (props) => {
  const { type = 'button', className = '', children } = props;
  return (
    <button
      type={type}
      className={classNames(
        'inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
