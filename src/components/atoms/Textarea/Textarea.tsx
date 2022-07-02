import React from 'react';
import classNames from 'classnames';

export interface ITextareaProps {
  name: string;
  className?: string;
  id?: string;
  rows?: number;
  placeholder?: string;
}

const Textarea: React.FC<ITextareaProps> = (props) => {
  const { name, className = '', rows = 3, id = 'textarea', placeholder = '' } = props;
  return (
    <textarea
      id={id || name}
      name={name}
      rows={rows}
      className={classNames(
        'shadow-sm focus:ring-emerald-500 focus:border-emerald-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md',
        className
      )}
      placeholder={placeholder}
    />
  );
};

export default Textarea;
