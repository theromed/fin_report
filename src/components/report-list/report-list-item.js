import React, {Component} from 'react';
import './report-list-item.css';


export default class ReportListItem extends Component {

  render() {
    const {name, value, goal, id, onDeleted} = this.props;

    return (
      <span className='report-list-line'>
        <span className="report-list-item-name">
            {id} {}
          {name} {}
          {value}
        </span>


        <button type="button"
                className="btn btn-outline-warning btn-sm float-right"
                onClick={onDeleted}>
                <i className="fa fa-trash-o"/>
        </button>


        <GoalReached goal={goal}/>

       </span>
    );
  };
}


const GoalReached = ({goal}) => {
  if (goal) {
    return (<i className="fa fa-thumbs-up match"/>);
  } else {
    return (<i className="fa fa-thumbs-down notMatch "/>);
  }
};
