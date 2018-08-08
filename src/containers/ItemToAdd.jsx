import { connect } from 'react-redux';
import { ItemToAdd } from '../components/ItemToAdd';
import { addNewItem } from '../actionCreators/publicActionCreator';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps
});

const mapDispatchToProps = (dispatch) => ({
  onAddClick: (text) => dispatch(addNewItem(text))
});

const ItemToAddContainer = connect(mapStateToProps, mapDispatchToProps)(ItemToAdd);
export { ItemToAddContainer as ItemToAdd };
