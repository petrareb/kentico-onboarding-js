import { connect } from 'react-redux';
import { ViewItem } from '../components/ViewItem';
import { toggleEdited } from '../actions/todoActions';

const mapDispatchToProps = (dispatch) => ({
  onRowClick: (itemId) => dispatch(toggleEdited(itemId))
});

const ViewItemContainer = connect(null, mapDispatchToProps)(ViewItem);
export { ViewItemContainer as ViewItem };
