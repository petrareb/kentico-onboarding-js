import * as React from 'react';
import { connect } from 'react-redux';

import { EditItem, EditItemDispatchProps, EditItemOwnProps } from '../components/EditItem';
import {
  deleteItem,
  saveItem,
  toggleEdited
} from '../actions/todoActions';
import { Dispatch } from 'redux';
import { Action } from '../actions/types/Action';

const mapDispatchToProps = (dispatch: Dispatch, ownProps: EditItemOwnProps): EditItemDispatchProps => ({
  //onCancelClick: (itemId: Guid): Action => dispatch(toggleEdited(itemId)),
  onCancelClick: (): Action => dispatch(toggleEdited(ownProps.item.id)),
  //onSaveClick: (itemId: Guid, text: string): Action => dispatch(saveItem(itemId, text)),
  onSaveClick: (text: string): Action => dispatch(saveItem(ownProps.item.id, text)),
  //onDeleteClick: (itemId: Guid): Action => dispatch(deleteItem(itemId))
  onDeleteClick: (): Action => dispatch(deleteItem(ownProps.item.id))
});

const EditItemContainer: React.ComponentClass<EditItemOwnProps> =
  connect(null, mapDispatchToProps)(EditItem);
export { EditItemContainer as EditItem };
