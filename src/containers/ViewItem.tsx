import * as React from 'react';
import { connect } from 'react-redux';
import { ViewItemDispatchProps, ViewItem } from '../components/ViewItem';
import { toggleEdited } from '../actions/todoActions';
import { Dispatch } from 'redux';
import { ListItem } from '../models/ListItem';

export type ViewItemContainerProps = {
  index: number,
  item: ListItem
};

const mapDispatchToProps = (dispatch: Dispatch): ViewItemDispatchProps => ({
  onRowClick: (itemId: Guid) => dispatch(toggleEdited(itemId))
});

const ViewItemContainer: React.ComponentClass<ViewItemContainerProps> = connect(null, mapDispatchToProps)(ViewItem);
export { ViewItemContainer as ViewItem };
