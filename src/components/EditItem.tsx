import * as React from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import { isValidText } from '../utils/validateText';
import { ListItem } from '../models/ListItem';
import { ReactNode } from 'react';
import { TodoListAction } from '../actions/types/TodoListAction';

export type EditItemOwnProps = {
  readonly item: ListItem,
  readonly index: number
};

export type EditItemDispatchProps = {
  readonly cancelEditing: () => TodoListAction,
  readonly saveItem: (text: string) => TodoListAction,
  readonly deleteItem: () => void
};

type EditItemProps = EditItemDispatchProps & EditItemOwnProps;

type EditItemState = {
  readonly text: string,
  readonly isFetching: boolean,
};

export class EditItem extends React.PureComponent<EditItemProps, EditItemState> {
  static displayName = 'EditItem';

  static propTypes = {
    item: PropTypes.instanceOf(ListItem).isRequired,
    index: PropTypes.number.isRequired,

    cancelEditing: PropTypes.func.isRequired,
    saveItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
  };

  constructor(props: EditItemProps) {
    super(props);
    this.state = {
      text: props.item.text,
      isFetching: props.item.isFetching
    };
  }

  _cancelEditing = (): TodoListAction => this.props.cancelEditing();

  _editItem = (): TodoListAction => this.props.saveItem(this.state.text);

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
              onClick={this.props.deleteItem}
            >
              Delete
            </button>
          </div>
        </li>
      </div>
    );
  }
}
