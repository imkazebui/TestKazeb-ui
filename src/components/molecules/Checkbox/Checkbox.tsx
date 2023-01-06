import React from 'react';
import classNames from 'classnames';

export interface ICheckboxProps {
  className?: string;
}

const Checkbox: React.FC<ICheckboxProps> = (props) => {
  const { className = '' } = props;
  return (
    <div className={classNames('space-y-4', className)}>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="comments"
            name="comments"
            type="checkbox"
            className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-medium text-gray-700">
            Comments
          </label>
          <span className="text-gray-500">Get notified when someones posts a comment on a posting.</span>
        </div>
      </div>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="candidates"
            name="candidates"
            type="checkbox"
            className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="candidates" className="font-medium text-gray-700">
            Candidates
          </label>
          <span className="text-gray-500">Get notified when a candidate applies for a job.</span>
        </div>
      </div>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="offers"
            name="offers"
            type="checkbox"
            className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="offers" className="font-medium text-gray-700">
            Offers
          </label>
          <span className="text-gray-500">
            Get notified when a candidate accepts or rejects an offer.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
