import React     from 'react';
import PropTypes from 'prop-types';

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

TaskList.propTypes = {
  items: PropTypes.arrayOf( PropTypes.shape( {
                                               id: PropTypes.oneOfType( [
                                                                          PropTypes.string,
                                                                          PropTypes.number
                                                                        ] ).isRequired,
                                               value: PropTypes.string.isRequired,
                                               isDone: PropTypes.bool.isRequired,
                                               deadline: PropTypes.string.isRequired
                                             } ) ).isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default TaskList;
