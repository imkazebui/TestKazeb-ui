import React from 'react';
import classNames from 'classnames';

interface ISelectProps {
  name: string;
  className?: string;
  id?: string;
  autoComplete?: string;
}

const Select: React.FC<ISelectProps> = (props) => {
  const { name, className = '', id = '', autoComplete = '' } = props;
  return (
    <select
      id={id || name}
      name={name}
      autoComplete={autoComplete}
      className={classNames(
        'mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
        className
      )}
    >
      <option>United States</option>
      <option>Canada</option>
      <option>Mexico</option>
    </select>
  );
};

export default Select;
