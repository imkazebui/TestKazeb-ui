// eslint-disable react/prop-types
import React from 'react';
import Tooltip from '@mui/material/Tooltip';

export interface Props {
  title?: string;
  children: React.ReactElement<any, any>;
}

export const Tooltips: React.FC<Props> = (props) => {
  const { title = '', children } = props;
  return (
    <div className="flex justify-center">
      <Tooltip title={title}>
        {children}
      </Tooltip>
    </div>
  );
};

export default Tooltips;
