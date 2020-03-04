//HOC - компонент высшего порядка - это ф-ция, которая принимает компонент в качестве пораметра и возвращает новый компонент.
//Функция высшего порядка - это ф-ция, которая принимает либо ф-цию в качестве параметров и/или возвращает ф-цию.

import React, {Component}        from 'react';


function listWithData (fetchData, WrappedComponent) {

  return class NewComponent extends React.Component {

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
                       isFetching: true,
                     } );

      try {
        fetchData()
          .then( response => {
            this.setState( {
                             items: [...this.state.items, ...response.data],
                           } );
          } );
      } catch (e) {
        this.setState( {
                         error: e,
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
      return <WrappedComponent {...this.state} {...this.props}/>;
    }
  };
}

export default listWithData;