import React            from 'react';
import listWithData               from '../HOCs/listWithData.js';
import { getUsers } from '../../api';

function UsersList (props) {

  const { items, isFetching } = props;
  return (
    <ol>
      {
        items.map( item => (<li key={item.id}>{`${item.firstName} ${item.lastName}`}</li>) )
      }
      {
        isFetching && <li>Loading...</li>
      }
    </ol>
  );

}

// export default UsersList;
export default listWithData(getUsers, UsersList);