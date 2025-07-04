import React from 'react';
import Header from '../../others/Header';
import TaskNumber from '../../others/TaskNumber';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  // console.log(data); // Ensure data is the employee object
  return (
    <div>
      <div className="p-10 bg-[#1c1c1c] h-screen">
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskNumber  data={props.data} />
        <TaskList data={props.data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
