import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ListItem } from '../models/ListItem';
import { Action } from '../actions/types/Action';
import { ReactNode } from 'react';

export type ViewItemStateProps = {
  item: ListItem,
  index: number
};

export type ViewItemDispatchProps = {
  onRowClick: (id: Guid) => Action
};

export type ViewItemProps = ViewItemDispatchProps & ViewItemStateProps;

export class ViewItem extends React.PureComponent<ViewItemProps> {
  static displayName = 'ViewItem';

  static propTypes = {
    item: PropTypes.instanceOf(ListItem).isRequired,
    index: PropTypes.number.isRequired,

    onRowClick: PropTypes.func.isRequired
  };

  _enableEditing = (): Action => this.props.onRowClick(this.props.item.id);

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
