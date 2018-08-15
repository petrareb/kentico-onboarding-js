import { connect } from 'react-redux';
import { ItemToAdd } from '../components/ItemToAdd';
import { addNewItem } from '../actions/todoActions';
import { Dispatch } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAddClick: (text: string) => dispatch(addNewItem(text))
});

const ItemToAddContainer = connect(null, mapDispatchToProps)(ItemToAdd);
export { ItemToAddContainer as ItemToAdd };
