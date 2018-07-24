import React from 'react';
import PropTypes from 'prop-types';
import { EditItem } from './EditItem';
import { ViewItem } from './ViewItem';

export const TodoListItem = ({
  item, onRowClick, onDeleteClick, onSaveClick, onCancelClick
}) => (
  (item.isEdited)
    ? <EditItem
      item={item}
      onSaveClick={onSaveClick}
      onDeleteClick={onDeleteClick}
      onCancelClick={onCancelClick}
    />
    : <ViewItem
      item={item}
      onRowClick={onRowClick}
    />
);

TodoListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    isEdited: PropTypes.bool.isRequired
  }),
  onRowClick: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired
};
