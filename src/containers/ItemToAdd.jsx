import { connect } from 'react-redux';
import { ItemToAdd } from '../components/ItemToAdd';
import { addNewItem } from '../actions/todoActions';

const mapDispatchToProps = (dispatch) => ({
  onAddClick: (text) => dispatch(addNewItem(text))
});

const ItemToAddContainer = connect(null, mapDispatchToProps)(ItemToAdd);
export { ItemToAddContainer as ItemToAdd };
