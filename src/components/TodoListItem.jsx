import React from 'react';
import PropTypes from 'prop-types';
import { EditItem } from './EditItem';
import { ViewItem } from './ViewItem';

export const TodoListItem = ({
  item,
  index,
  onRowClick,
  onDeleteClick,
  onSaveClick,
  onCancelClick
}) => (
  (item.isEdited)
    ? <EditItem
      item={item}
      index={index}
      onSaveClick={onSaveClick}
      onDeleteClick={onDeleteClick}
      onCancelClick={onCancelClick}
    />
    : <ViewItem
      item={item}
      index={index}
      onRowClick={onRowClick}
    />
);

TodoListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isEdited: PropTypes.bool.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,

  onRowClick: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired
};

TodoListItem.displayName = 'TodoListItem';
