import React from 'react';
import classNames from 'classnames';

export interface IRadioInputProps {
  className?: string;
}

const RadioInput: React.FC<IRadioInputProps> = (props) => {
  const { className = '' } = props;
  return (
    <div className={classNames('space-y-4', className)}>
      <div className="flex items-center">
        <input
          id="push-everything"
          name="push-notifications"
          type="radio"
          className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300"
        />
        <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
          Everything
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="push-email"
          name="push-notifications"
          type="radio"
          className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300"
        />
        <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
          Same as email
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="push-nothing"
          name="push-notifications"
          type="radio"
          className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300"
        />
        <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
          No push notifications
        </label>
      </div>
    </div>
  );
};

export default RadioInput;
