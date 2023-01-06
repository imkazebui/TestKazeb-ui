import React from 'react';
import classNames from 'classnames';

export interface IFormItemProps {
  label?: string;
  name?: string;
  className?: string;
  children: React.ReactNode;
}

const FormItem: React.FC<IFormItemProps> = (props) => {
  const { label = '', name = '', className = '', children } = props;
  return (
    <div className={classNames(className)}>
      <label htmlFor={name} className={classNames('mb-2 block text-base font-medium text-gray-700 font-bold')}>
        {label}
      </label>
      {children}
    </div>
  );
};

export default FormItem;
