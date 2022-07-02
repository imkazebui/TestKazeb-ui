import React, { useState } from 'react';
// import classNames from 'classnames';
import { RadioGroup as RadioGroupUI } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/outline';
import classNames from 'classnames';

export interface IRadioGroupProps {
  // className?: string;
  disabled?: boolean;
  options: {
    label: string | React.ReactNode;
    value: string | number;
  }[];
}

const RadioGroup: React.FC<IRadioGroupProps> = (props) => {
  const { disabled = false, options } = props;

  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="w-full">
      <RadioGroupUI value={selected} onChange={setSelected} disabled={disabled}>
        <div className="space-y-2">
          {options.map((option) => (
            <RadioGroupUI.Option
              key={option.value}
              value={option.value}
              className={({ active, checked }) =>
                `${active ? '' : ''}
                  ${checked ? '' : ''}
                    relative flex cursor-pointer rounded-lg px-5 py-4
                     focus:border-emerald-700 border border-gray-300
                     hover:border-emerald-700`
              }
            >
              {({ checked }) => (
                <div className="flex w-full items-center justify-between space-x-4">
                  <div className="border rounded border-emerald-700">
                    <CheckIcon
                      className={classNames('h-5 w-5 text-emerald-700', { invisible: !checked })}
                    />
                  </div>
                  <div className="flex-1 items-center">{option.label}</div>
                </div>
              )}
            </RadioGroupUI.Option>
          ))}
        </div>
      </RadioGroupUI>
    </div>
  );
};

export default RadioGroup;
