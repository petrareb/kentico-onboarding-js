import * as React from 'react';
import { connect } from 'react-redux';

import { EditItem, IEditItemDispatchProps } from '../components/EditItem';
import {
  deleteItem,
  saveItem,
  toggleEdited
} from '../actions/todoActions';
import { Dispatch } from 'redux';
import { IAction } from '../actions/IAction';
import { ListItem } from '../models/ListItem';
import { Guid } from '../utils/ownTypes';

export type IEditItemContainerProps = {
  readonly item: ListItem,
  readonly index: number
};

const mapDispatchToProps = (dispatch: Dispatch): IEditItemDispatchProps => ({
  onCancelClick: (itemId: Guid): IAction => dispatch(toggleEdited(itemId)),
  onSaveClick: (itemId: Guid, text: string): IAction => dispatch(saveItem(itemId, text)),
  onDeleteClick: (itemId: Guid): IAction => dispatch(deleteItem(itemId))
});

const EditItemContainer: React.ComponentClass<IEditItemContainerProps> =
  connect(null, mapDispatchToProps)(EditItem);
export { EditItemContainer as EditItem };
