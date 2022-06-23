import React from 'react';
import classNames from 'classnames';

interface IIputProps {
  type?:
    | 'text'
    | 'email'
    | 'url'
    | 'password'
    | 'number'
    | 'date'
    | 'datetime-local'
    | 'month'
    | 'search'
    | 'tel'
    | 'time'
    | 'week';
  className?: string;
}

const Input: React.FC<IIputProps> = (props) => {
  const { type = 'text', className = '' } = props;
  return (
    <input
      type={type}
      className={classNames(
        'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50',
        className
      )}
    />
  );
};

export default Input;
