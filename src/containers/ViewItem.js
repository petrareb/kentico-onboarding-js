import { connect } from 'react-redux';

import { toggleEdited } from '../actionCreators/actionCreators';
import { ViewItem } from '../components/ViewItem';

const mapStateToProps = (state, ownProps) => ({
  item: ownProps.item,
  index: ownProps.index
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRowClick: () => dispatch(toggleEdited(ownProps.id))
});

const ViewItemContainer = connect(mapStateToProps, mapDispatchToProps)(ViewItem);
export { ViewItemContainer as ViewItem };
