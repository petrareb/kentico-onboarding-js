import { connect } from 'react-redux';
import { ITodoListItemStateProps, TodoListItem } from '../components/TodoListItem';
import { IAppState } from '../store/IAppState';

export interface ITodoListContainerProps {
  id: string,
  index: number
}

const mapStateToProps = (state: IAppState, ownProps: ITodoListContainerProps): ITodoListItemStateProps => ({
  item: state.items.get(ownProps.id),
  index: ownProps.index
});

const TodoListItemContainer = connect(mapStateToProps)(TodoListItem);
export { TodoListItemContainer as TodoListItem };
