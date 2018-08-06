import React from 'react';

import { ItemToAdd } from '../containers/ItemToAdd';
import { TodoListItem } from '../containers/TodoListItem';
import PropTypes from 'prop-types';


export class TodoList extends React.PureComponent {
  static displayName = 'TodoList';

  static propTypes = {
    items: Immutable.OrderedMap.isRequired
  };


  render() {
    const table_rows = this
      .props
      .items
      .valueSeq()
      .map((mapItem, i) =>
        (
          <TodoListItem
            item={mapItem}
            index={i + 1}
            key={mapItem.id}
          />
        )
      );

    return (
      <div>
        <ul className="list-group">
          {table_rows}
          <ItemToAdd />
        </ul>
      </div>
    );
  }
}
