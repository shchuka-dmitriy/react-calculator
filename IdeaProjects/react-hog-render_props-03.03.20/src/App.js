import React                      from 'react';
import './App.css';
import UsersList                  from './components/UsersList';
import TaskList                   from './components/TaskList';
import listWithData               from './components/HOCs/listWithData.js';
import { getUsers, getUserTasks } from './api';

const UsersListWithData = listWithData( getUsers, UsersList );
const TaskListWithData = listWithData( getUserTasks, TaskList );

function App () {
  return (
    <div style={{ display: 'flex' }}>
      <UsersListWithData/>
      <TaskListWithData/>
    </div>
  );
}

export default App;
