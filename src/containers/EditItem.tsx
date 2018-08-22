import * as React from 'react';
import { connect } from 'react-redux';

import { EditItem, IEditItemDispatchProps } from '../components/EditItem';
import {
  deleteItem,
  saveItem,
  toggleEdited
} from '../actions/todoActions';
import { Dispatch } from 'redux';
import { Action } from '../actions/Action';
import { ListItem } from '../models/ListItem';

export type IEditItemContainerProps = {
  readonly item: ListItem,
  readonly index: number
};

const mapDispatchToProps = (dispatch: Dispatch): IEditItemDispatchProps => ({
  onCancelClick: (itemId: Guid): Action => dispatch(toggleEdited(itemId)),
  onSaveClick: (itemId: Guid, text: string): Action => dispatch(saveItem(itemId, text)),
  onDeleteClick: (itemId: Guid): Action => dispatch(deleteItem(itemId))
});

const EditItemContainer: React.ComponentClass<IEditItemContainerProps> =
  connect(null, mapDispatchToProps)(EditItem);
export { EditItemContainer as EditItem };
