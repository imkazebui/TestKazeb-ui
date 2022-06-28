import React from 'react';
import classNames from 'classnames';

interface ICheckboxProps {
  className?: string;
}

const Checkbox: React.FC<ICheckboxProps> = (props) => {
  const { className = '' } = props;
  return (
    <div className={classNames('mt-4 space-y-4', className)}>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="comments"
            name="comments"
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-medium text-gray-700">
            Comments
          </label>
          <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
        </div>
      </div>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="candidates"
            name="candidates"
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="candidates" className="font-medium text-gray-700">
            Candidates
          </label>
          <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
        </div>
      </div>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="offers"
            name="offers"
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="offers" className="font-medium text-gray-700">
            Offers
          </label>
          <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
