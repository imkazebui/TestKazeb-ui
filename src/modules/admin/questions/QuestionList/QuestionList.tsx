import classNames from 'classnames';
import React from 'react';

interface IQuestionList {
  className?: string;
}

const QuestionList: React.FC<IQuestionList> = (props) => {
  const { className = '' } = props;

  return (
    <table className={classNames('border-collapse table-auto w-full text-sm bg-white', className)}>
      <thead>
        <tr>
          <th className="border-b  font-medium p-4 pl-8 pb-3 text-slate-400  text-left">Song</th>
          <th className="border-b  font-medium p-4 pb-3 text-slate-400  text-left">Artist</th>
          <th className="border-b  font-medium p-4 pr-8  pb-3 text-slate-400  text-left">Year</th>
        </tr>
      </thead>
      <tbody className="">
        <tr>
          <td className="border-b border-slate-100  p-4 pl-8 text-slate-500 ">
            The Sliding Mr. Bones (Next Stop, Pottersville)
          </td>
          <td className="border-b border-slate-100  p-4 text-slate-500 ">Malcolm Lockyer</td>
          <td className="border-b border-slate-100  p-4 pr-8 text-slate-500 ">1961</td>
        </tr>
        <tr>
          <td className="border-b border-slate-100  p-4 pl-8 text-slate-500 ">Witchy Woman</td>
          <td className="border-b border-slate-100  p-4 text-slate-500 ">The Eagles</td>
          <td className="border-b border-slate-100  p-4 pr-8 text-slate-500 ">1972</td>
        </tr>
        <tr>
          <td className="border-b border-slate-200  p-4 pl-8 text-slate-500 ">Shining Star</td>
          <td className="border-b border-slate-200  p-4 text-slate-500 ">Earth, Wind, and Fire</td>
          <td className="border-b border-slate-200  p-4 pr-8 text-slate-500 ">1975</td>
        </tr>
      </tbody>
    </table>
  );
};

export default QuestionList;
