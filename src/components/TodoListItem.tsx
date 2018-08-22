import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ViewItem } from '../containers/ViewItem';
import { EditItem } from '../containers/EditItem';
import { ListItem } from '../models/ListItem';

export type TodoListItemStateProps = {
  item: ListItem,
  index: number
};

export type TodoListItemProps = TodoListItemStateProps;

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
