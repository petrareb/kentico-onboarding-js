import { connect } from 'react-redux';
import * as React from 'react';
import {
  TodoListItemStateProps,
  TodoListItem, TodoListItemOwnProps,
} from '../components/TodoListItem';
import { AppState } from '../store/AppState';

export interface ITodoListItemContainerOwnProps extends TodoListItemOwnProps {
  readonly id: Guid;
}

const mapStateToProps = (state: AppState, ownProps: ITodoListItemContainerOwnProps): TodoListItemStateProps => ({
  item: state.items.get(ownProps.id)
});

const TodoListItemContainer: React.ComponentClass<ITodoListItemContainerOwnProps> = connect(mapStateToProps)(TodoListItem);
export { TodoListItemContainer as TodoListItem };
