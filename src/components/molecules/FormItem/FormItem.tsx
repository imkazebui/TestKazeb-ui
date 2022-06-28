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
    <div className={classNames(className)}>
      <label htmlFor={name} className={classNames('block text-sm font-medium text-gray-700')}>
        {label}
      </label>
      {children}
    </div>
  );
};

export default FormItem;
