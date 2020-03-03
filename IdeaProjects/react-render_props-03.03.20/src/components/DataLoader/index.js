import React, { Component } from 'react';
import PropTypes            from 'prop-types';

class DataLoader extends Component {

  constructor (props) {
    super( props );
    this.state = {
      isFetching: false,
      items: [],
      error: null
    };
  }

  loadData = () => {
    this.setState( {
                     isFetching: true
                   } );
    try {

      this.props.getData()
          .then( response => (
            this.setState( {
                             items: response.data
                           } )
          ) );

    } catch (e) {
      this.setState( {
                       error: e
                     } );
    } finally {
      this.setState( {
                       isFetching: false
                     } );
    }
  };

  componentDidMount () {
    this.loadData();
  }

  render () {
    return this.props.render(this.state);
  }
}

DataLoader.propTypes = {
  getData: PropTypes.func.isRequired,
  render: PropTypes.elementType.isRequired,
};

export default DataLoader;