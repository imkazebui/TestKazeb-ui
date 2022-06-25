import React, { useEffect, useState } from 'react';
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
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (newValue: string) => void;
}

const Input: React.FC<IIputProps> = (props) => {
  const { type = 'text', className = '', value = '', onChange } = props;

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(inputValue);
  }, [value]);

  const handleChangeValue = (e: React.FormEvent<HTMLInputElement>): void => {
    const newValue = e.currentTarget.value;
    setInputValue(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <input
      type={type}
      value={value}
      onChange={handleChangeValue}
      className={classNames(
        'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50',
        className
      )}
    />
  );
};

export default Input;
