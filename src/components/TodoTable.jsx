import React from 'react';

import { ItemToAdd } from './ItemToAdd';
import { guid } from '../utils/generateID';
import { ListItem } from './ListItem';

export class TodoTable extends React.PureComponent {
  static displayName = 'TodoTable';

  constructor() {
    super();
    this.state = {
      values: [
        {
          text: 'make coffee',
          id: guid(),
          chosen: false
        },
        {
          text: 'sleep',
          id: guid(),
          chosen: false
        }]
    };
  }


  modifyChosenAtId = (itemId, chosenVal) => {
    const newArray = this.state.values.slice();
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].id === itemId) {
        newArray[i].chosen = chosenVal;
        break;
      }
    }
    this.setState({
      values: newArray
    });
  };


  deleteElementWithId = (itemId) => {
    const newArray = this.state.values.slice();
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].id === itemId) {
        newArray.splice(i, 1);
        break;
      }
    }
    this.setState({
      values: newArray
    });
  };

  editElementTextWithId = (itemId, newValue) => {
    const newArray = this.state.values.slice();
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].id === itemId) {
        newArray[i].text = newValue;
        break;
      }
    }
    this.setState({
      values: newArray
    });
    this.modifyChosenAtId(itemId, false);
  };


  addNewItem = (changedText) => {
    const newValue = {
      text: changedText,
      id: guid(),
      chosen: false
    };
    this.setState(prevState => {
      return {
        values: [
          ...prevState.values,
          newValue
        ]
      };
    });
  };

  render() {
    const table_rows = this
      .state
      .values
      .map((item, i) => (
        <ListItem
          key={item.id}
          id={item.id}
          name={item.text}
          number={i + 1}
          chosen={item.chosen}
          onRowClick={this.modifyChosenAtId}
          onSaveClick={this.editElementTextWithId}
          onDeleteClick={this.deleteElementWithId}
          onCancelClick={this.modifyChosenAtId}
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
