import classNames from 'classnames';
import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useGetTests } from '../../../../hooks/api/useTests';

interface ITestList {
  className?: string;
}

const TestList: React.FC<ITestList> = (props) => {
  const { className = '' } = props;
  const navigate = useNavigate();

  const { data = [], status, error, isFetching } = useGetTests();

  const goToQuestionDetails = (id: number) => () => navigate(`${id}`);

  const renderTableData = () => {
    if (status === 'loading') {
      return (
        <tr>
          <td className="border-b border-slate-100  p-4 pl-8 text-slate-500 ">Loading</td>
        </tr>
      );
    }

    if (status === 'error') {
      return (
        <tr>
          <td className="border-b border-slate-100  p-4 pl-8 text-slate-500 ">
            Error: {error?.message}
          </td>
        </tr>
      );
    }

    return data.map((d) => (
      <tr
        // eslint-disable-next-line no-underscore-dangle
        key={d?._id}
        className="hover:cursor-pointer hover:border hover:border-emerald-700"
        // eslint-disable-next-line no-underscore-dangle
        onClick={goToQuestionDetails(d._id)}
      >
        <td className="border-b border-slate-100  p-4 pl-8 text-slate-500 ">{d?.name}</td>
        <td className="border-b border-slate-100  p-4 text-slate-500 ">{d?.summary}</td>
        <td className="border-b border-slate-100  p-4 pr-8 text-slate-500 ">{d?.level}</td>
      </tr>
    ));
  };

  const renderFetchingNote = () => {
    if (!isFetching) return null;

    return (
      <tr>
        <td className="border-b border-slate-100  p-4 pl-8 text-slate-500 ">
          Background Updating...
        </td>
      </tr>
    );
  };

  return (
    <table className={classNames('border-collapse table-auto w-full text-sm bg-white', className)}>
      <thead>
        <tr>
          <th className="border-b  font-medium p-4 pl-8 pb-3 text-slate-400  text-left">Name</th>
          <th className="border-b  font-medium p-4 pb-3 text-slate-400  text-left">Summary</th>
          <th className="border-b  font-medium p-4 pr-8  pb-3 text-slate-400  text-left">Level</th>
        </tr>
      </thead>
      <tbody className="">
        {renderTableData()}
        {renderFetchingNote()}
      </tbody>
    </table>
  );
};

export default TestList;
