import { connect } from 'react-redux';
import { addNewItem } from '../actionCreators/actionCreators';
import { ItemToAdd } from '../components/ItemToAdd';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps
});

const mapDispatchToProps = (dispatch) => ({
  onAddClick: (text) => dispatch(addNewItem(text))
});

const ItemToAddContainer = connect(mapStateToProps, mapDispatchToProps)(ItemToAdd);
export { ItemToAddContainer as ItemToAdd };
