import { connect } from 'react-redux';
import { TodoList } from '../components/TodoList';
import { memoizedIds } from '../selectors/memoizeIds';

const mapStateToProps = state => {
  const itemIds = state.items.keySeq()
    .toArray();
  return ({
    itemIds: memoizedIds(...itemIds)
  });
};

const TodoListContainer = connect(mapStateToProps)(TodoList);
export { TodoListContainer as TodoList };
