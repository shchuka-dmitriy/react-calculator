import React                      from 'react';
import './App.css';
import DataLoader                 from './components/DataLoader';
import UsersList                  from './components/UsersList';
import TaskList                   from './components/TaskList';
import { getUsers, getUserTasks } from './api';

function App () {
  return (
    <div style={{ display: 'flex' }}>
      <DataLoader getData={getUserTasks} render={ ({ items, ...rest }) => {
        return <TaskList items={items} {...rest}/>;
      }}/>

      <DataLoader getData={getUsers} render={ ({ items, ...rest }) => {
        return <UsersList items={items} {...rest}/>
      } }/>
    </div>
  );
}

export default App;