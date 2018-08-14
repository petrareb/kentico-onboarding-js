import * as React from 'react';
import { itemInterface } from '../constants/itemInterface';

export interface viewItemProps {
  item: itemInterface,
  index: number,
  onRowClick: Function
}

export class ViewItem extends React.PureComponent<viewItemProps> {
  static displayName = 'ViewItem';

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
