import React from 'react';
import classNames from 'classnames';
import { ClipboardCopyIcon } from '@heroicons/react/outline';
import { Dropdown } from '../index';

export interface IRadioInputProps {
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const StepperTable: React.FC<IRadioInputProps> = (props) => {
  const { className = '', onClick } = props;
  const handleClick = (e?: React.MouseEvent<HTMLButtonElement>): void => {
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <div className={classNames('space-y-4', className)}>
      <span>Create custom question from scratch...</span>
      <div className="grid grid-cols-8 sm:p-6 px-4 justify-items-center">
        <button aria-label="scratch" onClick={handleClick} type="button" className="relative flex flex-col items-center justify-center col-span-2 w-44 h-28 bg-slate-100 border hover:bg-cyan-500 hover:rounded-xl hover:text-white">
          <ClipboardCopyIcon className="w-8 h-8" />
          <span className="text-sm mt-2 font-medium">Multiple-Choice</span>
          <div style={{ clipPath: 'polygon(0 0,40% 0,100% 60%,100% 100%)' }} className="bg-cyan-800 absolute top-0 right-0 h-16 w-16">
            <div className="flex justify-center absolute rotate-45 text-xs top-0 right-0 h-16 w-16">
              <span className="text-xs mt-4 text-white">Main</span>
            </div>
          </div>
        </button>
      </div>
      <div>
        <table className={classNames('border-collapse table-auto w-full text-sm bg-white', className)}>
          <thead>
            <tr>
              {['Type', 'Time', 'Question'].map((item) => (
                <th key={item} colSpan={2} className="border-b p-4 pl-8 pb-3 text-xl text-sm font-semibold text-left">{item}</th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            <tr
              className="hover:cursor-pointer"
            >
              <td colSpan={12}>
                <Dropdown />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StepperTable;
