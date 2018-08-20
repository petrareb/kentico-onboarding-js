import * as React from 'react';
import { connect } from 'react-redux';
import { ITodoListStateProps, TodoList } from '../components/TodoList';
import { memoizedIds } from '../selectors/memoizeIds';
import { OrderedMap } from 'immutable';
import { ListItemRecord } from '../models/ListItemRecord';

export type ITodoListState = {
  readonly items: OrderedMap<string, typeof ListItemRecord>
};

const mapStateToProps = (state: ITodoListState): ITodoListStateProps => ({
  itemIds: memoizedIds(state.items.keySeq().toArray())
});

const TodoListContainer: React.ComponentClass = connect(mapStateToProps)(TodoList);
export { TodoListContainer as TodoList };
