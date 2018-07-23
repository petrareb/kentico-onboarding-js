import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './Input';
import { isValidText } from '../utils/validateText';
import classNames from 'classnames';

export class EditItem extends React.PureComponent {
  static displayName = 'EditItem';
  static propTypes = {
    text: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    onCancelClick: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      isValid: isValidText(this.props.text)
    };
  }

  _onCancelClick = () => {
    this.props.onCancelClick(this.props.id, false);
  };

  _onDeleteClick = () => {
    this.props.onDeleteClick(this.props.id);
  };

  _onSaveClick = () => {
    if (this.state.text) {
      this.props.onSaveClick(this.props.id, this.state.text);
    }
  };

  // TODO: target vs currentTarget
  _changedTextInput = (event) => {
    this.setState({
      text: event.target.value,
      isValid: isValidText(event.target.value)
    });
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
          {/*has-error*/}
          <p className="input-group-addon">
            {this.props.index}
          </p>
          {/*<Input/>*/}
          <input
            type="text"
            className="form-control"
            name="itemToModify"
            onChange={this._changedTextInput}
            value={this.state.text}
            required
          />
          <div className="input-group-append input-group-btn">
            <button
              className="btn btn-primary"
              type="button"
              name="itemToModifySaveButton"
              value="Save"
              onClick={this._onSaveClick}
              disabled={!isValidText(this.state.text)}
            >
              Save
            </button>
            <button
              className="btn btn-light"
              type="button"
              name="itemToModifyCancelButton"
              value="Cancel"
              onClick={this._onCancelClick}
            >
              Cancel
            </button>
            <button
              className="btn btn-danger"
              type="button"
              name="itemToModifyDeleteButton"
              value="Delete"
              onClick={this._onDeleteClick}
            >
              Delete
            </button>
          </div>
        </li>
      </div>
    );
  }
}
