import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import { Button } from 'components/atoms';
import { useHandleFilter } from 'hooks/useFilter';
import { CheckIcon } from '@heroicons/react/outline';
import { steps } from 'constants/form';

const Steplist = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    width: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: 'red',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: 'white',
      zIndex: 1,
      fontSize: 18,
      width: '20px',
      height: '20px',
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  })
);

const StepComponent = (props: StepIconProps) => {
  const { active, completed, icon } = props;

  return (
    <Steplist ownerState={{ active }}>
      {/* eslint-disable-next-line no-nested-ternary */}
      {completed ? ( // Status Step Completed
        <div style={{ border: '4px solid #276678', borderRadius: '2rem' }}>
          <Button
            onClick={() => useHandleFilter('step', icon)}
            className="py-2 px-2 bg-cyan-700 rounded-3xl hover:bg-cyan-800 hover:border-cyan-800 border-4 border-white"
            type="button"
          >
            <CheckIcon className="QontoStepIcon-completedIcon" />
          </Button>
        </div>
      ) : active ? ( // Status Step Active
        <div style={{ border: '4px solid #276678', borderRadius: '2rem' }}>
          <Button
            onClick={() => useHandleFilter('step', icon)}
            className="bg-cyan-700 rounded-3xl hover:bg-cyan-800 hover:border-cyan-800 border-4 border-white"
            type="button"
          >{icon}
          </Button>
        </div>
      ) : ( // Status Step Non-Active
        <div style={{ border: '4px solid white', borderRadius: '2rem' }}>
          <Button
            disabled
            className="bg-slate-300 rounded-3xl hover:bg-slate-300 border-4 border-white"
            type="button"
          >{icon}
          </Button>
        </div>
      )
      }
    </Steplist>
  );
};

const StepConnectors = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 60px)',
    width: '20rem',
  },
  [`&.${stepConnectorClasses.active}`]: {
    borderColor: '#276678',
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#276678',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#276678',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

export interface IRadioInputProps {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const StepperItem: React.FC<IRadioInputProps> = (props) => {
  const { onClick } = props;
  const [res, setRes] = useState(1);
  const handleClick = (e:any) => {
    if (onClick) {
      setRes(e);
      useHandleFilter('step', e);// add new path to URL history
      onClick(e);
    }
  };

  return (
    <>
      <div className="py-3 flex items-center mb-6">
        <Button className="mx-2 bg-slate-100 hover:bg-slate-200 text-black">&lt;</Button>
        <span className="text-xl font-bold">Create new assessment</span>
      </div>
      <Stepper alternativeLabel activeStep={res} connector={<StepConnectors />}>
        {steps.map((label) => (
          <Step key={label.id}>
            <StepLabel StepIconComponent={StepComponent}>
              <button
                aria-label="label"
                type="button"
                className="bg-transparent ml-11 text-cyan-800 font-semibold h-10 border-0"
                onClick={() => handleClick(label.id)}
              >
                {label.label}
              </button>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default StepperItem;
