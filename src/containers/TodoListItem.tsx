import { connect } from 'react-redux';
import * as React from 'react';
import {
  TodoListItemStateProps,
  TodoListItem, ITodoListItemContainerOwnProps,
} from '../components/TodoListItem';
import { AppState } from '../store/AppState';

const mapStateToProps = (state: AppState, ownProps: ITodoListItemContainerOwnProps): TodoListItemStateProps => ({
  item: state.items.get(ownProps.id)
});

const TodoListItemContainer: React.ComponentClass<ITodoListItemContainerOwnProps> = connect(mapStateToProps)(TodoListItem);
export { TodoListItemContainer as TodoListItem };
