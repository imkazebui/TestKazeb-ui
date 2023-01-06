import React from 'react';
// import classNames from 'classnames';
import { RadioGroup as RadioGroupUI } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import { TextEditor } from '../../atoms';

export interface IRadioGroupProps {
  selected: string | number;
  disabled?: boolean;
  noEdit?: boolean;
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
    noEdit = false,
  } = props;

  // if (!options.length) return null;

  const handleOnChange = (value: string): void => {
    if (onChange) {
      onChange(value);
    }
  };
  const HandleChange = (value: string): void => {
    if (onHandleChange) {
      onHandleChange(value);
    }
  };

  return (
    <div className="w-full">
      <RadioGroupUI value={selected} onChange={handleOnChange} disabled={disabled}>
        <div className="space-y-4">
          {options.map((option) => (
            <div
              key={`${option[fieldNames.value]}_a`}
              className="flex"
            >
              <RadioGroupUI.Option
                key={option[fieldNames.value]}
                value={option[fieldNames.value]}
                className={({ active, checked }) =>
                  `${active ? '' : ''}
                  ${checked && noEdit ? 'border-solid border-2 border-gray-200 w-full bg-emerald-600' : ''}
                  ${noEdit && 'border-solid border-2 border-gray-200 w-full'}
                    relative flex cursor-pointer rounded-lg px-5 py-4
                     `
                }
              >
                {({ checked }) => (
                  <div>
                    { noEdit ? (
                      <div className="flex w-full col-span-12 items-center justify-between space-x-4 border-emerald-700">
                        <div className="border rounded border-white rounded-2xl">
                          <CheckIcon
                            className={classNames('h-7 w-7 text-white')}
                          />
                        </div>
                        <div className="flex-1 items-center">{option[fieldNames.label]}</div>
                      </div>
                    ) : (
                      <div className="flex col-span-2 items-center justify-between space-x-4">
                        <div className="border rounded border-emerald-700 rounded-2xl">
                          <CheckIcon
                            className={classNames('h-5 w-5 text-emerald-700', { invisible: !checked })}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </RadioGroupUI.Option>
              { !noEdit && (
              <div className="col-span-10">
                <TextEditor placeHolder="Choose" onHandleChange={HandleChange} />
              </div>
              )}
            </div>
          ))}
        </div>
      </RadioGroupUI>
    </div>
  );
};

export default RadioGroup;
