import React from 'react';

import { ItemToAdd } from './ItemToAdd';
import { guid } from '../utils/generateID';
import { ListItem } from './ListItem';

export class TodoTable extends React.PureComponent {
  static displayName = 'TodoTable';

  constructor() {
    super();
    this.state = {
      values: [{
        text: 'make coffee',
        id: guid(),
        chosen: false
      }, {
        text: 'sleep',
        id: guid(),
        chosen: false
      }]
    };
  }

  setChosen = (itemId, chosenValue) => {
    this.setState(() => {
      return {
        values: this._modifyChosenAtId(itemId, chosenValue)
      };
    });
  };

  // TODO: save button
  _modifyChosenAtId = (itemId, chosenVal) => {
    const newArray = this.state.values.slice();
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].id === itemId) {
        newArray[i].chosen = chosenVal;
        break;
      }
    }
    return newArray;
  };

  deleteElementWithId = (itemId) => {
    const newArray = this.state.values.slice();
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].id === itemId) {
        newArray.splice(i, 1);
        break;
      }
    }
    this.setState(() => {
      return {
        values: newArray
      };
    });
  };

  editElementWithId = (itemId, newValue) => {
    const newArray = this.state.values.slice();
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].id === itemId) {
        newArray[i].text = newValue;
        break;
      }
    }
    this.setState(() => {
      return {
        values: newArray
      };
    });
    this._modifyChosenAtId(itemId, false);
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
          onRowClick={this.setChosen}
          onSaveClick={this.editElementWithId}
          onDeleteClick={this.deleteElementWithId}
          onCancelClick={this.setChosen}
        />
      ));

    return (
      <div>
        <table>
          <tbody>
          {table_rows}
          </tbody>
        </table>
        <ItemToAdd onAddClick={this.addNewItem}/>
      </div>
    );
  }
}
