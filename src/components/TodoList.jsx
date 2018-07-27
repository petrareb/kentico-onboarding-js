import React from 'react';

import { ItemToAdd } from './ItemToAdd';
import { generateGuid } from '../utils/generateId';
import { TodoListItem } from './TodoListItem';
import { ListItemRecord } from '../models/ListItemRecord';
import { OrderedMap } from 'immutable';
import { initialValues } from '../constants/initialListValues';


export class TodoList extends React.PureComponent {
  static displayName = 'TodoList';

  state = {
    items: OrderedMap(initialValues)
  };

  _toggleEdited = itemId =>
    this.setState(prevState => ({
      items: prevState.items.update(itemId, oldItem =>
        oldItem.merge({
          isEdited: !oldItem.isEdited
        }))
    }));

  _deleteItem = itemId =>
    this.setState(prevState => ({
      items: prevState.items.delete(itemId)
    }));

  _saveItem = (itemId, newText) =>
    this.setState(prevState => ({
      items: prevState.items.update(itemId, oldItem =>
        oldItem.merge({
          isEdited: false,
          text: newText
        }))
    }));

  _createNewItem = newText =>
    new ListItemRecord({
      id: generateGuid(),
      text: newText
    });

  _addNewItem = text => {
    const newValue = this._createNewItem(text);
    this.setState((prevState => ({
      items: prevState.items.set(newValue.id, newValue)
    })));
  };

  render() {
    const table_rows = this
      .state
      .items
      .valueSeq()
      .map((mapItem, i) =>
        (
          <TodoListItem
            item={mapItem}
            index={i + 1}
            onRowClick={this._toggleEdited}
            onSaveClick={this._saveItem}
            onDeleteClick={this._deleteItem}
            onCancelClick={this._toggleEdited}
            key={mapItem.id}
          />
        )
      );

    return (
      <div>
        <ul className="list-group">
          {table_rows}
          <ItemToAdd onAddClick={this._addNewItem}/>
        </ul>
      </div>
    );
  }
}
