import React from 'react';
import PropTypes from 'prop-types';
import { EditItem } from './EditItem';
import { ViewItem } from './ViewItem';

export const TodoListItem = ({
  itemProps, isEdited, onRowClick, onDeleteClick, onSaveClick, onCancelClick
}) => (
  (isEdited)
    ? <EditItem
      itemProps={itemProps}
      onSaveClick={onSaveClick}
      onDeleteClick={onDeleteClick}
      onCancelClick={onCancelClick}
    />
    : <ViewItem
      itemProps={itemProps}
      onRowClick={onRowClick}
    />
);

TodoListItem.propTypes = {
  itemProps: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
  }),
  isEdited: PropTypes.bool.isRequired,
  onRowClick: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired
};
