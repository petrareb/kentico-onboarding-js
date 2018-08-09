import React from 'react';

import { ItemToAdd } from '../containers/ItemToAdd';
import { TodoListItem } from '../containers/TodoListItem';
import PropTypes from 'prop-types';

export class TodoList extends React.PureComponent {
  static displayName = 'TodoList';

  static propTypes = {
    itemIds: PropTypes.array.isRequired
  };

  render() {
    const table_rows = this
      .props
      .itemIds
      .map((itemId, i) =>
        (
          <TodoListItem
            id={itemId}
            index={i + 1}
            key={itemId}
          />
        )
      );

    return (
      <div>
        <ul className="list-group">
          {table_rows}
          <ItemToAdd/>
        </ul>
      </div>
    );
  }
}
