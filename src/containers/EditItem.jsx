import { connect } from 'react-redux';

import { EditItem } from '../components/EditItem';
import {
  deleteItem,
  saveItem,
  toggleEdited
} from '../actions/todoActions';

const mapDispatchToProps = (dispatch) => ({
  onCancelClick: (itemId) => dispatch(toggleEdited(itemId)),
  onSaveClick: (itemId, text) => dispatch(saveItem(itemId, text)),
  onDeleteClick: (itemId) => dispatch(deleteItem(itemId))
});

const EditItemContainer = connect(null, mapDispatchToProps)(EditItem);
export { EditItemContainer as EditItem };
