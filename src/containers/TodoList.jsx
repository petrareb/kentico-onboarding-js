import { connect } from 'react-redux';
import { TodoList } from '../components/TodoList';
import memoize from 'memoizee';

const memoized = memoize((...ids) => ids, { length: false });

const mapStateToProps = state => {
  const itemIds = state.items.valueSeq()
    .map(item => item.id);
  return ({
    itemIds: memoized(itemIds),
  });
};

// const mapStateToProps = state => ({
//   itemIds: state.items.valueSeq()
//     .map(item => item.id)
// });

const TodoListContainer = connect(mapStateToProps)(TodoList);
export { TodoListContainer as TodoList };
