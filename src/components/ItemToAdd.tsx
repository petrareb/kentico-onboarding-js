import * as React from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import { isValidText } from '../utils/validateText';

export type IItemToAddDispatchProps = {
  readonly onAddClick: (text: string) => void
}

export interface IItemToAddProps extends IItemToAddDispatchProps {}

export type IItemToAddState = {
  readonly text: string,
  readonly enableInputColors: boolean
}

export class ItemToAdd extends React.PureComponent<IItemToAddProps, IItemToAddState> {
  static displayName = 'ItemToAdd';

  static propTypes = {
    onAddClick: PropTypes.func.isRequired
  };

  state = {
    text: '',
    enableInputColors: false
  };

  _changedTextInput = (event: React.FormEvent<HTMLInputElement>) => this.setState({
    text: event.currentTarget.value,
    enableInputColors: true
  });

  //_changedTextInput = (event: React.FormEvent<HTMLInputElement>) => this.setState({
  //  text: event.target.value,
  //  enableInputColors: true
  //});

  _addNewItem = () => {
    this.props.onAddClick(this.state.text);
    this.setState({
      text: '',
      enableInputColors: false
    });
  };

  render() {
    const validText = isValidText(this.state.text);
    return (
      <div className="list-group-item">
        <li
          className={classNames({
            "input-group": true,
            "has-error": !validText && this.state.enableInputColors,
            "has-success": validText && this.state.enableInputColors
          })}
        >
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
              onClick={this._addNewItem}
              disabled={!validText}
            >
              Add
            </button>
          </div>
        </li>
      </div>
    );
  }
}
