import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ViewItem } from '../containers/ViewItem';
import { EditItem } from '../containers/EditItem';
import { ListItemRecord } from '../models/ListItemRecord';

export type ITodoListItemStateProps = {
  item: ListItemRecord,
  index: number
};

export type ITodoListItemProps = ITodoListItemStateProps;

export const TodoListItem: React.StatelessComponent<ITodoListItemStateProps> = ({item, index}: ITodoListItemProps) => (
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
  item: PropTypes.instanceOf(ListItemRecord).isRequired,
  index: PropTypes.number.isRequired,
};
