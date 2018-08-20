import * as React from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import { isValidText } from '../utils/validateText';
import { IAction } from '../actions/IAction';
import { ListRecord } from '../models/ListItemRecord';
import { ReactNode } from 'react';

export type IEditItemStateProps = {
  readonly item: ListRecord,
  readonly index: number
};

export type IEditItemDispatchProps = {
  onCancelClick: (itemId: string) => IAction,
  onSaveClick: (itemId: string, text: string) => IAction,
  onDeleteClick: (itemId: string) => IAction
};

export type IEditItemProps = IEditItemDispatchProps & IEditItemStateProps;

export type IEditItemState = {
  text: string
};

export class EditItem extends React.PureComponent<IEditItemProps, IEditItemState> {
  static displayName = 'EditItem';

  static propTypes = {
    item: PropTypes.instanceOf(ListRecord).isRequired,
    index: PropTypes.number.isRequired,

    onCancelClick: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
  };

  constructor(props: IEditItemProps) {
    super(props);
    this.state = {
      text: props.item.text
    };
  }

  _cancelEditing = () => this.props.onCancelClick(this.props.item.id);

  _deleteItem = () => this.props.onDeleteClick(this.props.item.id);

  _editItem = () => this.props.onSaveClick(this.props.item.id, this.state.text);

  _updateText = (event: React.FormEvent<HTMLInputElement>) => this.setState(() => ({
    text: event.currentTarget.value
  }));

  render(): ReactNode {
    const validText = isValidText(this.state.text);
    return (
      <div className="list-group-item">
        <li
          className={classNames({
            'input-group': true,
            'has-error': !validText,
            'has-success': validText
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
            required={true}
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
