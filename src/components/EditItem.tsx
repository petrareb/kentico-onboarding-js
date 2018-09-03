import * as React from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import { isValidText } from '../utils/validateText';
import { Action } from '../actions/types/Action';
import { ListItem } from '../models/ListItem';
import { ReactNode } from 'react';

export type EditItemOwnProps = {
  readonly item: ListItem,
  readonly index: number
};

export type EditItemDispatchProps = {
  onCancelClick: () => Action,
  onSaveClick: (text: string) => Action,
  onDeleteClick: () => Action
};

export type EditItemProps = EditItemDispatchProps & EditItemOwnProps;

type EditItemState = {
  readonly text: string
};

export class EditItem extends React.PureComponent<EditItemProps, EditItemState> {
  static displayName = 'EditItem';

  static propTypes = {
    item: PropTypes.instanceOf(ListItem).isRequired,
    index: PropTypes.number.isRequired,

    onCancelClick: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
  };

  constructor(props: EditItemProps) {
    super(props);
    this.state = {
      text: props.item.text
    };
  }

  _cancelEditing = (): Action => this.props.onCancelClick();

  _deleteItem = (): Action => this.props.onDeleteClick();

  _editItem = (): Action => this.props.onSaveClick(this.state.text);

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
