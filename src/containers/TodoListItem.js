import { connect } from 'react-redux';
import { TodoListItem } from '../components/TodoListItem';
import { deleteItem, saveItem, toggleEdited } from '../actionCreators/actionCreators';


const mapStateToProps = (state, ownProps) => ({
  ...ownProps
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onSaveClick: () => dispatch(saveItem(ownProps.id, ownProps.text)),
//   onDeleteClick: () => dispatch(deleteItem(ownProps.id)),
//   onRowClick: () => dispatch(toggleEdited(ownProps.id)),
//   onCancelClick: () => dispatch(toggleEdited(ownProps.id))
// });

const TodoListItemContainer = connect(mapStateToProps)(TodoListItem);
export { TodoListItemContainer as TodoListItem };
