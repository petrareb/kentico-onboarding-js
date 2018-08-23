import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ViewItem } from '../containers/ViewItem';
import { EditItem } from '../containers/EditItem';
import { ListItem } from '../models/ListItem';

export type TodoListItemOwnProps = {
  readonly id: Guid,
  readonly index: number
};

export type TodoListItemStateProps = {
  readonly item: ListItem,
  readonly index: number
};

export type TodoListItemProps = TodoListItemStateProps & TodoListItemOwnProps;

export const TodoListItem: React.StatelessComponent<TodoListItemStateProps> = ({ item, index }: TodoListItemProps) => (
  (item.isEdited)
    ? (
      <EditItem
        item={item}
        index={index}
      />
    )
    : (
      <ViewItem
        item={item}
        index={index}
      />
    )
);

TodoListItem.displayName = 'TodoListItem';

TodoListItem.propTypes = {
  item: PropTypes.instanceOf(ListItem).isRequired,
  index: PropTypes.number.isRequired,
};
