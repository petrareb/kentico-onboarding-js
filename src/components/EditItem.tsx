import * as React from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import { isValidText } from '../utils/validateText';
import { IAction } from '../actions/IAction';
import { ListItem } from '../models/ListItem';
import { ReactNode } from 'react';
import { Guid } from '../utils/ownTypes';

export type IEditItemStateProps = {
  readonly item: ListItem,
  readonly index: number
};

export type IEditItemDispatchProps = {
  onCancelClick: (itemId: Guid) => IAction,
  onSaveClick: (itemId: Guid, text: string) => IAction,
  onDeleteClick: (itemId: Guid) => IAction
};

export type IEditItemProps = IEditItemDispatchProps & IEditItemStateProps;

export type IEditItemState = {
  text: string
};

export class EditItem extends React.PureComponent<IEditItemProps, IEditItemState> {
  static displayName = 'EditItem';

  static propTypes = {
    item: PropTypes.instanceOf(ListItem).isRequired,
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

  _cancelEditing = (): IAction => this.props.onCancelClick(this.props.item.id);

  _deleteItem = (): IAction => this.props.onDeleteClick(this.props.item.id);

  _editItem = (): IAction => this.props.onSaveClick(this.props.item.id, this.state.text);

  _updateText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    this.setState(() => ({
      text: event.target.value
    }));
  };

  render(): ReactNode {
    const validText: boolean = isValidText(this.state.text);

    const classes = classNames({
      'input-group': true,
      'has-error': !validText,
      'has-success': validText
    });
    return (
      <div className="list-group-item">
        <li
          className={classes}
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
