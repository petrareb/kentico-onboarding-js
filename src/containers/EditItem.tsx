import * as React from 'react';
import { connect } from 'react-redux';

import {
  EditItem,
  EditItemDispatchProps,
  EditItemOwnProps
} from '../components/EditItem';
import {
  saveItem,
  toggleEdited
} from '../actions/baseActions';
import { TodoListAction } from '../actions/types/TodoListAction';
import { deleteItem } from '../actions/thunkActions/deleteItem';

const mapDispatchToProps = (dispatch: ListDispatch, ownProps: EditItemOwnProps): EditItemDispatchProps => ({
  cancelEditing: (): TodoListAction => dispatch(toggleEdited(ownProps.item.id)),
  saveItem: (text: string): TodoListAction => dispatch(saveItem(ownProps.item.id, text)),
  deleteItem: () => dispatch(deleteItem(ownProps.item.id)),
});

const EditItemContainer: React.ComponentClass<EditItemOwnProps> =
  connect(null, mapDispatchToProps)(EditItem);
export { EditItemContainer as EditItem };
