import { connect } from 'react-redux';
import { ViewItem } from '../components/ViewItem';
import { toggleEdited } from '../actionCreators/publicActionCreator';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps
});

const mapDispatchToProps = (dispatch) => ({
  onRowClick: (itemId) => dispatch(toggleEdited(itemId))
});

const ViewItemContainer = connect(mapStateToProps, mapDispatchToProps)(ViewItem);
export { ViewItemContainer as ViewItem };
