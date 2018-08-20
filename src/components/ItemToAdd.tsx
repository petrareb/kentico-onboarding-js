import * as React from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import { isValidText } from '../utils/validateText';
import { ReactNode } from 'react';

export type IItemToAddDispatchProps = {
  readonly onAddClick: (text: string) => void
};

export type IItemToAddProps = IItemToAddDispatchProps;

export type IItemToAddState = {
  readonly text: string,
  readonly enableInputColors: boolean
};

export class ItemToAdd extends React.PureComponent<IItemToAddProps, IItemToAddState> {
  static displayName = 'ItemToAdd';

  static propTypes = {
    onAddClick: PropTypes.func.isRequired
  };

  state = {
    text: '',
    enableInputColors: false
  };

  _changedTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    return this.setState(() => ({
      text: event.target.value,
      enableInputColors: true
    }));
  };

  _addNewItem = () => {
    this.props.onAddClick(this.state.text);
    this.setState(() => ({
      text: '',
      enableInputColors: false
    }));
  };

  render(): ReactNode {
    const validText: boolean = isValidText(this.state.text);
    const classes = classNames({
      'input-group': true,
      'has-error': !validText && this.state.enableInputColors,
      'has-success': validText && this.state.enableInputColors
    });
    return (
      <div className="list-group-item">
        <li
          className={classes}
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