import React from 'react';
import PropTypes from 'prop-types';
import { EditItem } from '../containers/EditItem';
import { ViewItem } from '../containers/ViewItem';

export const TodoListItem = ({
  item,
  index
}) => (
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

TodoListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isEdited: PropTypes.bool.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
};

TodoListItem.displayName = 'TodoListItem';
