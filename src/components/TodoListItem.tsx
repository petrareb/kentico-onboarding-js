import * as React from 'react';
//import * as PropTypes from 'prop-types';
import { ViewItem } from '../containers/ViewItem';
import { IItem } from '../constants/IItem';
import { EditItem } from './EditItem';

export type ITodoListItemStateProps = {
  item: IItem,
  index: number
}

export interface ITodoListItemProps extends ITodoListItemStateProps {}

export const TodoListItem = ({item, index}: ITodoListItemProps) => (
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

//TodoListItem.propTypes = {
//  item: PropTypes.shape({
//    id: PropTypes.string.isRequired,
//    text: PropTypes.string.isRequired,
//    isEdited: PropTypes.bool.isRequired
//  }).isRequired,
//  index: PropTypes.number.isRequired,
//};
