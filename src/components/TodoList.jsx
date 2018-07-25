import React from 'react';

import { ItemToAdd } from './ItemToAdd';
import { generateGuid } from '../utils/generateId';
import { TodoListItem } from './TodoListItem';
import { ListItemRecord } from '../records/ListItemRecord';
import { OrderedMap } from 'immutable';


const initItem1 = new ListItemRecord({
  text: 'Make coffee',
  id: generateGuid(),
  isEdited: false
});

const initItem2 = new ListItemRecord({
  text: 'Sleep',
  id: generateGuid(),
  isEdited: false
});

const initialValues = [
  [initItem1.id, initItem1], [initItem2.id, initItem2]
];

export class TodoList extends React.PureComponent {
  static displayName = 'TodoList';

  state = {
    items: OrderedMap(initialValues)
  };

  _toddleEdited = (itemId) => {
    this.setState((prevState) => ({
      items: prevState.items.update(itemId, (oldItem) => oldItem.merge({ isEdited: !oldItem.isEdited }))
    }));
  };

  _setEditedToItem = (items, id, edited) => {
    if (!items.has(id)) {
      return items;
    }
    const chosenItem = items.get(id);
    return items.set(id, {
      ...chosenItem,
      isEdited: edited
    });
  };

  _deleteItem = (itemId) =>
    this.setState((prevState) => ({
      items: prevState.items.delete(itemId)
    }));

  _saveItem = (itemId, newText) =>
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

  _addNewItem = (changedText) => {
    const newValue = new ListItemRecord(
      {
        text: changedText,
        id: generateGuid()
      }
    );

    this.setState((prevState => ({
      items: prevState.items.set(newValue.id, newValue)
    })));
  };


  render() {
    const table_rows = this
      .state
      .items
      .valueSeq()
      .map((_item, i) =>
        (
          // console.log(_item)
          <TodoListItem
            item={_item}
            index={i + 1}
            onRowClick={this._toddleEdited}
            onSaveClick={this._saveItem}
            onDeleteClick={this._deleteItem}
            onCancelClick={this._toddleEdited}
            key={_item.id}
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
