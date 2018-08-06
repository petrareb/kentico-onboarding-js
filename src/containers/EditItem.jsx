import { connect } from 'react-redux';

import { EditItem } from '../components/EditItem';
import { deleteItem, saveItem, toggleEdited } from '../actionCreators/actionCreators';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCancelClick: () => dispatch(toggleEdited(ownProps.item.id)),
  onSaveClick: () => dispatch(saveItem(ownProps.item.id, ownProps.item.text)),
  onDeleteClick: () => dispatch(deleteItem(ownProps.item.id))
});

const EditItemContainer = connect(mapStateToProps, mapDispatchToProps)(EditItem);
export { EditItemContainer as EditItem };
