import { connect } from 'react-redux';
import { TodoListItem } from '../components/TodoListItem';

export interface todoListItemProps {
  id: string
}

export interface todoListItemState {

}

const mapStateToProps = (state, ownProps) => ({
  item: state.items.get(ownProps.id)
});

const TodoListItemContainer = connect(mapStateToProps)(TodoListItem);
export { TodoListItemContainer as TodoListItem };
