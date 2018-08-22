import * as React from 'react';
import { connect } from 'react-redux';

import { EditItem, EditItemDispatchProps } from '../components/EditItem';
import {
  deleteItem,
  saveItem,
  toggleEdited
} from '../actions/todoActions';
import { Dispatch } from 'redux';
import { Action } from '../actions/types/Action';
import { ListItem } from '../models/ListItem';

export type EditItemContainerProps = {
  readonly item: ListItem,
  readonly index: number
};

const mapDispatchToProps = (dispatch: Dispatch): EditItemDispatchProps => ({
  onCancelClick: (itemId: Guid): Action => dispatch(toggleEdited(itemId)),
  onSaveClick: (itemId: Guid, text: string): Action => dispatch(saveItem(itemId, text)),
  onDeleteClick: (itemId: Guid): Action => dispatch(deleteItem(itemId))
});

const EditItemContainer: React.ComponentClass<EditItemContainerProps> =
  connect(null, mapDispatchToProps)(EditItem);
export { EditItemContainer as EditItem };
