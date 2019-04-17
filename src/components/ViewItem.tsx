import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ListItem } from '../models/ListItem';
import { TodoListAction } from '../actions/types/TodoListAction';

export type ViewItemOwnProps = {
  readonly index: number,
  readonly item: ListItem
};

export type ViewItemDispatchProps = {
  readonly onItemClick: () => TodoListAction
};

export type ViewItemProps = ViewItemDispatchProps & ViewItemOwnProps;

export const ViewItem: React.StatelessComponent<ViewItemProps> = ({ item, index, onItemClick }) => {
  const _enableEditing = (): TodoListAction => onItemClick();
  return (
    <li className="list-group-item">
      <span
        className="text-left"
        onClick={_enableEditing}
      >
        {index}.&nbsp;
        {item.text}
      </span>
    </li>
  );
};

ViewItem.displayName = 'ViewItem';

ViewItem.propTypes = {
  item: PropTypes.instanceOf(ListItem).isRequired,
  index: PropTypes.number.isRequired,

  onItemClick: PropTypes.func.isRequired
};
