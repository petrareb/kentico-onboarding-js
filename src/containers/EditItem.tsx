import * as React from 'react';
import { connect } from 'react-redux';

import { EditItem, EditItemDispatchProps, EditItemOwnProps } from '../components/EditItem';
import {
  deleteItem,
  saveItem,
  toggleEdited
} from '../actions/baseActions';
import { Dispatch } from 'redux';
import { TodoListAction } from '../actions/types/TodoListAction';

const mapDispatchToProps = (dispatch: Dispatch, ownProps: EditItemOwnProps): EditItemDispatchProps => ({
  cancelEditing: (): TodoListAction => dispatch(toggleEdited(ownProps.item.id)),
  saveItem: (text: string): TodoListAction => dispatch(saveItem(ownProps.item.id, text)),
  deleteItem: (): TodoListAction => dispatch(deleteItem(ownProps.item.id))
});

const EditItemContainer: React.ComponentClass<EditItemOwnProps> =
  connect(null, mapDispatchToProps)(EditItem);
export { EditItemContainer as EditItem };
