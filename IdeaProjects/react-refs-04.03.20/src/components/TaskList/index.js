import React            from 'react';
import listWithData     from '../HOCs/listWithData.js';
import { getUserTasks } from '../../api';

function TaskList (props) {

  const { items, isFetching } = props;
  return (
    <ol>
      {
        items.map( item => (<li key={item.id}>{`${item.value} ${item.isDone}`}</li>) )
      }
      {
        isFetching && <li>Loading...</li>
      }
    </ol>
  );

}

//export default TaskList;
export default listWithData(getUserTasks, TaskList);