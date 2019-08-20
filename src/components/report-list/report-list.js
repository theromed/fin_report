import React from 'react';

import Coefficient from './report-list-item';
import './report-list.css';

const ReportList = ({report, onDeleted}) => {

  const coefficients = report.map(item => (
    <div key={item.id} className='list-group-item'>
      <Coefficient {...item}
                   onDeleted={() => onDeleted(item.id)}
      />
    </div>
  ));

  return (
    <ul className="list-group report-list">
      {coefficients}
    </ul>
  )
};


export default ReportList;
