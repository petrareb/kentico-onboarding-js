import { connect } from 'react-redux';
import * as React from 'react';
import { TodoListItemStateProps, TodoListItem } from '../components/TodoListItem';
import { AppState } from '../store/AppState';

export type TodoListItemContainerProps = {
  id: Guid,
  index: number
};

const mapStateToProps = (state: AppState, ownProps: TodoListItemContainerProps): TodoListItemStateProps => ({
  item: state.items.get(ownProps.id),
  index: ownProps.index
});

const TodoListItemContainer: React.ComponentClass<TodoListItemContainerProps> = connect(mapStateToProps)(TodoListItem);
export { TodoListItemContainer as TodoListItem };
