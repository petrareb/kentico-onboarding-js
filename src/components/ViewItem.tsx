import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ListItem } from '../models/ListItem';
import { Action } from '../actions/types/Action';
import { ReactNode } from 'react';

export type ViewItemOwnProps = {
  readonly index: number,
  readonly item: ListItem
};

export type ViewItemDispatchProps = {
  readonly onRowClick: () => Action
};

export type ViewItemProps = ViewItemDispatchProps & ViewItemOwnProps;

export class ViewItem extends React.PureComponent<ViewItemProps> {
  static displayName = 'ViewItem';

  static propTypes = {
    item: PropTypes.instanceOf(ListItem).isRequired,
    index: PropTypes.number.isRequired,

    onRowClick: PropTypes.func.isRequired
  };

  _enableEditing = (): Action => this.props.onRowClick();


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
