import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IItem } from '../constants/IItem';
import { ListItemRecord } from '../models/ListItemRecord';

export type IViewItemStateProps = {
  item: IItem,
  index: number
}
// TODO Function
export type IViewItemDispatchProps = {
  onRowClick: Function
}

export interface IViewItemProps extends IViewItemDispatchProps, IViewItemStateProps {}

export class ViewItem extends React.PureComponent<IViewItemProps> {
  static displayName = 'ViewItem';

  static propTypes = {
    item: PropTypes.instanceOf(ListItemRecord).isRequired,
    index: PropTypes.number.isRequired,

    onRowClick: PropTypes.func.isRequired
  };

  _enableEditing = () => this.props.onRowClick(this.props.item.id);

  render() {
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
