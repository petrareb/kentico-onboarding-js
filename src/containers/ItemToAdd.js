import { connect } from 'react-redux';
import { TodoListItem } from '../components/TodoListItem';
import { addItem } from '../actionCreators/actionCreators';


const mapStateToProps = (state, ownProps) => ({
  text: ownProps.text,
  enableInputColors: ownProps.enableInputColors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAddClick: () => dispatch(addItem(ownProps.text))
});

const ItemToAddContainer = connect(mapStateToProps, mapDispatchToProps)(TodoListItem);
export { ItemToAddContainer as ItemToAdd };
