import React from 'react';
import PropTypes from 'prop-types';
import { ModifyItem } from './ModifyItem';
import { ViewItem } from './ViewItem';

export const ListItem = ({
  name, id, number, chosen, onRowClick, onDeleteClick, onSaveClick, onCancelClick
}) => {
  if (chosen) {
    return (<ModifyItem
      text={name}
      id={id}
      number={number}
      onSaveClick={onSaveClick}
      onDeleteClick={onDeleteClick}
      onCancelClick={onCancelClick}
    />);
  }
  return (<ViewItem
    name={name}
    number={number}
    id={id}
    onRowClick={onRowClick}
  />);
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  chosen: PropTypes.bool.isRequired,
  onRowClick: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired
};
