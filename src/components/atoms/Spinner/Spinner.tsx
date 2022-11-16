// eslint-disable react/prop-types
import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export interface Props {
  height?: number;
  width?: number;
}

export const Spinner: React.FC<Props> = (props) => {
  const { height = '', width = '' } = props;
  return (
    <div className="flex justify-center">
      <ClipLoader />
    </div>
  );
};

export default Spinner;
