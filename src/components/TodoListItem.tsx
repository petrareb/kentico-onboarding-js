import * as React from 'react';
import { EditItem } from '../containers/EditItem';
import { ViewItem } from '../containers/ViewItem';
import { itemInterface } from '../constants/itemInterface';

export interface TodoListItemInterface {
  item: itemInterface,
  index: number,
  //displayName?: string
}

export const TodoListItem = ({item, index}: TodoListItemInterface) => (
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

//TodoListItem.displayName = 'TodoListItem';
