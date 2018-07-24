import React from 'react';

import { AddItem } from './AddItem';
import { generateGuid } from '../utils/generateId';
import { TodoListItem } from './TodoListItem';

export class TodoList extends React.PureComponent {
  static displayName = 'TodoList';

  state = {
    items: [
      {
        text: 'Make coffee',
        id: generateGuid(),
        isEdited: false
      },
      {
        text: 'Sleep',
        id: generateGuid(),
        isEdited: false
      }]
  };

  setEdited = (itemId, edited) =>
    this.setState(prevState => ({
      items: prevState.items.map((item) =>
        ((item.id === itemId)
          ? ({
            ...item,
            isEdited: edited
          })
          : item))
    }));

  deleteItem = (itemId) =>
    this.setState(prevState => ({
      items: prevState.items.filter((item) => item.id !== itemId)
    }));

  saveItem = (itemId, newText) =>
    this.setState(prevState => ({
      items: prevState.items.map((item) =>
        ((item.id === itemId)
          ? ({
            ...item,
            text: newText,
            isEdited: false
          })
          : item))
    }));

  addNewItem = (changedText) => {
    const newValue = {
      text: changedText,
      id: generateGuid(),
      isEdited: false
    };
    this.setState(prevState => ({
      items: [
        ...prevState.items,
        newValue
      ]
    }));
  };


  render() {
    const table_rows = this
      .state
      .items
      .map((_item, i) => {
        const item = {
          ..._item,
          index: i + 1
        };
        return (
          <TodoListItem
            item={item}
            onRowClick={this.setEdited}
            onSaveClick={this.saveItem}
            onDeleteClick={this.deleteItem}
            onCancelClick={this.setEdited}
          />
        );
      });

    return (
        <div>
          <ul className="list-group">
            {table_rows}
            <AddItem onAddClick={this.addNewItem}/>
          </ul>
        </div>
    );
  }
}
