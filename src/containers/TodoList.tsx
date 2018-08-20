import * as React from 'react';
import { connect } from 'react-redux';
import { ITodoListStateProps, TodoList } from '../components/TodoList';
import { memoizedIds } from '../selectors/memoizeIds';
import { IAppState } from '../store/IAppState';

const mapStateToProps = (state: IAppState): ITodoListStateProps => ({
  itemIds: memoizedIds(state.items.keySeq().toArray())
});

const TodoListContainer: React.ComponentClass = connect(mapStateToProps)(TodoList);
export { TodoListContainer as TodoList };
