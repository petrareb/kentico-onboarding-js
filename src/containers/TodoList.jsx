import { connect } from 'react-redux';
import { TodoList } from '../components/TodoList';

const mapStateToProps = state => ({
  itemIds: state.items.valueSeq()
    .map(item => item.id)
});

const TodoListContainer = connect(mapStateToProps)(TodoList);
export { TodoListContainer as TodoList };
