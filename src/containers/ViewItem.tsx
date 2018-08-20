import * as React from 'react';
import { connect } from 'react-redux';
import { IViewItemDispatchProps, ViewItem } from '../components/ViewItem';
import { toggleEdited } from '../actions/todoActions';
import { Dispatch } from 'redux';
import { ListItemRecord } from '../models/ListItemRecord';

export type IViewItemContainerProps = {
  index: number,
  item: ListItemRecord
};

const mapDispatchToProps = (dispatch: Dispatch): IViewItemDispatchProps => ({
  onRowClick: (itemId: string) => dispatch(toggleEdited(itemId))
});

const ViewItemContainer: React.ComponentClass<IViewItemContainerProps> = connect(null, mapDispatchToProps)(ViewItem);
export { ViewItemContainer as ViewItem };
