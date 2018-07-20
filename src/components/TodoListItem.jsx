import React from 'react';
import PropTypes from 'prop-types';
import { EditItem } from './EditItem';
import { ViewItem } from './ViewItem';

export const TodoListItem = ({
  name, id, index, isEdited, onRowClick, onDeleteClick, onSaveClick, onCancelClick
}) => (
  (isEdited)
    ? <EditItem
      text={name}
      id={id}
      index={index}
      onSaveClick={onSaveClick}
      onDeleteClick={onDeleteClick}
      onCancelClick={onCancelClick}
    />
    : <ViewItem
      name={name}
      index={index}
      id={id}
      onRowClick={onRowClick}
    />
);

//   if (isEdited) {
//     return (<EditItem
//       text={name}
//       id={id}
//       index={index}
//       onSaveClick={onSaveClick}
//       onDeleteClick={onDeleteClick}
//       onCancelClick={onCancelClick}
//     />);
//   }
//   return (<ViewItem
//     name={name}
//     index={index}
//     id={id}
//     onRowClick={onRowClick}
//   />);
// };

TodoListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isEdited: PropTypes.bool.isRequired,
  onRowClick: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired
};
