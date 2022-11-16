import React, { useState } from 'react';
import { Input } from 'components/atoms';
import { FormItem } from 'components/molecules';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline';
import { useHandleFilter } from 'hooks/useFilter';
import Tooltips from 'components/atoms/Tooltips';
import { Modal, QuestionForm, StepperTable, StepperItem } from 'components/organisms';

interface IQuestionForm {
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const QuestionNew: React.FC<IQuestionForm> = () => {
  const [res, setRes] = useState(1);
  const [modalOpen, setmodalOpen] = useState(false);
  const handleChange = (newValue: number) => {
    setRes(newValue);
    useHandleFilter('step', newValue);// add new path to URL history
  };
  return (
    <section className="shadow overflow-hidden sm:rounded-md">
      <div className="bg-white pt-4">
        <StepperItem onClick={(e:any) => handleChange(e)} />
        <Box>
          <form>
            <TabPanel value={res} index={1}>   {/* step 1 */}
              <FormItem name="assessment" label="Name your assessment" className="col-span-6">
                <div className="flex justify-center items-center">
                  <Tooltips title="Give your assessment a name.">
                    <QuestionMarkCircleIcon className="h-5 w-5 mr-2" />
                  </Tooltips>
                  <Input className="mb-0" type="text" name="assessment" />
                </div>
              </FormItem>
              <FormItem name="jobrole" label="Select the job role" className="col-span-6">
                <div className="flex justify-center items-center">
                  <Tooltips title="Find the job role that most closely">
                    <QuestionMarkCircleIcon className="h-5 w-5 mr-2" />
                  </Tooltips>
                  <Input className="mb-0" type="text" name="jobrole" />
                </div>
              </FormItem>
            </TabPanel>
            <TabPanel value={res} index={2}> {/* step 2 */}
              <StepperTable onClick={() => setmodalOpen(true)} />
            </TabPanel>
            <TabPanel value={res} index={3}> {/* step 3 */}
              Section 3
            </TabPanel>
          </form>
        </Box>
      </div>
      <Modal isOpen={modalOpen} handleClose={() => setmodalOpen(false)}>
        <QuestionForm handleClose={() => setmodalOpen(false)} />
      </Modal>
    </section>

  );
};

export default QuestionNew;
