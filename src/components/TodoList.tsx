import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ItemToAdd } from '../containers/ItemToAdd';
import { TodoListItem } from '../containers/TodoListItem';
import { ReactNode } from 'react';

export type ITodoListStateProps = {
  itemIds: Array<string>
};

export type ITodoListProps = ITodoListStateProps;

export class TodoList extends React.PureComponent<ITodoListProps> {
  static displayName = 'TodoList';

  static propTypes = {
    itemIds: PropTypes.array.isRequired
  };

  render(): ReactNode {
    const table_rows = this
      .props
      .itemIds
      .map((itemId, i) => (
        <TodoListItem
          id={itemId}
          index={i + 1}
          key={itemId}
        />
      ));

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
