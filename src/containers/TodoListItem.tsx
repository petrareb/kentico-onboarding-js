import { connect } from 'react-redux';
import * as React from 'react';
import {
  TodoListItemStateProps,
  TodoListItem,
  TodoListItemOwnProps
} from '../components/TodoListItem';
import { AppState } from '../store/AppState';

const mapStateToProps = (state: AppState, ownProps: TodoListItemOwnProps): TodoListItemStateProps => ({
  item: state.items.get(ownProps.id),
  index: ownProps.index
});

const TodoListItemContainer: React.ComponentClass<TodoListItemOwnProps> = connect(mapStateToProps)(TodoListItem);
export { TodoListItemContainer as TodoListItem };
