import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ViewItem } from '../containers/ViewItem';
import { EditItem } from '../containers/EditItem';
import { ListItem } from '../models/ListItem';

type TodoListItemOwnProps = {
  readonly index: number
};

export type ITodoListItemContainerOwnProps = TodoListItemOwnProps & {
  readonly id: Guid;
};

export type TodoListItemStateProps = {
  readonly item: ListItem
};

type TodoListItemProps = TodoListItemStateProps & ITodoListItemContainerOwnProps;

export const TodoListItem: React.StatelessComponent<TodoListItemProps> = ({ item, index }: TodoListItemProps) => (
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
  id: PropTypes.string.isRequired
};
