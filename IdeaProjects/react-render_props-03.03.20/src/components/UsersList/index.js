import React     from 'react';
import PropTypes from 'prop-types';
import TaskList  from '../TaskList';

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

UsersList.propTypes = {
  items: PropTypes.arrayOf( PropTypes.shape( {
                                               id: PropTypes.oneOfType( [
                                                                          PropTypes.string,
                                                                          PropTypes.number
                                                                        ] ).isRequired,
                                               firstName: PropTypes.string.isRequired,
                                               lastName: PropTypes.string.isRequired,
                                               email: PropTypes.string.isRequired,
                                               profilePicture: PropTypes.string
                                             } ) ).isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default UsersList;