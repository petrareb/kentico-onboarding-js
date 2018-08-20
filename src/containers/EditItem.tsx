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
import { ListItemRecord } from '../models/ListItemRecord';

export type IEditItemContainerProps = {
  readonly item: ListItemRecord,
  readonly index: number
};

const mapDispatchToProps = (dispatch: Dispatch): IEditItemDispatchProps => ({
  onCancelClick: (itemId: string): IAction => dispatch(toggleEdited(itemId)),
  onSaveClick: (itemId: string, text: string): IAction => dispatch(saveItem(itemId, text)),
  onDeleteClick: (itemId: string): IAction => dispatch(deleteItem(itemId))
});

const EditItemContainer: React.ComponentClass<IEditItemContainerProps> =
  connect(null, mapDispatchToProps)(EditItem);
export { EditItemContainer as EditItem };
