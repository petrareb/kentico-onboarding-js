import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ListItemRecord } from '../models/ListItemRecord';
import { IAction } from '../actions/IAction';
import { ReactNode } from 'react';

export type IViewItemStateProps = {
  item: ListItemRecord,
  index: number
};

export type IViewItemDispatchProps = {
  onRowClick: (id: string) => IAction
};

export type IViewItemProps = IViewItemDispatchProps & IViewItemStateProps;

export class ViewItem extends React.PureComponent<IViewItemProps> {
  static displayName = 'ViewItem';

  static propTypes = {
    item: PropTypes.instanceOf(ListItemRecord).isRequired,
    index: PropTypes.number.isRequired,

    onRowClick: PropTypes.func.isRequired
  };

  _enableEditing = (): IAction => this.props.onRowClick(this.props.item.id);

  render(): ReactNode {
    return (
      <li className="list-group-item">
        <span
          className="text-left"
          onClick={this._enableEditing}
        >
          {this.props.index}.&nbsp;
          {this.props.item.text}
        </span>
      </li>
    );
  }
}
