import { connect } from 'react-redux';
import { addItem } from '../actionCreators/actionCreators';
import { ItemToAdd } from '../components/ItemToAdd';

const mapStateToProps = (state, ownProps) => ({
  text: ownProps.text,
  enableInputColors: ownProps.enableInputColors
});

const mapDispatchToProps = (dispatch) => ({
  onAddClick: (text) => dispatch(addItem(text))
});

const ItemToAddContainer = connect(mapStateToProps, mapDispatchToProps)(ItemToAdd);
export { ItemToAddContainer as ItemToAdd };
