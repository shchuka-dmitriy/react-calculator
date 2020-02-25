import React   from 'react';
import styles  from './calculator.module.css';
import Display from './../Display';
import Button  from '../Button';

class Calculator extends React.Component {

  constructor (props) {
    super( props );
    this.state = {
      number1: '',
      number2: '',
      function: ''
    };
  }

  setOperator = (value) => {
    if (this.state.number1) {
      this.setState( { function: value } );
    }
  };

  getResult = () => {
    let result = null;

    switch (this.state.operator) {
      case '+': {

      }
        break;
      case '-': {

      }
        break;
      case '&#10005;': {

      }
        break;
      case '&#247;': {

      }
        break;
      default:
        return '';
        break;
    }
  };


  /*handlerPlusChange = (number) => {
   this.setState( { function: '+', number } );
   };

   handlerMinusChange = (number) => {
   this.setState( { function: '-', number } );
   };

   handlerMultChange = (number) => {
   this.setState( { function: '*', number } );
   };

   handlerDivChange = (number) => {
   this.setState( { function: '/', number } );
   };

   handleNumberChange = () => {
   this.setState( {} );
   };

   handleChange = (e) => {
   this.props.onFunctionChange( { number: this.state.number } );
   };
   */
  render () {
    return (
      <div className={styles.container}>
        <Display>748</Display>
        <table>
          <tbody>
          <tr>
            <td className={styles.controlButton}><Button onClick={this.handleChange}
                                                         onFunctionChange={this.handlerPlusChange}
                                                         className={styles.button}>+</Button></td>
            <td className={styles.controlButton}><Button onFunctionChange={this.handlerMinusChange}
                                                         className={styles.button}>-</Button></td>
            <td className={styles.controlButton}><Button onFunctionChange={this.handlerMultChange}
                                                         className={styles.button}>&#10005;</Button></td>
            <td className={styles.controlButton}><Button onFunctionChange={this.handlerDivChange}
                                                         className={styles.button}>&#247;</Button></td>
          </tr>
          <tr>
            <td><Button className={styles.button}>7</Button></td>
            <td><Button className={styles.button}>8</Button></td>
            <td><Button className={styles.button}>9</Button></td>
            <td rowSpan={4} className={styles.equalButton}><Button className={styles.button}>=</Button></td>
          </tr>
          <tr>
            <td><Button className={styles.button}>4</Button></td>
            <td><Button className={styles.button}>5</Button></td>
            <td><Button className={styles.button}>6</Button></td>
          </tr>
          <tr>
            <td><Button className={styles.button}>1</Button></td>
            <td><Button className={styles.button}>2</Button></td>
            <td><Button className={styles.button}>3</Button></td>
          </tr>
          <tr>
            <td><Button className={styles.button}>0</Button></td>
            <td><Button className={styles.button}>.</Button></td>
            <td><Button className={styles.button}>C</Button></td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calculator;