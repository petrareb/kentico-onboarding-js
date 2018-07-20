import React from 'react';

import { ItemToAdd } from './ItemToAdd';
import { generateGuid } from '../utils/generateId';
import { TodoListItem } from './TodoListItem';

export class TodoList extends React.PureComponent {
  static displayName = 'TodoList';

  constructor() {
    super();
    this.state = {
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
  }


  setEdited = (itemId, edited) => {
    this.setState((prevState) => ({
      items: prevState.items.map((item) =>
        ((item.id === itemId)
          ? ({
            ...item,
            isEdited: edited
          })
          : item))
    }));
  };

  deleteItem = (itemId) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.id !== itemId)
    }));
  };

  saveItem = (itemId, newText) => {
    this.setState((prevState) => ({
      items: prevState.items.map((item) =>
        ((item.id === itemId)
          ? ({
            ...item,
            text: newText,
            isEdited: false
          })
          : item))
    }));
  };


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
      .map((item, i) => (
          <TodoListItem
            key={item.id}
            id={item.id}
            name={item.text}
            index={i + 1}
            isEdited={item.isEdited}
            onRowClick={this.setEdited}
            onSaveClick={this.saveItem}
            onDeleteClick={this.deleteItem}
            onCancelClick={this.setEdited}
          />
      ));

    return (
        <div>
          <ul className="list-group">
            {table_rows}
            <ItemToAdd onAddClick={this.addNewItem}/>
          </ul>
        </div>
    );
  }
}
