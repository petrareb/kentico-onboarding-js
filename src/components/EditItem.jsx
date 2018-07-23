import React from 'react';
import PropTypes from 'prop-types';
import { isValidText } from '../utils/validateText';
import classNames from 'classnames';

export class EditItem extends React.PureComponent {
  static displayName = 'EditItem';
  static propTypes = {
    itemProps: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      index: PropTypes.number.isRequired
    }),
    onCancelClick: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      text: props.itemProps.props.text,
    };
  }

  _onCancelClick = () => {
    this.props.onCancelClick(this.props.itemProps.props.id, false);
  };

  _onDeleteClick = () => {
    this.props.onDeleteClick(this.props.itemProps.props.id);
  };

  _onSaveClick = () => {
    if (this.state.text) {
      this.props.onSaveClick(this.props.itemProps.props.id, this.state.text);
    }
  };

  _changedTextInput = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    return (
      <div className="list-group-item">
        <li className={classNames({
          "input-group": true,
          "has-error": !isValidText(this.state.text),
          "has-success": isValidText(this.state.text)
        })}
        >
          <p className="input-group-addon">
            {this.props.itemProps.props.index}
          </p>
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
