import React from 'react';
import classNames from 'classnames';

interface IFormItemProps {
  label?: string;
  name?: string;
  className?: string;
  children: React.ReactNode;
}

const FormItem: React.FC<IFormItemProps> = (props) => {
  const { label = '', name = '', className = '', children } = props;
  return (
    <label htmlFor={name} className={classNames('block', className)}>
      <span className="text-gray-700">{label}</span>
      {children}
    </label>
  );
};

export default FormItem;
