import * as React from 'react';
import { connect } from 'react-redux';
import { TodoListStateProps, TodoList } from '../components/TodoList';
import { memoizedIds } from '../selectors/memoizeIds';
import { AppState } from '../store/AppState';

const mapStateToProps = (state: AppState): TodoListStateProps => ({
  itemIds: memoizedIds(state.items.keySeq().toArray())
});

const TodoListContainer: React.ComponentClass = connect(mapStateToProps)(TodoList);
export { TodoListContainer as TodoList };
