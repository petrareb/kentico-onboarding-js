import { connect } from 'react-redux';

import { EditItem } from '../components/EditItem';
import {
  deleteItem,
  saveItem,
  toggleEdited
} from '../actions/todoActions';

const mapDispatchToProps = (dispatch: Function) => ({
  onCancelClick: (itemId: string) => dispatch(toggleEdited(itemId)),
  onSaveClick: (itemId: string, text: string) => dispatch(saveItem(itemId, text)),
  onDeleteClick: (itemId: string) => dispatch(deleteItem(itemId))
});

const EditItemContainer = connect(null, mapDispatchToProps)(EditItem);
export { EditItemContainer as EditItem };
