import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

export interface IIputProps {
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
  name: string;
  id?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (newValue: string) => void;
}

const Input: React.FC<IIputProps> = (props) => {
  const { name, id = '', type = 'text', className = '', value = '', onChange } = props;

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value;
    setInputValue(newValue);
    /**
     * TODO: need to add debounce
     */
    if (onChange) onChange(newValue);
  };

  return (
    <input
      id={id || name}
      name={name}
      type={type}
      value={inputValue}
      onChange={handleChangeValue}
      className={classNames(
        'focus:ring-emerald-700 focus:border-emerald-700 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md',
        className
      )}
    />
  );
};

export default Input;
