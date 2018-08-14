import { connect } from 'react-redux';
import { TodoList } from '../components/TodoList';
import { memoizedIds } from '../selectors/memoizeIds';

const mapStateToProps = state: => ({
  itemIds: memoizedIds(state.items.keySeq().toArray())
});

const TodoListContainer = connect(mapStateToProps)(TodoList);
export { TodoListContainer as TodoList };
