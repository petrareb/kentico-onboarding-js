import React from 'react';
import PropTypes from 'prop-types';
import { isValidText } from '../utils/validateText';
import { Input } from './Input';
import classNames from 'classnames';


export class ItemToAdd extends React.PureComponent {
  static displayName = 'ItemToAdd';
  static propTypes = {
    onAddClick: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.state = {
      text: '',
      isValid: false
    };
  }

  // TODO: validation

  _changedTextInput = (event) => {
    this.setState({
      text: event.target.value,
      isValid: isValidText(event.target.value)
    });
  };

  _onAddClick = () => {
    if (this.state.text) {
      this.props.onAddClick(this.state.text);
      this.setState({
        text: '',
        isValid: false
      });
    }
  };

  render() {
    return (
      <div className="list-group-item">
        <li className={classNames({
          "input-group": true,
          "has-error": !this.state.isValid,
          "has-success": this.state.isValid
        })}
        >
          <input
            type="text"
            className="form-control"
            name="itemToAddTextBox"
            value={this.state.text}
            onChange={this._changedTextInput}

          />
          {/*<Input/>*/}
          <div className="input-group-append input-group-btn">
            <button
              className="btn btn-light"
              type="button"
              name="itemToAddSubmitButton"
              value="Add"
              onClick={this._onAddClick}
              disabled={!isValidText(this.state.text)}
            >
              Add
            </button>
          </div>
        </li>
      </div>
    );
  }
}
