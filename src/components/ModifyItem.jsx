import React from 'react';
import PropTypes from 'prop-types';

export class ModifyItem extends React.PureComponent {
  static displayName = 'ModifyItem';
  static propTypes = {
    text: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    onCancelClick: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
    };
  }

  _onCancelClick = () => {
    this.props.onCancelClick(this.props.id, false);
  };

  _onDeleteClick = () => {
    this.props.onDeleteClick(this.props.id);
  };

  _onSaveClick = () => {
    this.props.onSaveClick(this.props.id, this.state.text);
  };

  _changedTextInput = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (

      <div className="list-group-item">
      <li className="input-group">
        <input
          type="text"
          className="form-control"
          name={'itemToModify'}
          onChange={this._changedTextInput}
          value={this.state.text}
        />
          <div className="input-group-append input-group-btn">
            <button
              className="btn btn-primary"
              type="button"
              name="itemToModifySaveButton"
              value="Save"
              onClick={this._onSaveClick}
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
