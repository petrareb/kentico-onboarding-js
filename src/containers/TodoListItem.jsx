import { connect } from 'react-redux';
import { TodoListItem } from '../components/TodoListItem';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  item: state.items.get(ownProps.id)
});

const TodoListItemContainer = connect(mapStateToProps)(TodoListItem);
export { TodoListItemContainer as TodoListItem };
