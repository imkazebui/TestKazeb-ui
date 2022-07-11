/* eslint-disable react/button-has-type */
import React from 'react';
import classNames from 'classnames';

export interface IButtonProps {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: string | React.ReactNode;
  // eslint-disable-next-line no-unused-vars
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IButtonProps> = (props) => {
  const { type = 'button', className = '', children, onClick } = props;

  const handleClick = (e?: React.MouseEvent<HTMLButtonElement>): void => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      className={classNames(
        'inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500',
        className
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
