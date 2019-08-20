import React from 'react';

import ReportListItem from './report-list-item';
import './report-list.css';

const ReportList = ({report, onDeleted}) => {

  const elements = report.map((item) => {
    return (
      <div key={item.id} className='list-group-item'>
        <ReportListItem {...item}
                        onDeleted={() => onDeleted(item.id)}
        />
      </div>
    );
  });

  return (
    <ul className="list-group report-list">
      {elements}
    </ul>
  )
};


export default ReportList;
