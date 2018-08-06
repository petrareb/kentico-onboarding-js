import { connect } from 'react-redux';
import { TodoList } from '../components/TodoList';


const mapStateToProps = state => ({
  items: state.items
  // TODO itemIds
});

const TodoListContainer = connect(mapStateToProps)(TodoList);
export { TodoListContainer as TodoList };
