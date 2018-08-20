import { connect } from 'react-redux';
import * as React from 'react';
import { ITodoListItemStateProps, TodoListItem } from '../components/TodoListItem';
import { IAppState } from '../store/IAppState';

export type ITodoListItemContainerProps = {
  id: string,
  index: number
};

const mapStateToProps = (state: IAppState, ownProps: ITodoListItemContainerProps): ITodoListItemStateProps => ({
  item: state.items.get(ownProps.id),
  index: ownProps.index
});

const TodoListItemContainer: React.ComponentClass<ITodoListItemContainerProps> = connect(mapStateToProps)(TodoListItem);
export { TodoListItemContainer as TodoListItem };