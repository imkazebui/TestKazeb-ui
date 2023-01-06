import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { FormItem, RadioGroup } from 'components/molecules';
import { TrashIcon } from '@heroicons/react/outline';
import { Button } from 'components/atoms';

interface Props {
}
const CustomAccordion = styled(AccordionSummary)(() => ({
  '.MuiAccordionSummary-content': {
    justifyContent: 'space-between',
  },
}));

const defaultValues = {
  _id: 1,
  title: 'Example 1',
  question: 'What is React ?',
  options: [],
  answer: 2,
};

const Dropdown: React.FC<Props> = (props) => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [options, setOptions] = useState<{
    label: string | React.ReactNode;
    value: string | number;
  }[]>(defaultValues.options);
  useEffect(() => {
    const newOptions = Array.from(Array(4).keys()).map((o) => ({
      value: o,
      label: '<TextEditor />',
    }));
    setOptions(newOptions);
  }, []);
  return (
    <div>
      <Accordion>
        <CustomAccordion expandIcon={<ExpandMoreIcon />}>
          <span>{formValues.title}</span>
        </CustomAccordion>
        <AccordionDetails>
          <div className="grid grid-cols-12 gap-8 sm:p-6 px-4 ">
            <div className="col-span-6 flex flex-col justify-between">
              <span>{formValues.question}</span>
              <Button className="w-1/4 text-white" type="button">Remove<TrashIcon className="h-5 w-5 text-white ml-2" /></Button>
            </div>
            <FormItem name="questionOptions" label="Select only one" className="col-span-6">
              <RadioGroup
                options={options}
                selected={formValues.answer}
                noEdit
              />
            </FormItem>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Dropdown;
