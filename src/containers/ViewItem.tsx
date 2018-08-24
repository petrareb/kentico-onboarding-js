import * as React from 'react';
import { connect } from 'react-redux';
import {
  ViewItemDispatchProps,
  ViewItem,
  ViewItemOwnProps
} from '../components/ViewItem';
import { toggleEdited } from '../actions/todoActions';
import { Dispatch } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch): ViewItemDispatchProps => ({
  onRowClick: (itemId: Guid) => dispatch(toggleEdited(itemId))
});

const ViewItemContainer: React.ComponentClass<ViewItemOwnProps> = connect(null, mapDispatchToProps)(ViewItem);
export { ViewItemContainer as ViewItem };
