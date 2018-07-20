import React from 'react';
import PropTypes from 'prop-types';


export class ItemToAdd extends React.PureComponent {
  static displayName = 'ItemToAdd';
  static propTypes = {
    onAddClick: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  // TODO: validation

  _changedTextInput = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  _onAddClick = () => {
    if (this.state.text) {
      this.props.onAddClick(this.state.text);
      this.setState({
        text: ''
      });
    }
  };

  render() {
    return (
      <div className="list-group-item">
        <li className="input-group">
          <input
            type="text"
            className="form-control"
            name="itemToAddTextBox"
            value={this.state.text}
            onChange={this._changedTextInput}
          />
          <div className="input-group-append input-group-btn">
            <button
              className="btn btn-light"
              type="button"
              name="itemToAddSubmitButton"
              value="Add"
              onClick={this._onAddClick}
            >
              Add
            </button>
          </div>
        </li>
      </div>
    );
  }
}
