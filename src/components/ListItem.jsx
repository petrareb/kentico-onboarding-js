import React from 'react';
import PropTypes from 'prop-types';
import { ModifiableItem } from './ModifiableItem';
import { RowItem } from './RowItem';

export const ListItem = ({
  name, id, number, chosen, onRowClickFunction
}) => {
  if (chosen) {
    return <ModifiableItem text={name} id={id} number={number}/>;
  }
  return <RowItem name={name} number={number} id={id} onRowClick={onRowClickFunction}/>;
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  chosen: PropTypes.bool.isRequired,
  onRowClickFunction: PropTypes.func.isRequired
};
