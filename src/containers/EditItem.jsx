import { connect } from 'react-redux';

import { EditItem } from '../components/EditItem';
import { deleteItem, saveItem, toggleEdited } from '../actionCreators/actionCreators';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps
});

const mapDispatchToProps = (dispatch) => ({
  onCancelClick: (itemId) => dispatch(toggleEdited(itemId)),
  onSaveClick: (itemId, text) => dispatch(saveItem(itemId, text)),
  onDeleteClick: (itemId) => dispatch(deleteItem(itemId))
});

const EditItemContainer = connect(mapStateToProps, mapDispatchToProps)(EditItem);
export { EditItemContainer as EditItem };
