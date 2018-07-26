import React from 'react';
import PropTypes from 'prop-types';
import { isValidText } from '../utils/validateText';
import classNames from 'classnames';

export class EditItem extends React.PureComponent {
  static displayName = 'EditItem';
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired,
    index: PropTypes.number.isRequired,

    onCancelClick: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      text: props.item.text
    };
  }

  _cancelEditing = () =>
    this.props.onCancelClick(this.props.item.id);

  _deleteItem = () =>
    this.props.onDeleteClick(this.props.item.id);

  _editItem = () =>
    this.props.onSaveClick(this.props.item.id, this.state.text);

  _updateText = event =>
    this.setState({
      text: event.target.value
    });

  render() {
    const validText = isValidText(this.state.text);
    return (
      <div className="list-group-item">
        <li className={classNames({
          "input-group": true,
          "has-error": !validText,
          "has-success": validText
        })}
        >
          <p className="input-group-addon">
            {this.props.index}
          </p>
          <input
            type="text"
            className="form-control"
            name="itemToModify"
            onChange={this._updateText}
            value={this.state.text}
            required
          />
          <div className="input-group-append input-group-btn">
            <button
              className="btn btn-primary"
              type="button"
              name="itemToModifySaveButton"
              value="Save"
              onClick={this._editItem}
              disabled={!validText}
            >
              Save
            </button>
            <button
              className="btn btn-light"
              type="button"
              name="itemToModifyCancelButton"
              value="Cancel"
              onClick={this._cancelEditing}
            >
              Cancel
            </button>
            <button
              className="btn btn-danger"
              type="button"
              name="itemToModifyDeleteButton"
              value="Delete"
              onClick={this._deleteItem}
            >
              Delete
            </button>
          </div>
        </li>
      </div>
    );
  }
}
