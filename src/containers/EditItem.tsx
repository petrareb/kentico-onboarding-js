import * as React from 'react';
import { connect } from 'react-redux';

import { EditItem } from '../components/EditItem';
import {
  deleteItem,
  saveItem,
  toggleEdited
} from '../actions/todoActions';
import { Dispatch } from 'redux';
import { IItem } from '../constants/IItem';

export type IEditItemContainerProps = {
  readonly item: IItem,
  readonly index: number
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onCancelClick: (itemId: string) => dispatch(toggleEdited(itemId)),
  onSaveClick: (itemId: string, text: string) => dispatch(saveItem(itemId, text)),
  onDeleteClick: (itemId: string) => dispatch(deleteItem(itemId))
});

const EditItemContainer: React.PureComponent<IEditItemContainerProps> =
  connect(null, mapDispatchToProps)(EditItem);
export { EditItemContainer as EditItem };

//export const EditItem: React.PureComponent<IEditItemContainerProps> = connect(null, mapDispatchToProps)(EditItem);
