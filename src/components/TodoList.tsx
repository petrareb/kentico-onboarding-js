import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ItemToAdd } from '../containers/ItemToAdd';
import { TodoListItem } from '../containers/TodoListItem';
import { ReactNodeArray } from 'react';

export type TodoListStateProps = {
  readonly itemIds: Array<Guid>
};

type TodoListProps = TodoListStateProps;

export const TodoList: React.StatelessComponent<TodoListProps> = ({ itemIds }) => {
  const todoItems: ReactNodeArray = itemIds
    .map((itemId: Guid, itemIndex: number) => (
      <TodoListItem
        id={itemId}
        index={itemIndex + 1}
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
};

TodoList.displayName = 'TodoList';

TodoList.propTypes = {
  itemIds: PropTypes.array.isRequired
};
