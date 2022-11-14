import React from 'react';
// import classNames from 'classnames';
import { RadioGroup as RadioGroupUI } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import { TextEditor } from '../../atoms';

export interface IRadioGroupProps {
  // className?: string;
  selected: string | number;
  disabled?: boolean;
  options:
    | any[]
    | {
        label: string | React.ReactNode;
        value: string | number;
      }[];
  fieldNames?: {
    label: string;
    value: string;
  };
  // eslint-disable-next-line no-unused-vars
  onChange?(value: string | number): void;
  // eslint-disable-next-line no-unused-vars
  onHandleChange?(value: string | number): void;
}

const RadioGroup: React.FC<IRadioGroupProps> = (props) => {
  const {
    disabled = false,
    options,
    fieldNames = { label: 'label', value: 'value' },
    onChange,
    onHandleChange,
    selected,
  } = props;

  // if (!options.length) return null;

  const handleOnChange = (value: string): void => {
    if (onChange) {
      onChange(value);
      console.log('test', value);
    }
  };
  const HandleChange = (value: string): void => {
    if (onHandleChange) {
      onHandleChange(value);
      console.log('testtesttest', value);
    }
  };

  return (
    <div className="w-full">
      <RadioGroupUI value={selected} onChange={handleOnChange} disabled={disabled}>
        <div className="space-y-4">
          {options.map((option) => (
            <RadioGroupUI.Option
              key={option[fieldNames.value]}
              value={option[fieldNames.value]}
              className={({ active, checked }) =>
                `${active ? '' : ''}
                  ${checked ? '' : ''}
                    relative flex cursor-pointer rounded-lg px-5 py-4
                     `
              }
            >
              {({ checked }) => (
                <div className="flex w-full items-center justify-between space-x-4">
                  <div className="border rounded border-emerald-700">
                    <CheckIcon
                      className={classNames('h-5 w-5 text-emerald-700', { invisible: !checked })}
                    />
                  </div>
                  <TextEditor onHandleChange={HandleChange} />
                  {/* <div className="flex-1 items-center">{option[fieldNames.label]}</div> */}
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
