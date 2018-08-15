import { connect } from 'react-redux';
import { ITodoListStateProps, TodoList } from '../components/TodoList';
import { memoizedIds } from '../selectors/memoizeIds';
import { IItem } from '../constants/IItem';
import { OrderedMap } from 'immutable';

export type ITodoListState = {
  readonly items: OrderedMap<string, IItem>
}

const mapStateToProps = (state: ITodoListState): ITodoListStateProps => ({
  itemIds: memoizedIds(state.items.keySeq().toArray())
});

const TodoListContainer = connect(mapStateToProps)(TodoList);
export { TodoListContainer as TodoList };
