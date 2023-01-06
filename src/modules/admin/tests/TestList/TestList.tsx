import classNames from 'classnames';
import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Spinner } from 'components/atoms';
import { useGetTests } from 'hooks/api/useTests';
import { dummy } from '../../../../constants/form';

interface ITestList {
  className?: string;
}

const TestList: React.FC<ITestList> = (props) => {
  const { className = '' } = props;
  const navigate = useNavigate();

  const { status, isFetching } = useGetTests();
  // const { data = [], status, error, isFetching } = useGetTests();

  const goToQuestionDetails = (id: number) => () => navigate(`?id=${id}`);

  const renderTableData = () => {
    if (status === 'loading') {
      return (
        <tr>
          <td colSpan={12} className="border-b border-slate-100  p-4 pl-8 text-slate-500 ">
            <Spinner />
          </td>
        </tr>
      );
    }

    // if (status === 'error') {
    //   return (
    //     <tr>
    //       <td className="border-b border-slate-100  p-4 pl-8 text-slate-500 ">
    //         Error: {error?.message}
    //       </td>
    //     </tr>
    //   );
    // }

    return dummy.map((d) => (
      <tr
        // eslint-disable-next-line no-underscore-dangle
        key={d?.id}
        className="hover:cursor-pointer hover:border hover:border-emerald-700"
        // eslint-disable-next-line no-underscore-dangle
        onClick={goToQuestionDetails(d.id)}
      >
        <td colSpan={1} className="border-b border-slate-100  p-4 pl-8 text-slate-500 ">{d?.name}</td>
        <td colSpan={1} className="border-b border-slate-100  p-4 text-slate-500 ">{d?.time}</td>
        <td colSpan={1} className="border-b border-slate-100  p-4 pr-8 text-slate-500 ">{d?.level}</td>
        <td colSpan={6} className="border-b border-slate-100  p-4 pr-8 text-slate-500 ">hello</td>
      </tr>
    ));
  };

  const renderFetchingNote = () => {
    if (!isFetching) return null;

    return dummy.map((d) => (
      <tr
        // eslint-disable-next-line no-underscore-dangle
        key={d?.id}
        className="hover:cursor-pointer hover:border hover:border-emerald-700"
        // eslint-disable-next-line no-underscore-dangle
        onClick={goToQuestionDetails(d.id)}
      >
        <td colSpan={1} className="border-b border-slate-100  p-4 pl-8 text-slate-500 ">{d?.name}</td>
        <td colSpan={1} className="border-b border-slate-100  p-4 text-slate-500 ">{d?.time}</td>
        <td colSpan={1} className="border-b border-slate-100  p-4 pr-8 text-slate-500 ">{d?.level}</td>
        <td colSpan={6} className="border-b border-slate-100  p-4 pr-8 text-slate-500 ">hello</td>
      </tr>
    ));
  };

  return (
    <div>
      <table className={classNames('border-collapse table-auto w-full text-sm bg-white', className)}>
        <thead>
          <tr>
            <th colSpan={1} className="border-b  font-medium p-4 pl-8 pb-3 text-slate-400  text-left">Name</th>
            <th colSpan={1} className="border-b  font-medium p-4 pb-3 text-slate-400  text-left">Summary</th>
            <th colSpan={1} className="border-b  font-medium p-4 pr-8  pb-3 text-slate-400  text-left">Level</th>
          </tr>
        </thead>
        <tbody className="">
          {renderTableData()}
          {renderFetchingNote()}
        </tbody>
      </table>
    </div>
  );
};

export default TestList;
