import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ItemToAdd } from '../containers/ItemToAdd';
import { TodoListItem } from '../containers/TodoListItem';
import { ReactNode, ReactNodeArray } from 'react';

export type ITodoListStateProps = {
  itemIds: Array<Guid>
};

export type ITodoListProps = ITodoListStateProps;

export class TodoList extends React.PureComponent<ITodoListProps> {
  static displayName = 'TodoList';

  static propTypes = {
    itemIds: PropTypes.array.isRequired
  };

  render(): ReactNode {
    const todoItems: ReactNodeArray = this
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
          {todoItems}
          <ItemToAdd />
        </ul>
      </div>
    );
  }
}
